var runGit = require('./run-git')

module.exports = function (targetPath) {
  return runGit(targetPath, 'add --all --force')
    .then(function () {
      return runGit(targetPath, 'status')
    })
    .then(function (status) {
      if (status.match('nothing to commit')) { return }
      return runGit(targetPath, 'commit -m "Changes!"')
    })
}
