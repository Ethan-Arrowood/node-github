

const GitHubApi = require('github')


const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.gitdata.getReferences({
  owner: 'octokit',
  repo: 'node-github'
}, function (err, res) {
  console.log(err, res)
})
