

const GitHubApi = require('github')
var Promise = require('bluebird')  // npm install bluebird

const github = new GitHubApi({
  debug: false,
  Promise: Promise
})

github.orgs.getAll({
  page: 5,
  per_page: 100
}).then(function (res) {
  console.log(res)
  return github.users.getById({ id: '429706' })
}).then(function (res) {
  console.log(res)
})
