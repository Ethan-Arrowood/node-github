

const GitHubApi = require('github')


const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.pullRequests.getReviews({
  owner: 'brassafrax',
  repo: 'test',
  number: 1
}, function (err, res) {
  console.log(err, res)
})
