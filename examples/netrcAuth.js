

const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'netrc'
})

github.repos.getAll({
}, function (err, res) {
  console.log(err, res)
})
