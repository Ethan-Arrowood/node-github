

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
  if (err) throw err

  var reviewId = res[0]['id']
  github.pullRequests.getReview({
    owner: 'brassafrax',
    repo: 'test',
    number: 1,
    id: reviewId
  }, function (err, res) {
    if (err) throw err
    console.log(res)
  })
})
