const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

github.repos.getAll({
  owner: 'octokit',
  repo: 'node-github',
  affiliation: 'owner,organization_member'
})

.then(result => {
  if (github.hasNextPage(result)) {
    return github.getNextPage(result)

    .then(logResultLength)
  }
})

function logResultLength (result) {
  console.log(result.data.length)
}
