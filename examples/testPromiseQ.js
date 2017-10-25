

const GitHubApi = require('github')
var Q = require('q')  // npm install q

const github = new GitHubApi({
  debug: false,
  Promise: Q.Promise
})

github.users.getById({ id: '5057219' }).then(function (res) {
  console.log(res)
})
