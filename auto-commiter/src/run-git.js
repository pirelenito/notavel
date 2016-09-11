var exec = require('child_process').exec
var path = require('path')

module.exports = function (gitWorkTree, command, callback) {
  var gitCommand = [
    'git',
    '--git-dir=' + path.join(gitWorkTree, '.git'),
    '--work-tree=' + gitWorkTree,
    command
  ].join(' ')

  exec(gitCommand, function (err, stdout) {
    if (err) { return callback(err) }
    callback(null, stdout)
  })
}
