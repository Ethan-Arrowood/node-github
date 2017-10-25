

const GitHubApi = require('github')


const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.gitdata.getReference({
  owner: 'octokit',
  repo: 'node-github',
  ref: 'heads/a#blah'
}, function (err, res) {
  console.log(err, res)
})
