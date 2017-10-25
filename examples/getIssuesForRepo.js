

const GitHubApi = require('github')


const github = new GitHubApi({
  debug: false
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.issues.getForRepo({
  owner: 'octokit',
  repo: 'node-github'
}, function (err, res) {
  if (err) {
    console.log(err.toJSON())
  } else {
    console.log(res)
  }
})
