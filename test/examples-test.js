const pathResolve = require('path').resolve

const glob = require('glob')
const proxyquire = require('proxyquire').noCallThru()

const GitHubApi = require('../lib')

const examplesPaths = glob.sync('*.js', {
  cwd: pathResolve(process.cwd(), 'examples')
})

// examplesPaths.forEach(runExample)
;['enterpriseUploadAsset'].forEach(runExample)

function runExample (name) {
  proxyquire(`../examples/${name}`, {
    'github': function (options) {
      if (!options) options = {}
      options.debug = false
      return new GitHubApi(options)
    }
  })
}

process.on('unhandledRejection', (error) => {
  if (error.code === 401) {
    // this is due to our invalid authentication token, so we ignore it
    return
  }

  if (/getaddrinfo ENOTFOUND github.my-GHE-enabled-company.com/.test(error.message)) {
    // expected error from enterpriseUploadAsset, ignore
    return
  }

  console.log(error)
  process.exit(1)
})
