

const GitHubApi = require('github')


const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.issues.getEventsTimeline({
  owner: 'octokit',
  repo: 'node-github',
  issue_number: '447'
}, function (err, res) {
  console.log(err, res)
})
