const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

github.repos.getAll({
  'affiliation': 'owner,organization_member'
})
