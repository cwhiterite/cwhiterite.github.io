

# Get-GitHubContent
# Update file in GitHub repo







# Set-GitHubContent
# Update file in GitHub repo

$string = "<!DOCTYPE html>`n<html>`n<head>`n</head>`n<body>`n<div>`n<p>Hello World!</p>`n</div>`n</body>`n</html>"

$content = @{
  OwnerName = "cwhiterite"
  RepositoryName = "name"
  Path = "test.html"
  CommitMessage = "!"
  Content = $string
  AccessToken = "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"
}

Set-GitHubContent @content