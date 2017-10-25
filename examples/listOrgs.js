

const GitHubApi = require('github')


const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.orgs.getAll({
  page: 5,
  per_page: 100
}, function (err, res) {
  console.log(err, res)
})
