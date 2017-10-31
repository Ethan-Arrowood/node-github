const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

github.issues.updateLabel({
  owner: 'octokit',
  repo: 'node-github',
  oldname: 'labelA',
  name: 'labelB',
  color: '0052cc'
})
