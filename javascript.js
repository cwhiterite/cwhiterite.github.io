function put_marker(from_left, from_top, floor) {
  with (document.getElementById('marker')) {
    style.left = from_left + "px";
    style.top = from_top + "px";
    style.display = "block";

    if (floor == "3rd")
      document.getElementById('map').style.backgroundImage = "url(./3rdFloor2.svg)";
    else if (floor == "4th")
      document.getElementById('map').style.backgroundImage = "url(./4thFloor2.svg)";
  }
}

function find_desk() {
  var x = document.getElementById("mySelect").value;

  if (x == "Name") 
    { document.getElementById('marker').style.display = 'none'; }
  else if (x == "Aaron Chick-Jones")
    {coordinates = [446,1361]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Abigail Parris")
    {coordinates = [705,521]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Abigail Stratton")
    {coordinates = [531,254]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Adam Ogletree")
    {coordinates = [497,259]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Adam Satterfield")
    {coordinates = [710,579]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Adeline Cooper")
    {coordinates = [512,464]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Adyson Prange")
    {coordinates = [281,724]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Aeneas Roberson")
    {coordinates = [354,851]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Aiden Pirrin")
    {coordinates = [853,729]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Alayna Doskins")
    {coordinates = [337,1184]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Alex Clark")
    {coordinates = [204,381]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Alex Welch")
    {coordinates = [162,541]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Alexandra Jose")
    {coordinates = [588,236]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Alonso Vargas Gross")
    {coordinates = [638,259]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Amanda Burget")
    {coordinates = [189,347]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Amanda Martinez")
    {coordinates = [329,893]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Amber Bononcini")
    {coordinates = [656,537]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Amber Lewandowski")
    {coordinates = [623,226]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Amber McDondle")
    {coordinates = [881,1295]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Amy Sanford")
    {coordinates = [697,1222]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Andre Pyle")
    {coordinates = [813,642]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Andrea Lindsay")
    {coordinates = [759,599]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Andrea Newman")
    {coordinates = [558,242]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Andrew Bachman")
    {coordinates = [868,1199]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Andrew Cole")
    {coordinates = [531,1225]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Andrew Fisher")
    {coordinates = [714,577]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Andrew Vossler")
    {coordinates = [96,374]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Angel Phares")
    {coordinates = [171,444]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Angel Stubbs")
    {coordinates = [299,773]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Angela Byrnes")
    {coordinates = [210,618]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Angela Pastor")
    {coordinates = [543,1136]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Anisa Braun")
    {coordinates = [150,486]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Anna Lucsok")
    {coordinates = [864,1231]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "April De La Fuente")
    {coordinates = [637,411]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Ariel Lind")
    {coordinates = [242,608]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Ashley Ball")
    {coordinates = [179,351]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Ashley Christner")
    {coordinates = [437,1320]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Ashley Gamble")
    {coordinates = [673,495]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Ashley Johnson-Munoz")
    {coordinates = [408,631]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Ashley Martinez")
    {coordinates = [468,1381]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Ashley Muraoka")
    {coordinates = [879,967]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Ashley Outcalt")
    {coordinates = [736,664]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Aspen Conference")
    {coordinates = [488,606]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Ayanle Buni")
    {coordinates = [457,346]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Bailee Bourgeois")
    {coordinates = [752,506]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Billy Carpenter")
    {coordinates = [529,1264]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Blake Scantlin")
    {coordinates = [638,745]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Bradley Dickinson")
    {coordinates = [816,967]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Brandon Bradley")
    {coordinates = [285,779]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Brandy Parrish")
    {coordinates = [803,646]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Breanna Gondek")
    {coordinates = [317,1269]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Brian Richie")
    {coordinates = [681,434]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Brianna LoBello")
    {coordinates = [407,1096]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Brianne Hoglin")
    {coordinates = [318,1359]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Brittany Huber")
    {coordinates = [528,617]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Brittany Tucker")
    {coordinates = [816,1295]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Bryan Dolan")
    {coordinates = [159,357]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Brytani Smith")
    {coordinates = [244,607]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Caitlyn Grathwohl")
    {coordinates = [250,733]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Caleb Santiago")
    {coordinates = [341,709]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Carisa Roth")
    {coordinates = [336,1298]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Charly Guynes")
    {coordinates = [246,734]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Chase Henry")
    {coordinates = [786,1255]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Chris Coyne")
    {coordinates = [662,1126]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Christina Mullen")
    {coordinates = [845,1132]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Christopher Kornell")
    {coordinates = [627,319]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Cindy Arias")
    {coordinates = [852,1531]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Cole Crowl")
    {coordinates = [374,1445]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Collin Bellum")
    {coordinates = [725,479]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Connie Gonzalez")
    {coordinates = [246,460]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Connor Watkins")
    {coordinates = [530,1137]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Corey Scott")
    {coordinates = [775,559]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Courtney Johnson")
    {coordinates = [129,367]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Courtney Reyes")
    {coordinates = [331,767]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Courtney Reyes (HR)")
    {coordinates = [479,666]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Courtney Schlichting")
    {coordinates = [583,623]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Craig White")
    {coordinates = [658,1223]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Dan Moorhead")
    {coordinates = [866,977]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Dana Doncer")
    {coordinates = [395,782]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Dana Stanley")
    {coordinates = [108,407]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Danin Oldershaw")
    {coordinates = [749,1549]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Danne Boyd")
    {coordinates = [393,783]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Dave Anttila")
    {coordinates = [685,1547]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Derek Caldwell")
    {coordinates = [548,544]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Devan Zwygart")
    {coordinates = [657,783]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Diane Galyon")
    {coordinates = [695,1137]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Dimpy Gala")
    {coordinates = [468,1301]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Dolly Bailey")
    {coordinates = [228,466]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Dominica Vasquez")
    {coordinates = [405,1114]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Donald Gregg")
    {coordinates = [863,1044]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Dylan Wheeler")
    {coordinates = [784,1317]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Eddie Irgens")
    {coordinates = [713,425]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Edward Grieb")
    {coordinates = [526,254]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Eileen Thompson")
    {coordinates = [238,701]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Eldora Conference")
    {coordinates = [428,955]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Eliza Howard")
    {coordinates = [728,606]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Elizabeth McClain")
    {coordinates = [447,1506]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Emily Britt")
    {coordinates = [749,663]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Emily Harrison")
    {coordinates = [676,339]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Emily McGurrin")
    {coordinates = [596,326]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Emma Mace")
    {coordinates = [523,1476]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Enrica Canaday")
    {coordinates = [622,224]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Erica Fairchild")
    {coordinates = [318,769]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Erich Staats")
    {coordinates = [446,1146]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Erin Monty")
    {coordinates = [340,1221]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Evan Allen")
    {coordinates = [826,739]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Evan Schuster")
    {coordinates = [317,622]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Fadi Alasbahi")
    {coordinates = [878,1031]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Firoj Timalsina")
    {coordinates = [532,1274]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Francisco Ortiz")
    {coordinates = [711,1181]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Gabriella Martyna")
    {coordinates = [741,570]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Gana Sukhmyagmar")
    {coordinates = [372,1512]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Gerry Fremaint")
    {coordinates = [244,699]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Griffin McLaughlin")
    {coordinates = [686,678]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Halie Malacka")
    {coordinates = [329,676]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Harrison Tanksley")
    {coordinates = [530,1094]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Irene Diggins")
    {coordinates = [407,1470]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Ivan Kuo")
    {coordinates = [475,919]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Jacob Toman Ibarra")
    {coordinates = [497,964]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Jacqueline Davis")
    {coordinates = [230,428]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Jacqueline Dohn")
    {coordinates = [341,1385]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Jade Mayo")
    {coordinates = [194,532]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Jaden Leiker")
    {coordinates = [593,237]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Jaemi Paschal")
    {coordinates = [584,331]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "James Nispel")
    {coordinates = [572,1204]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Jamie Cribbs")
    {coordinates = [702,485]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Janna Sims")
    {coordinates = [318,1234]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Jaxon Graber")
    {coordinates = [286,631]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Jerry Hernandez")
    {coordinates = [164,390]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Jerry Pumphrey")
    {coordinates = [468,1508]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Jessica Celestino")
    {coordinates = [607,266]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Jessica McRill")
    {coordinates = [437,1243]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Jessica Wunsch")
    {coordinates = [554,342]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Jhordan Blumenberg")
    {coordinates = [338,672]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "JJ Worthington")
    {coordinates = [222,649]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "John German")
    {coordinates = [268,784]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Johnny Woodson")
    {coordinates = [625,543]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Jordan Young")
    {coordinates = [414,278]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Jordyn White")
    {coordinates = [567,372]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Jose Pedrosa")
    {coordinates = [214,469]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Joshua Quintana")
    {coordinates = [717,671]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Joshua Trapp")
    {coordinates = [621,1147]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Kalie DePold")
    {coordinates = [514,464]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Kamela Gjinaj")
    {coordinates = [818,1031]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Karsten Talaber")
    {coordinates = [648,598]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Katherine Hardin")
    {coordinates = [696,1180]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Katherine Vidal")
    {coordinates = [724,608]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Kathleen Salomonson")
    {coordinates = [866,1468]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Kathryn Gallegos")
    {coordinates = [629,355]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Katie Hibbs")
    {coordinates = [583,1473]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Katy Coven")
    {coordinates = [219,559]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Kayla Cunningham")
    {coordinates = [632,1546]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Kayli Trengen")
    {coordinates = [566,581]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Kelli Moore")
    {coordinates = [219,524]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Kelly Farragher")
    {coordinates = [373,1094]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Kelly Jordan")
    {coordinates = [878,1111]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Kelsey Crane")
    {coordinates = [783,988]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Kelsey Hays")
    {coordinates = [427,674]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Kelsey Houchen")
    {coordinates = [145,396]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Kenny Compton")
    {coordinates = [701,715]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Kevin Fernandez")
    {coordinates = [436,1158]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Kiah Rouse")
    {coordinates = [817,1379]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Kiersten Greguric")
    {coordinates = [238,553]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Kilee Tucker")
    {coordinates = [148,361]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Kim Frost")
    {coordinates = [640,1474]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Kimberly Moore")
    {coordinates = [550,374]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Kyla Barela")
    {coordinates = [575,277]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Kyle McCauley")
    {coordinates = [694,1095]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Kylie Rose")
    {coordinates = [331,799]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Kyra Edgington")
    {coordinates = [789,591]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Lacey Huckle")
    {coordinates = [606,1550]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Lahari Kavali")
    {coordinates = [437,1113]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Laura Beuthel")
    {coordinates = [527,1052]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Lauren Coker")
    {coordinates = [437,1092]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Lauren Dale")
    {coordinates = [383,841]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Lauren Jopson")
    {coordinates = [701,1431]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Lauren Mackrie")
    {coordinates = [413,831]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Lena Sheehan")
    {coordinates = [206,564]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Le'Seanda Housen")
    {coordinates = [650,444]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Lexus Thomas")
    {coordinates = [751,694]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Liliana Vidal")
    {coordinates = [730,702]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Lily Yesayan")
    {coordinates = [436,1402]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Lisa Meiring")
    {coordinates = [605,663]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Liz Starcevich")
    {coordinates = [365,792]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Lizz Creason")
    {coordinates = [696,1051]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Loveland Conference")
    {coordinates = [357,980]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Lucas Martinez")
    {coordinates = [680,588]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Luke Lee")
    {coordinates = [447,1238]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Lyzette Gonzales")
    {coordinates = [847,1398]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Madison Moosman")
    {coordinates = [302,591]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Madison Robertson")
    {coordinates = [375,371]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Mai Chartprakarn")
    {coordinates = [319,1178]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Manishaben Panchal")
    {coordinates = [268,693]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Marcus Loureiro-Estrada")
    {coordinates = [404,1382]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Margaret Daulton")
    {coordinates = [343,708]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Maria McGowan")
    {coordinates = [818,1540]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Mariah Jones-Roda")
    {coordinates = [573,428]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Mariah Music")
    {coordinates = [275,598]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Mariam Kyabou")
    {coordinates = [562,244]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Mary McHugh")
    {coordinates = [269,598]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Matheson Lindley")
    {coordinates = [756,602]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Matin Rabbani")
    {coordinates = [195,474]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Matt Gonzales")
    {coordinates = [884,1533]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Matthew Clark")
    {coordinates = [849,989]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Matthew Maher")
    {coordinates = [564,338]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Matthew Schaps")
    {coordinates = [793,594]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Megan Brockway")
    {coordinates = [541,648]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Megan Chalupsky")
    {coordinates = [827,677]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Megan Ludvigsen")
    {coordinates = [708,1472]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Megan Watry")
    {coordinates = [336,1323]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Meghan Jackson")
    {coordinates = [511,295]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Melissa Laurienti")
    {coordinates = [546,285]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Meyada Mertami")
    {coordinates = [606,420]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Michael Cuasito")
    {coordinates = [468,1466]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Michael Dicicco")
    {coordinates = [686,524]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Michael Hausenfleck")
    {coordinates = [695,618]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Michael Majoue")
    {coordinates = [554,1545]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Michelle Brusco")
    {coordinates = [311,1401]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Mikayla Rice")
    {coordinates = [312,716]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Miranda Rowsey")
    {coordinates = [711,1222]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Molly Witt")
    {coordinates = [778,1194]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Morgan Diettert")
    {coordinates = [224,650]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Natalia Soureka")
    {coordinates = [280,688]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Navneet Saini")
    {coordinates = [406,1301]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Nicholas Hoins")
    {coordinates = [819,1511]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Nicholas Lengyel")
    {coordinates = [366,883]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Nicole Bramwell")
    {coordinates = [709,1263]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Noah Robinson")
    {coordinates = [86,377]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Padraig O'Flannery")
    {coordinates = [607,420]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Paige Harrington")
    {coordinates = [529,1551]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Paige Soto")
    {coordinates = [274,725]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Payton Olsen")
    {coordinates = [848,1256]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Philip O'Connell")
    {coordinates = [763,695]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Rachel Bachman")
    {coordinates = [184,571]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Rachel Szumiesz")
    {coordinates = [306,679]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Raelynn Maloney")
    {coordinates = [863,1166]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Rainey Clark")
    {coordinates = [389,592]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Randle Torry")
    {coordinates = [785,1133]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Rebecca Gilbert")
    {coordinates = [314,1325]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Regan King")
    {coordinates = [698,617]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Riana Hart")
    {coordinates = [101,410]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Robert Larsen")
    {coordinates = [639,253]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Robert Lehnhoff")
    {coordinates = [603,269]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Robert Moorhead")
    {coordinates = [203,619]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Rocklahoma Conference")
    {coordinates = [427,955]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Rosa Muniz")
    {coordinates = [678,343]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Rosie Brown")
    {coordinates = [572,274]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Sahara Karki")
    {coordinates = [380,751]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Sam Cleland")
    {coordinates = [166,484]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Sam Ossareh")
    {coordinates = [133,400]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Samantha Aylward")
    {coordinates = [255,514]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Samantha Harvey")
    {coordinates = [362,791]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Samantha Jeski")
    {coordinates = [437,1445]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Samantha Sabins")
    {coordinates = [334,800]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Sameer Khadka")
    {coordinates = [446,1270]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Sara Briggs")
    {coordinates = [307,716]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Sarah Beckman")
    {coordinates = [684,585]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Sarah Gomez")
    {coordinates = [777,653]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Satoko Pallarito")
    {coordinates = [289,630]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Savannah Krause")
    {coordinates = [424,676]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Savannah Trehus")
    {coordinates = [707,1425]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Scott Martley")
    {coordinates = [776,559]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Sean Allen")
    {coordinates = [297,684]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Sean Morrell")
    {coordinates = [577,426]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Seneca Sadler")
    {coordinates = [409,358]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Shad Moir")
    {coordinates = [530,1180]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Shea Bowers")
    {coordinates = [223,522]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Simon Barshay")
    {coordinates = [200,436]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Sital Sharma")
    {coordinates = [249,511]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Sloan McLin")
    {coordinates = [136,454]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Sonja Hoff")
    {coordinates = [374,1158]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Stacie Anderson")
    {coordinates = [852,1511]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Stacy Martinez")
    {coordinates = [733,764]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Stephanie Kline")
    {coordinates = [660,498]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Steve Fox")
    {coordinates = [864,1109]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Steven Trapani")
    {coordinates = [659,1175]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Susan Carver")
    {coordinates = [119,368]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Susannah Logan")
    {coordinates = [709,1095]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Sydney Abeyta")
    {coordinates = [598,365]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Tabitha Lazarte")
    {coordinates = [259,639]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Tamar Amiscaray")
    {coordinates = [706,673]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Tanzania White")
    {coordinates = [427,863]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Tasha Nguyen")
    {coordinates = [336,1439]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Tawney Crump")
    {coordinates = [698,1475]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Taylor Lyon")
    {coordinates = [516,296]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Taylor Thompson")
    {coordinates = [778,1060]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Thomas Kennedy")
    {coordinates = [529,1054]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Thomas Sandgaard")
    {coordinates = [868,1543]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Tiffany Lewis")
    {coordinates = [550,1469]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Trissa Nelson")
    {coordinates = [738,476]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Ty Teply")
    {coordinates = [884,1511]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Tyler Dula")
    {coordinates = [447,1180]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Tyler Gomes")
    {coordinates = [715,423]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Wendy Quanon")
    {coordinates = [190,529]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Wesley Barron")
    {coordinates = [669,402]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Wil-an Losande")
    {coordinates = [336,1468]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Winterpark Conference")
    {coordinates = [356,979]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Zachary Kugler")
    {coordinates = [530,1222]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else if (x == "Zellie Elliott")
    {coordinates = [392,589]; put_marker(coordinates[0], coordinates[1], "3rd"); }
  else if (x == "Zuleth Tena-Cardenas")
    {coordinates = [533,346]; put_marker(coordinates[0], coordinates[1], "4th"); }
  else { document.getElementById('marker').style.display = 'none'; }
}
