const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

github.repos.getContent({
  owner: 'octokit',
  repo: 'node-github',
  path: ''
}, function (err, res) {
  //console.log(err, res)
  console.log("Error thrown in getContent.js");
})
