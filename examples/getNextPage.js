const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

github.repos.getAll({
  owner: 'octokit',
  repo: 'node-github',
  affiliation: 'owner,organization_member'
}, function (err, res) {
  if (err) throw err
  if (github.hasNextPage(res)) {
    github.getNextPage(res, nextFunc)
  }
})

function nextFunc (err, res) {
  if (err) throw err
  console.log(res.data.length)
}
