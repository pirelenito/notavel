var watch = require('watch')
var debounce = require('lodash.debounce')
var commitAll = require('./commit-all')
var EventEmitter = require('events')

module.exports = function (targetPath) {
  var autoCommitter = new EventEmitter()
  autoCommitter.iddle = true

  autoCommitter.stop = function () {
    watch.unwatchTree(targetPath)
  }

  autoCommitter.start = function () {
    watch.watchTree(targetPath, { ignoreDotFiles: true }, function () {
      autoCommitter.iddle = false
      autoCommitter.emit('change')
      update()
    })
  }

  var update = debounce(function () {
    commitAll(targetPath).then(function () {
      autoCommitter.iddle = true
      autoCommitter.emit('commit')
    }, function (error) {
      autoCommitter.iddle = true
      autoCommitter.emit('error', error)
    })
  }, 5000)

  return autoCommitter
}
