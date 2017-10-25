

const GitHubApi = require('github')


const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.search.issues({
  q: 'bazinga'
}, function (err, res) {
  console.log(err, res)
})
