

const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.orgs.getForUser({
  username: 'tj',
  per_page: 100
}, function (err, res) {
  console.log(err, res)
})
