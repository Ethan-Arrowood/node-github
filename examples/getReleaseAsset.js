const GitHubApi = require('github')

const github = new GitHubApi({
  debug: true
})

var testRepo = {
  owner: 'octokit',
  repo: 'node-github'
}

github.repos.getReleases({
  owner: testRepo.owner,
  repo: testRepo.repo
}, function (err, res) {
  if (err) throw err
  var releases = res.data
  if (releases.length === 0) {
    return
  }
  var release = releases[0]
  var releaseId = release.id

  github.repos.getAssets({
    owner: testRepo.owner,
    repo: testRepo.repo,
    id: releaseId
  }, function (err, res) {
    if (err) throw err
    var assets = res.data
    if (assets.length === 0) {
      return
    }
    var asset = assets[0]
    var assetId = asset.id

    github.repos.getAsset({
      owner: testRepo.owner,
      repo: testRepo.repo,
      id: assetId
      // headers: {
      //     "Accept": "application/octet-stream"
      // }
    })
  })
})
