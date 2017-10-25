

const GitHubApi = require('github')


const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.orgs.getPublicMembers({
  org: 'square'
}, function (err, res) {
  console.log(err, res)
})
