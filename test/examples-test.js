const pathResolve = require('path').resolve

// load process.env.GH_TOKEN from .env file
require('dotenv').config()

const glob = require('glob')
const proxyquire = require('proxyquire').noCallThru()

const GitHubApi = require('../lib')

const examplesPaths = glob.sync('*.js', {
  cwd: pathResolve(process.cwd(), 'examples')
})

examplesPaths.forEach(runExample)

// ;[
//   'addCollaborator',
//   'addLabelsToIssue',
//   'createFile.js',
//   'createStatus.js',
//   'enterpriseUploadAsset',
//   'getContent.js',
//   'getFollowers.js'
// ].forEach(path => runExample(path))

function runExample (name) {
  proxyquire(`../examples/${name}`, {
    'github': function (options) {
      if (!options) options = {}
      options.debug = false
      const github = new GitHubApi(options)

      // set a GH_TOKEN environment variable to avoid running against
      // GitHub's rate limiting
      if (process.env.GH_TOKEN) {
        github.authenticate({
          type: 'token',
          token: process.env.GH_TOKEN
        })
      }

      return github
    }
  })
}

process.on('unhandledRejection', (error) => {
  if (error.code === 401) {
    // this is due to our invalid authentication token, so we ignore it
    return
  }

  if (error.code === 403) {
    // when API rate limit is reached 403 Forbidden is thrown
    // Known files: addCollaborator.js, getContent.js
    return
  }

  if (/getaddrinfo ENOTFOUND github.my-GHE-enabled-company.com/.test(error.message)) {
    // expected error from enterpriseUploadAsset, ignore
    return
  }

  console.log(error)
  process.exit(1)
})
