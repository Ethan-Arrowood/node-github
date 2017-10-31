const GitHubApi = require('github')

var github = new GitHubApi({
  debug: true
})

function getAllOrgRepos (orgName) {
  var repos = []

  function pager (res) {
    repos = repos.concat(res)
    if (github.hasNextPage(res)) {
      return github.getNextPage(res)
        .then(pager)
    }
    return repos
  }

  return github.repos.getForOrg({ org: orgName })
    .then(pager)
}

getAllOrgRepos('organization')
  .then(function (orgRepos) {
    console.log(orgRepos)
  })
