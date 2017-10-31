const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

github.repos.updateBranchProtection({
  owner: 'octokit',
  repo: 'node-github',
  branch: 'a',
  required_status_checks: null,
  restrictions: null
})
