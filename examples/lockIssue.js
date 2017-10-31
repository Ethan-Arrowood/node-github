const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

github.issues.lock({
  owner: 'octokit',
  repo: 'node-github',
  number: 3
})
