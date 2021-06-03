
function put_marker(from_left, from_top, floor) {
    with(document.getElementById('marker')) {
        style.left = from_left + "px";
        style.top = from_top + "px";
        style.display = "block";

        if (floor == "3rd")
          document.getElementById('map').style.backgroundImage="url(./3rdFloor2.svg)";
        else if (floor == "4th")
          document.getElementById('map').style.backgroundImage="url(./4thFloor2.svg)";
    }
}

function find_desk() {
var x = document.getElementById("mySelect").value;

if (x == "Name") 
    {document.getElementById('marker').style.display = 'none';} 
else if (x == "Abigail Parris")
    {coordinates = [705,521]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Abigail Stratton")
    {coordinates = [531,254]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Adam Ogletree")
    {coordinates = [550,374]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Adam Satterfield")
    {coordinates = [702,485]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Adeline Cooper")
    {coordinates = [827,675]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Aeneas Roberson")
    {coordinates = [354,851]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Aiden Pirrin")
    {coordinates = [853,729]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Alayna Doskins")
    {coordinates = [543,1136]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Alec Williams")
    {coordinates = [823,738]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Alex Beatty")
    {coordinates = [846,1253]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Alex Clark")
    {coordinates = [169,444]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Alex Rigberg")
    {coordinates = [683,585]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Alex Welch")
    {coordinates = [89,376]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Aliccia Cardona")
    {coordinates = [215,467]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Alicia Crosley")
    {coordinates = [343,705]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Allison Thieman")
    {coordinates = [707,1136]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Alonso Vargas Gross")
    {coordinates = [638,259]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Amanda Burget")
    {coordinates = [207,377]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Amber Bononcini")
    {coordinates = [730,702]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Amber Lewandowski")
    {coordinates = [623,226]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Amber McDondle")
    {coordinates = [881,1295]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Andre Pyle")
    {coordinates = [572,274]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Andrea Lindsay")
    {coordinates = [759,599]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Andrea Newman")
    {coordinates = [710,579]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Andrew Bachman")
    {coordinates = [845,1051]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Andrew Cole")
    {coordinates = [531,1225]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Andrew Fisher")
    {coordinates = [714,577]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Andrew Vossler")
    {coordinates = [96,374]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Angel Phares")
    {coordinates = [171,444]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Angela Byrnes")
    {coordinates = [210,618]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Angela Pastor")
    {coordinates = [709,1177]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Anna Lucsok")
    {coordinates = [864,1231]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Annette Darnall")
    {coordinates = [469,1221]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "April De La Fuente")
    {coordinates = [750,696]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Ashley Christner")
    {coordinates = [437,1320]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Ashley Gamble")
    {coordinates = [558,242]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Ashley Johnson-Munoz")
    {coordinates = [257,639]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Ashley Martinez")
    {coordinates = [468,1381]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Ashley Ortega")
    {coordinates = [676,339]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Ashley Outcalt")
    {coordinates = [691,490]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Ashley Zetzsche")
    {coordinates = [305,588]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Ashlie Thorburn")
    {coordinates = [695,1050]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Austin Mayo")
    {coordinates = [221,521]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Ayanle Buni")
    {coordinates = [457,346]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Bailey Brown")
    {coordinates = [883,1508]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Billy Carpenter")
    {coordinates = [529,1264]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Blake Scantlin")
    {coordinates = [319,1359]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Bouteus Victor")
    {coordinates = [230,427]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Brandon Bradley")
    {coordinates = [285,779]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Brandy Parrish")
    {coordinates = [803,646]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Breanna Gondek")
    {coordinates = [201,436]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Brian Richie")
    {coordinates = [596,326]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Bridget Frame")
    {coordinates = [536,345]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Brittany Huber")
    {coordinates = [528,617]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Brittany Tucker")
    {coordinates = [816,1295]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Bryan Dolan")
    {coordinates = [253,549]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Bryan Fore")
    {coordinates = [139,453]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Caitlyn Grathwohl")
    {coordinates = [250,733]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Cameryn Mammenga")
    {coordinates = [879,1233]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Carisa Roth")
    {coordinates = [336,1298]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Carmen Holleman")
    {coordinates = [384,841]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Cassidy Swecker")
    {coordinates = [133,365]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Cavanaugh Hannan")
    {coordinates = [785,1398]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Charlette Walker")
    {coordinates = [392,591]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Charly Guynes")
    {coordinates = [185,568]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Chelle Van Burkleo")
    {coordinates = [862,1104]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Chris Coyne")
    {coordinates = [662,1126]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Christie Apon")
    {coordinates = [813,642]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Christie Johnson")
    {coordinates = [309,1242]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Christina Mullen")
    {coordinates = [845,1132]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Cindy Arias")
    {coordinates = [374,1242]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Clayton McJunkins")
    {coordinates = [392,588]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "CoCo Hu")
    {coordinates = [318,1090]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Cole Crowl")
    {coordinates = [374,1445]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Colleen King")
    {coordinates = [251,513]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Collin Bellum")
    {coordinates = [725,479]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Connor Watkins")
    {coordinates = [530,1137]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Corey Scott")
    {coordinates = [815,1233]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Corliss Brekken")
    {coordinates = [650,597]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Courtney Johnson")
    {coordinates = [200,473]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Courtney Reyes")
    {coordinates = [248,733]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Courtney Schlichting")
    {coordinates = [583,623]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Craig White")
    {coordinates = [658,1223]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Cristlin Denhardt")
    {coordinates = [740,512]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Dan Moorhead")
    {coordinates = [866,977]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Dana Doncer")
    {coordinates = [395,782]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Dana Stanley")
    {coordinates = [332,891]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Daniel Maes")
    {coordinates = [164,390]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Daniel Price")
    {coordinates = [816,1377]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Danin Oldershaw")
    {coordinates = [749,1549]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Danne Boyd")
    {coordinates = [393,783]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Dariyan Jaramillo")
    {coordinates = [667,625]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Darly Rosansky")
    {coordinates = [545,286]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Dave Anttila")
    {coordinates = [685,1547]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Delia Madril")
    {coordinates = [310,677]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Derek Caldwell")
    {coordinates = [548,544]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Destiny Soria")
    {coordinates = [845,1316]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Devan Zwygart")
    {coordinates = [657,783]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Diana Thate")
    {coordinates = [467,1178]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Diane Dulaney")
    {coordinates = [770,751]; put_marker(coordinates[0], coordinates[1], "3rd");}    
else if (x == "Diane Galyon")
    {coordinates = [695,1137]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Dimpy Gala")
    {coordinates = [468,1301]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Dominica Vasquez")
    {coordinates = [405,1114]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Donald Gregg")
    {coordinates = [863,1044]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Dylan Wheeler")
    {coordinates = [784,1317]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Eddie Irgens")
    {coordinates = [713,425]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Eileen Thompson")
    {coordinates = [238,701]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Eliza Howard")
    {coordinates = [728,606]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Elizabeth Jackson")
    {coordinates = [768,656]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Emily Harrison")
    {coordinates = [625,543]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Emma Mace")
    {coordinates = [411,629]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Enrica Canaday")
    {coordinates = [710,579]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Ereka Maglambayan")
    {coordinates = [281,724]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Erica Fairchild")
    {coordinates = [403,837]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Erich Staats")
    {coordinates = [622,224]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Erin Monty")
    {coordinates = [340,1221]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Evan Schuster")
    {coordinates = [221,558]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Fadi Alasbahi")
    {coordinates = [878,1031]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Faith LePage")
    {coordinates = [339,669]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Floresa Findley")
    {coordinates = [791,589]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Gana Sukhmyagmar")
    {coordinates = [466,1536]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Gerry Fremaint")
    {coordinates = [317,622]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Gianna Meyers")
    {coordinates = [245,459]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Grace DeDonatis")
    {coordinates = [697,615]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Halie Malacka")
    {coordinates = [329,676]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Harrison Tanksley")
    {coordinates = [530,1094]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Hope Calderon")
    {coordinates = [585,333]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Hunter Ouellette")
    {coordinates = [242,608]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Irene Diggins")
    {coordinates = [373,1528]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Ivan Kuo")
    {coordinates = [363,755]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Ivy Edmonds")
    {coordinates = [380,751]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Jade Mayo")
    {coordinates = [194,532]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Jaden Leiker")
    {coordinates = [593,237]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Jake Emery")
    {coordinates = [336,1157]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Jake Moore")
    {coordinates = [810,739]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "James McDonald")
    {coordinates = [448,1146]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "James Nispel")
    {coordinates = [816,1030]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Janna Sims")
    {coordinates = [318,1234]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Jariel Cabell")
    {coordinates = [598,363]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Jazmine Terrazas")
    {coordinates = [275,598]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Jerry Pumphrey")
    {coordinates = [468,1508]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Jesse-Lee Trawick")
    {coordinates = [785,1130]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Jessica Celestino")
    {coordinates = [515,295]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Jessica Fisher")
    {coordinates = [0,0]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Jessica Langevin")
    {coordinates = [525,1473]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Jessica McRill")
    {coordinates = [437,1243]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Jessica Wunsch")
    {coordinates = [554,342]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "JJ Worthington")
    {coordinates = [222,649]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Joan Anderson")
    {coordinates = [863,1442]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Joel Guegel")
    {coordinates = [745,568]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Johnny Woodson")
    {coordinates = [579,365]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Jordan Young")
    {coordinates = [414,278]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Jordyn White")
    {coordinates = [567,372]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Joshua Quintana")
    {coordinates = [717,671]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kaitlyn Smith")
    {coordinates = [297,810]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kalie DePold")
    {coordinates = [514,464]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kamela Gjinaj")
    {coordinates = [850,1529]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kara Frye")
    {coordinates = [687,525]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kartik Sharma")
    {coordinates = [176,387]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kassie Perkins")
    {coordinates = [368,880]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kate Zerbi")
    {coordinates = [275,599]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Katherine Hardin")
    {coordinates = [696,1180]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kathleen Salomonson")
    {coordinates = [404,1090]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kayla Cunningham")
    {coordinates = [632,1546]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kayli Trengen")
    {coordinates = [566,581]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kelli Moore")
    {coordinates = [398,873]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kelly Farragher")
    {coordinates = [373,1094]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kelly Jordan")
    {coordinates = [878,1111]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kelsey Crane")
    {coordinates = [783,988]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kelsey Hays")
    {coordinates = [427,674]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kelsey Houchen")
    {coordinates = [145,396]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kerigan Kelly")
    {coordinates = [278,723]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kevin Fernandez")
    {coordinates = [436,1158]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kiersten Greguric")
    {coordinates = [238,553]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kierstin O'Connor")
    {coordinates = [662,1096]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kim Botts")
    {coordinates = [583,1473]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kim Frost")
    {coordinates = [640,1474]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kirk Usui")
    {coordinates = [373,1321]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kristine Condie")
    {coordinates = [724,608]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kyla Barela")
    {coordinates = [575,277]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kyle McCauley")
    {coordinates = [694,1095]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kylie Rose")
    {coordinates = [331,799]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Kyra Edgington")
    {coordinates = [789,591]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Lacey Huckle")
    {coordinates = [606,1550]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Lahari Kavali")
    {coordinates = [437,1113]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Laura Beuthel")
    {coordinates = [527,1052]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Lauren Coker")
    {coordinates = [437,1092]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Lauren Jopson")
    {coordinates = [542,647]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Lily Yesayan")
    {coordinates = [436,1402]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Linda Sirchia")
    {coordinates = [320,621]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Lisa Meiring")
    {coordinates = [605,663]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Liz Starcevich")
    {coordinates = [365,792]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Lucas Martinez")
    {coordinates = [680,588]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Lyzette Gonzales")
    {coordinates = [847,1398]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Mackenna Willis")
    {coordinates = [405,1222]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Madison Willers")
    {coordinates = [710,1223]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Mai Chartprakarn")
    {coordinates = [319,1178]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Marcus Loureiro-Estrada")
    {coordinates = [404,1382]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Maria McGowan")
    {coordinates = [447,1089]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Mariam Kyabou")
    {coordinates = [562,244]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Mary McHugh")
    {coordinates = [497,259]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Matheson Lindley")
    {coordinates = [610,358]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Matin Rabbani")
    {coordinates = [641,350]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Matt Gonzales")
    {coordinates = [404,1144]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Matthew Lytle")
    {coordinates = [626,317]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Matthew Maher")
    {coordinates = [664,627]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Matthew Schaps")
    {coordinates = [792,685]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Megan Brockway")
    {coordinates = [686,678]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Megan Chalupsky")
    {coordinates = [752,506]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Megan Ludvigsen")
    {coordinates = [529,1051]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Megan Watry")
    {coordinates = [336,1323]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Meghan Jackson")
    {coordinates = [573,428]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Michael Crockett")
    {coordinates = [287,629]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Michael Cuasito")
    {coordinates = [468,1466]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Michael Dicicco")
    {coordinates = [686,524]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Michael Majoue")
    {coordinates = [554,1545]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Michael Webb")
    {coordinates = [302,773]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Michell Pak")
    {coordinates = [679,433]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Michelle Brusco")
    {coordinates = [311,1401]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Michelle Ramirez")
    {coordinates = [565,335]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Miguel Quintana")
    {coordinates = [653,442]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Mikayla Rice")
    {coordinates = [312,716]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Mike Vandeventer")
    {coordinates = [341,1382]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Mitchell Johnson")
    {coordinates = [762,755]; put_marker(coordinates[0], coordinates[1], "3rd");}
    else if (x == "Molly Witt")
    {coordinates = [778,1194]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Morgan Diettert")
    {coordinates = [224,650]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Mya Adrianzen")
    {coordinates = [274,598]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Nakayla Smith")
    {coordinates = [647,441]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Natalia Soureka")
    {coordinates = [280,688]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Navneet Saini")
    {coordinates = [405,1179]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Nicholas Han")
    {coordinates = [169,481]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Nicholas Hoins")
    {coordinates = [207,563]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Nicholas Lengyel")
    {coordinates = [527,250]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Nicole Bramwell")
    {coordinates = [709,1263]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Nicole Esquivel")
    {coordinates = [695,618]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Noah Robinson")
    {coordinates = [162,539]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Padraig O'Flannery")
    {coordinates = [607,420]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Payton Olsen")
    {coordinates = [816,967]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Philip O'Connell")
    {coordinates = [639,253]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Princess Ajibade")
    {coordinates = [878,1377]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "PsyNia Jefferson")
    {coordinates = [269,545]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Rachel Bachman")
    {coordinates = [318,860]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Raelynn Maloney")
    {coordinates = [863,1166]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Rainey Clark")
    {coordinates = [270,783]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Randle Torry")
    {coordinates = [846,988]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Raymond Thal")
    {coordinates = [111,407]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Raymundo Saldana")
    {coordinates = [755,600]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Reagan Zizmann")
    {coordinates = [479,665]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Regan King")
    {coordinates = [639,744]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Rhiannon Hamm")
    {coordinates = [332,764]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Robby Sanders")
    {coordinates = [350,761]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Robert Larsen")
    {coordinates = [741,570]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Rowan Clifford")
    {coordinates = [661,307]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Ryan Fee")
    {coordinates = [708,1468]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Sabrina Eskanos")
    {coordinates = [784,1252]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Sabrina Salas")
    {coordinates = [163,354]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Sam Ossareh")
    {coordinates = [133,400]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Samantha Aylward")
    {coordinates = [255,514]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Samantha Harvey")
    {coordinates = [362,791]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Samantha Jeski")
    {coordinates = [437,1445]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Samantha Sabins")
    {coordinates = [334,800]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Sara Briggs")
    {coordinates = [303,590]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Sarah Cibark")
    {coordinates = [405,1465]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Sarah Lussier")
    {coordinates = [268,693]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Satoko Pallarito")
    {coordinates = [289,630]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Savannah Krause")
    {coordinates = [300,808]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Savannah Perry")
    {coordinates = [150,361]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Savannah Trehus")
    {coordinates = [707,1425]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Scott Anderson")
    {coordinates = [775,559]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Scott Martley")
    {coordinates = [776,559]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Sean Allen")
    {coordinates = [297,684]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Sebastiana Saya")
    {coordinates = [198,437]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Seneca Sadler")
    {coordinates = [376,367]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Shad Moir")
    {coordinates = [530,1180]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Shea Bowers")
    {coordinates = [223,522]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Shelby Blitz")
    {coordinates = [429,673]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Sienna Spring")
    {coordinates = [785,1050]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Sital Sharma")
    {coordinates = [341,706]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Sloan McLin")
    {coordinates = [136,454]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Sonja Hoff")
    {coordinates = [374,1158]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Stacie Anderson")
    {coordinates = [361,1089]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Stephanie Kline")
    {coordinates = [660,498]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Steve Hardon")
    {coordinates = [817,1535]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Steven Trapani")
    {coordinates = [659,1175]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Susan Carver")
    {coordinates = [119,368]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Susannah Logan")
    {coordinates = [709,1095]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Sydney Kemmerzell")
    {coordinates = [673,495]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Tabitha Lazarte")
    {coordinates = [259,639]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Tamar Amiscaray")
    {coordinates = [706,673]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Tandra Caldwell")
    {coordinates = [373,1403]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Tanzania White")
    {coordinates = [427,863]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Tasha Nguyen")
    {coordinates = [336,1439]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Tawney Crump")
    {coordinates = [698,1475]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Taylor Lyon")
    {coordinates = [816,1111]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Taylor Thompson")
    {coordinates = [778,1060]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Taylor Van Valey")
    {coordinates = [468,1115]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Thao Le")
    {coordinates = [696,1222]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Thomas Sandgaard")
    {coordinates = [868,1543]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Tiffany Lewis")
    {coordinates = [550,1469]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Tighree Thomas")
    {coordinates = [449,1449]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Tori Paris")
    {coordinates = [629,355]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Trissa Nelson")
    {coordinates = [634,412]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Ty Teply")
    {coordinates = [320,1146]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Tyler Connolly")
    {coordinates = [792,745]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Tyler Gomes")
    {coordinates = [715,423]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Valerie Ferguson")
    {coordinates = [780,687]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Wendy Quanon")
    {coordinates = [190,529]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Wendy Valenzuela")
    {coordinates = [404,1507]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Wesley Barron")
    {coordinates = [674,530]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Wil-an Losande")
    {coordinates = [336,1468]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "William Neville")
    {coordinates = [849,729]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "William Salter")
    {coordinates = [879,967]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Zachary Kugler")
    {coordinates = [530,1222]; put_marker(coordinates[0], coordinates[1], "4th");}
else if (x == "Zellie Elliott")
    {coordinates = [102,408]; put_marker(coordinates[0], coordinates[1], "3rd");}
else
     {document.getElementById('marker').style.display = 'none';} 
}
