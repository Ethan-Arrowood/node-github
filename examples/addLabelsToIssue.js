const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.issues.addLabels({
  owner: 'octokit',
  repo: 'node-github',
  number: '1',
  labels: ['bug', 'help wanted', 'question']
})
