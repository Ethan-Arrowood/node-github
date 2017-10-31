const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

const reviewId = 'abcde'
github.pullRequests.getReview({
  owner: 'octokit',
  repo: 'node-github',
  number: 1,
  id: reviewId
})
