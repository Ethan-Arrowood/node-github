const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.repos.createStatus({
  owner: 'octokit',
  repo: 'node-github',
  sha: '81c559e2e8551982235bc86594cd86ffb135b053',
  state: 'success'
})
