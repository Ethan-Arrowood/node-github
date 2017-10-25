

const GitHubApi = require('github')


const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.reactions.getForIssue({
  owner: 'octokit',
  repo: 'node-github',
  number: '365'
}, function (err, res) {
  console.log(err, res)
})
