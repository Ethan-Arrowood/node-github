const GitHubApi = require('github')
const github = new GitHubApi({
  debug: true,
  host: 'github.my-GHE-enabled-company.com',
  pathPrefix: '/api/v3'
})

github.repos.uploadAsset({
  owner: 'foo-organization',
  repo: 'bar-repository',
  id: '123456',
  filePath: 'README.md',
  name: 'z.sh'
})
