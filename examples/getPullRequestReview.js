const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

const reviewId = 'abcde'
github.pullRequests.getReview({
  owner: 'octoki',
  repo: 'node-github',
  number: 1,
  id: reviewId,
  required_pull_request_reviews: true
})
