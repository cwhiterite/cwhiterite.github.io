
<script>

  function put_marker(from_left, from_top, floor) {
    with(document.getElementById('marker')) {
        style.left = from_left + "px";
        style.top = from_top + "px";
        style.display = "block";

        if (floor == "3rd")
          document.getElementById('map').style.backgroundImage="url(./3rdFloor3.jpg)";
        else if (floor == "4th")
          document.getElementById('map').style.backgroundImage="url(./4thFloor2.jpg)";
    }
}

function find_desk() {
  
  var x = document.getElementById("mySelect").value;

  if (x == "Name") 
    {document.getElementById('marker').style.display = 'none';} 
else  if (x == "Amber Lewandowski") 
    {coordinates = [623,226]; put_marker(coordinates[0], coordinates[1], "3rd");}     
else if (x == "Alonso Vargas Gross") 
    {coordinates = [638,259]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Jaden Leiker") 
    {coordinates = [593,237]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Mariam Kyabou") 
    {coordinates = [562,244]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Abigail Stratton") 
    {coordinates = [531,254]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Kyla Barela") 
    {coordinates = [575,277]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Darly Rosansky") 
    {coordinates = [545,286]; put_marker(coordinates[0], coordinates[1], "3rd");}
else if (x == "Jessica Celestino") 
    {coordinates = [515,295]; put_marker(coordinates[0], coordinates[1], "3rd");}
  else
     {document.getElementById('marker').style.display = 'none';} 
}

</script>
