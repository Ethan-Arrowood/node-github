const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.repos.createFile({
  owner: 'octokit',
  repo: 'misc-scripts',
  path: 'blah.txt',
  message: 'blah blah',
  content: 'YmxlZXAgYmxvb3A=' // base64-encoded "bleep bloop"
})
