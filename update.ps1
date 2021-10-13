





function Add-Spaces {
  param ([Parameter(Mandatory)][int32]$int)
  $spaces = " " * $int;
  return $spaces;
}

# take users and format to Js code
function Format-JS {
  param (
    [Parameter(Mandatory)]$List,
    [Parameter(Mandatory)]$File
  )
  $static = Get-Content .\static.js;
  $snip1 = $static[0..17];
  $snip2 = @(); #Format-JS -List $users
  $snip3 = $static[19..20];

  $List | ForEach-Object {
    $name = $_.Name; $desk = $_.Desk;
    $x = $_.X; $y = $_.Y;
    if ($name -ne "") {
      if ($desk -like "3*") {
        $line = (Add-Spaces 2) + "else if (x == `"$name`")`n" +
        (Add-Spaces 4) + "{coordinates = [$x,$y];" +
        (Add-Spaces 1) + "put_marker(coordinates[0], coordinates[1], `"3rd`"); }";
      }
      else {
        $line = (Add-Spaces 2) + "else if (x == `"$name`")`n" +
        (Add-Spaces 4) + "{coordinates = [$x,$y];" +
        (Add-Spaces 1) + "put_marker(coordinates[0], coordinates[1], `"4th`"); }";
      }
      $snip2 += $line;
    }
  }
  $snippet = $snip1 + $snip2 + $snip3;
  $snippet | out-file $File;
  return $snippet;
}

function Get-Alphabet {
  $chars = @();
  65..90 | ForEach-Object { $chars += [char]$_ };

  $alpha = @();
  for ($i = 0; $i -lt 26; $i++) {
    $alpha += [string]$chars[$i];
  }
  return $alpha;
}

function Format-HTML {
  param (
    [Parameter(Mandatory)]$List,
    [Parameter(Mandatory)]$Range,
    [Parameter(Mandatory)]$File,
    [Parameter(Mandatory)]$Date,
    [Parameter(Mandatory)]$Page
  )

  $static = Get-Content .\static.html;
  $snip1 = $static[0..13];

  switch ($Page) {
    1 {  $snip2 = (Add-Spaces 10) + 
      "<label for=`"mySelect`" style=`"color:#000000;`">A-C:</label>" }
    2 {  $snip2 = (Add-Spaces 10) + 
      "<label for=`"mySelect`" style=`"color:#000000;`">D-J:</label>" }
    3 {  $snip2 = (Add-Spaces 10) + 
      "<label for=`"mySelect`" style=`"color:#000000;`">K-O:</label>" }
    4 {  $snip2 = (Add-Spaces 10) + 
      "<label for=`"mySelect`" style=`"color:#000000;`">P-Z:</label>" }
  }

  $snip3 = $static[15..16];
  $snip4 = @();
  $snip5 = $static[18..31];
  $snip6 = (Add-Spaces 4) + "<div class=`"updated`">Updated: $Date</p>"
  $snip7 = $static[33..35];

  for ($i = 0; $i -lt $Range.count; $i++) {
    $List | ForEach-Object {
      $name = $_.Name;
      $pattern = $Range[$i] + "*";
      if ($name -like $pattern) {
        $line = (Add-Spaces 10) + "<option>$name</option>";
        $snip4 += $line;
      }
    } 
  }
  $snippet = $snip1 + $snip2 + $snip3 + $snip4 + $snip5 + $snip6 + $snip7;
  $snippet | out-file $File;
  return $snippet;
}

[System.Collections.ArrayList]$users = Import-CSV ".\users.csv";
$users = $users | Sort-Object -Property Name;
$users | Export-Csv C:\temp\users.csv -NoTypeInformation;

$output = ".\javascript.js"
$null = Format-JS -List $users -File $output;

$alpha = Get-Alphabet;
$ac = $alpha[0..2];
$dj = $alpha[3..9];
$ko = $alpha[10..14];
$pz = $alpha[15..26];

$index = ".\index.html"
$page2 = ".\page2.html"
$page3 = ".\page3.html"
$page4 = ".\page4.html"

$null = Format-HTML -Range $ac -List $users -File $index -Date "10/13" -Page 1;
$null = Format-HTML -Range $dj -List $users -File $page2 -Date "10/13" -Page 2;
$null = Format-HTML -Range $ko -List $users -File $page3 -Date "10/13" -Page 3;
$null = Format-HTML -Range $pz -List $users -File $page4 -Date "10/13" -Page 4;

