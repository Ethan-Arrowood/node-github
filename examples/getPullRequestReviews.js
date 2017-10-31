const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

github.pullRequests.getReviews({
  owner: 'octokit',
  repo: 'node-github',
  number: 1,
  required_pull_request_reviews: true
})
