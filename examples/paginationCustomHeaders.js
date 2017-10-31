const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

var customHeaders = {
  'User-Agent': 'blah'
}

github.issues.getForRepo({
  owner: 'octokit',
  repo: 'node-github',
  headers: customHeaders
})
