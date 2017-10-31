const GitHubApi = require('github')

const github = new GitHubApi({
    // debug: true
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
