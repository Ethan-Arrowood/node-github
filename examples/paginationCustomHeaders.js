const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

var customHeaders = {
  'User-Agent': 'blah'
}

github.issues.getForRepo({
  owner: 'octokit',
  repo: 'node-github',
  headers: customHeaders
}, function (err, res) {
  if (err) throw err
  showIssueIds(res)

  if (github.hasNextPage(res)) {
    github.getNextPage(res, customHeaders, function (err, res) {
      if (err) throw err
      showIssueIds(res)
    })
  }
})

function showIssueIds (res) {
  // for (var i = 0; i <= res.length; i++) {
  //   if (typeof res[i] !== 'undefined') {
  //     var url = res[i].url
  //     var issueId = url.substr(url.lastIndexOf('/') + 1)
  //   }
  // }

}
