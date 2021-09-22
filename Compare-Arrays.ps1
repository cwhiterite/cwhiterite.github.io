# find matches in two arrays
$list1
$list2

foreach ($n1 in $list1) {
  foreach ($n2 in $list2) {
    if ($n1 -eq $n2 ) { $n2 }
  }
}



# get disabled users out of Azure
$disabled = Get-AzureADUser -All $true | 
Where-Object {$_.AccountEnabled -eq $false -and $_.UserPrincipalName -like "*@*"}


# get DisplayNames from disabled, remove "Shared - "
$d = @()
$disabled | ForEach-Object {
  if ($_.DisplayName -like "Shared - *") {
    $mod = $_.DisplayName.Replace("Shared - ", "");
    $d += $mod;
  }
  else {
    $d += $_.DisplayName;
  }
}

#compare users.csv with Display Names 