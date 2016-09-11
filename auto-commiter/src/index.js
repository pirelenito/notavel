var watch = require('watch')
var debounce = require('lodash.debounce')
var commitAll = require('./commit-all')
var EventEmitter = require('events')

module.exports = function (targetPath) {
  var autoCommiter = new EventEmitter()
  autoCommiter.iddle = true

  autoCommiter.stop = function () {
    watch.unwatchTree(targetPath)
  }

  autoCommiter.start = function () {
    watch.watchTree(targetPath, { ignoreDotFiles: true }, function () {
      autoCommiter.iddle = false
      autoCommiter.emit('change')
      update()
    })
  }

  var update = debounce(function () {
    commitAll(targetPath).then(function () {
      autoCommiter.iddle = true
      autoCommiter.emit('commit')
    }, function (error) {
      autoCommiter.iddle = true
      autoCommiter.emit('error', error)
    })
  }, 5000)

  return autoCommiter
}
