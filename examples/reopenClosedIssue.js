const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

github.issues.edit({
  owner: 'octokit',
  repo: 'node-github',
  number: 2,
  state: 'open'
})
