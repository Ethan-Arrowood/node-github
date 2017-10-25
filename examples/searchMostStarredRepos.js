

const GitHubApi = require('github')


const github = new GitHubApi({
    // debug: true
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.search.repos({
  q: 'stars:>=20000',
  sort: 'stars',
  order: 'desc'
}, function (err, res) {
  if (err) throw err
  for (var itemKey in res['items']) {
    var item = res['items'][itemKey]
    var url = item['html_url']
    var starCount = item['stargazers_count']
    console.log(url + ' (' + starCount + ')')
  }
})
