const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

github.users.getFollowers({
}, function (err, res) {
  //console.log(err, res)
  console.log("Error throw in getFollowers.js");
})
