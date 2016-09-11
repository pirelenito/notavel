var watch = require('watch')
var debounce = require('lodash.debounce')
var runGit = require('./run-git')
var path = require('path')

var targetPath = path.join(__dirname, '../tmp')

var commit = debounce(function () {
  runGit(targetPath, 'add --all --force', function () {
    runGit(targetPath, 'commit -m "Changes!"', function () {
      console.log(arguments)
    })
  })
}, 5000)

watch.watchTree(targetPath, { ignoreDotFiles: true }, commit)
