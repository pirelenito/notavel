var exec = require('child_process').exec
var path = require('path')

module.exports = function (gitWorkTree, command) {
  var gitCommand = [
    'git',
    '--git-dir=' + path.join(gitWorkTree, '.git'),
    '--work-tree=' + gitWorkTree,
    command
  ].join(' ')

  return new Promise(function (resolve, reject) {
    exec(gitCommand, function (err, stdout) {
      if (err) { return reject(err) }
      resolve(stdout)
    })
  })
}
