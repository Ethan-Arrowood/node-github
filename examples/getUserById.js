

const GitHubApi = require('github')


const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.users.getById({ id: '429706' }, function (err, res) {
  console.log(err, res)
})
