

const GitHubApi = require('github')


const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.repos.updateBranchProtection({
  owner: 'octokit',
  repo: 'node-github',
  branch: 'a',
  required_status_checks: null,
  restrictions: null
}, function (err, res) {
  console.log(err, res)
})
