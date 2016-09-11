var autoCommitter = require('../src')

try {
  var target = require('path').join(process.cwd(), process.argv[2])
} catch (e) {
  console.log('valid path is required as argument')
  process.exit(1)
}

console.log('auto committing:', target)

var instance = autoCommitter(target)

instance.on('change', function () {
  console.log('change', instance.iddle)
})

instance.on('commit', function () {
  console.log('commit', instance.iddle)
})

instance.on('error', function () {
  console.log('error', instance.iddle)
})

instance.start()
