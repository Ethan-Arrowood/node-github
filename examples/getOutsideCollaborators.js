

const GitHubApi = require('github')


const github = new GitHubApi({
  debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.orgs.getOutsideCollaborators({
  org: 'facebook'
}, function (err, res) {
  console.log(err, res)
})
