

const GitHubApi = require('github')


const github = new GitHubApi({
  debug: false
})

github.authenticate({
  type: 'oauth',
  token: 'add-your-real-token-here'
})

github.misc.renderMarkdown({
  'text': 'Hello world github/linguist#1 **cool**, and #1!'
}, function (err, res) {
  console.log(err, res['data'])
})
