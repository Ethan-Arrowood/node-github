

const GitHubApi = require('github')


const github = new GitHubApi({})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.repos.getAll({
  'affiliation': 'owner,organization_member'
}, function (err, res) {
  if (err) throw err
  if (github.hasNextPage(res)) {
    console.log(res.data.length)
    github.getNextPage(res, nextFunc)
  }
})

function nextFunc (err, res) {
  if (err) throw err
  console.log(res.data.length)
}
