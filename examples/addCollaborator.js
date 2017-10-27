const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.repos.addCollaborator({
  owner: 'octokit',
  repo: 'node-github',
  username: 'defunkt'
})
