

const GitHubApi = require('github')


const github = new GitHubApi({})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

var starredRepos = []

github.activity.getStarredRepos({per_page: 100}, getRepos)
function getRepos (err, res) {
  if (err) {
    return false
  }

  starredRepos = starredRepos.concat(res['data'])
  if (github.hasNextPage(res)) {
    github.getNextPage(res, getRepos)
  } else {
    outputStarredRepos()
  }
}

function outputStarredRepos () {
  console.log(starredRepos.map(function (repo) { return repo['full_name'] }))
  console.log('starred repos: ' + starredRepos.length)
}
