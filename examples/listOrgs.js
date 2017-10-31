const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

github.orgs.getAll({
  page: 5,
  per_page: 100
})
