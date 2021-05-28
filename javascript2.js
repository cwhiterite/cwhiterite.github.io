


var colorIndex = 0;
var lastDate = new Date().getTime();

setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the elapsed between now and the count down date
  var elapsed = now - lastDate;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
  var hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

  
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d  " + hours + "h  "
  + minutes + "m  " + seconds + "s  ";


//check if the number is even
if(colorIndex % 2 == 0) {
    if (minutes >= 30) { 
      chooseColor();
      colorIndex++;
  }
}
// if the number is odd
else {
    if (minutes <= 30) {
      chooseColor();
      colorIndex++;
  }
}
    
}, 1000);



function reset() {
  var now = new Date().getTime();
  lastDate = now;
  colorIndex = 0;
}

function changeColor(color) { 
  document.getElementById("back").style.background=color;
  document.getElementById("button").style.background=color;
}

function chooseColor() {
if (colorIndex == 0)
    {changeColor("#FF0000");}
else if (colorIndex == 1)
    {changeColor("#FF0100");}
else if (colorIndex == 2)
    {changeColor("#FF0200");}
else if (colorIndex == 3)
    {changeColor("#FF0300");}
else if (colorIndex == 4)
    {changeColor("#FF0400");}
else if (colorIndex == 5)
    {changeColor("#FF0500");}
else if (colorIndex == 6)
    {changeColor("#FF0600");}
else if (colorIndex == 7)
    {changeColor("#FF0700");}
else if (colorIndex == 8)
    {changeColor("#FF0800");}
else if (colorIndex == 9)
    {changeColor("#FF0900");}
else if (colorIndex == 10)
    {changeColor("#FF0A00");}
else if (colorIndex == 11)
    {changeColor("#FF0B00");}
else if (colorIndex == 12)
    {changeColor("#FF0C00");}
else if (colorIndex == 13)
    {changeColor("#FF0D00");}
else if (colorIndex == 14)
    {changeColor("#FF0E00");}
else if (colorIndex == 15)
    {changeColor("#FF0F00");}
else if (colorIndex == 16)
    {changeColor("#FF1000");}
else if (colorIndex == 17)
    {changeColor("#FF1100");}
else if (colorIndex == 18)
    {changeColor("#FF1200");}
else if (colorIndex == 19)
    {changeColor("#FF1300");}
else if (colorIndex == 20)
    {changeColor("#FF1400");}
else if (colorIndex == 21)
    {changeColor("#FF1500");}
else if (colorIndex == 22)
    {changeColor("#FF1600");}
else if (colorIndex == 23)
    {changeColor("#FF1700");}
else if (colorIndex == 24)
    {changeColor("#FF1800");}
else if (colorIndex == 25)
    {changeColor("#FF1900");}
else if (colorIndex == 26)
    {changeColor("#FF1A00");}
else if (colorIndex == 27)
    {changeColor("#FF1B00");}
else if (colorIndex == 28)
    {changeColor("#FF1C00");}
else if (colorIndex == 29)
    {changeColor("#FF1D00");}
else if (colorIndex == 30)
    {changeColor("#FF1E00");}
else if (colorIndex == 31)
    {changeColor("#FF1F00");}
else if (colorIndex == 32)
    {changeColor("#FF2000");}
else if (colorIndex == 33)
    {changeColor("#FF2100");}
else if (colorIndex == 34)
    {changeColor("#FF2200");}
else if (colorIndex == 35)
    {changeColor("#FF2300");}
else if (colorIndex == 36)
    {changeColor("#FF2400");}
else if (colorIndex == 37)
    {changeColor("#FF2500");}
else if (colorIndex == 38)
    {changeColor("#FF2600");}
else if (colorIndex == 39)
    {changeColor("#FF2700");}
else if (colorIndex == 40)
    {changeColor("#FF2800");}
else if (colorIndex == 41)
    {changeColor("#FF2900");}
else if (colorIndex == 42)
    {changeColor("#FF2A00");}
else if (colorIndex == 43)
    {changeColor("#FF2B00");}
else if (colorIndex == 44)
    {changeColor("#FF2C00");}
else if (colorIndex == 45)
    {changeColor("#FF2D00");}
else if (colorIndex == 46)
    {changeColor("#FF2E00");}
else if (colorIndex == 47)
    {changeColor("#FF2F00");}
else if (colorIndex == 48)
    {changeColor("#FF3000");}
else if (colorIndex == 49)
    {changeColor("#FF3100");}
else if (colorIndex == 50)
    {changeColor("#FF3200");}
else if (colorIndex == 51)
    {changeColor("#FF3300");}
else if (colorIndex == 52)
    {changeColor("#FF3400");}
else if (colorIndex == 53)
    {changeColor("#FF3500");}
else if (colorIndex == 54)
    {changeColor("#FF3600");}
else if (colorIndex == 55)
    {changeColor("#FF3700");}
else if (colorIndex == 56)
    {changeColor("#FF3800");}
else if (colorIndex == 57)
    {changeColor("#FF3900");}
else if (colorIndex == 58)
    {changeColor("#FF3A00");}
else if (colorIndex == 59)
    {changeColor("#FF3B00");}
else if (colorIndex == 60)
    {changeColor("#FF3C00");}
else if (colorIndex == 61)
    {changeColor("#FF3D00");}
else if (colorIndex == 62)
    {changeColor("#FF3E00");}
else if (colorIndex == 63)
    {changeColor("#FF3F00");}
else if (colorIndex == 64)
    {changeColor("#FF4000");}
else if (colorIndex == 65)
    {changeColor("#FF4100");}
else if (colorIndex == 66)
    {changeColor("#FF4200");}
else if (colorIndex == 67)
    {changeColor("#FF4300");}
else if (colorIndex == 68)
    {changeColor("#FF4400");}
else if (colorIndex == 69)
    {changeColor("#FF4500");}
else if (colorIndex == 70)
    {changeColor("#FF4600");}
else if (colorIndex == 71)
    {changeColor("#FF4700");}
else if (colorIndex == 72)
    {changeColor("#FF4800");}
else if (colorIndex == 73)
    {changeColor("#FF4900");}
else if (colorIndex == 74)
    {changeColor("#FF4A00");}
else if (colorIndex == 75)
    {changeColor("#FF4B00");}
else if (colorIndex == 76)
    {changeColor("#FF4C00");}
else if (colorIndex == 77)
    {changeColor("#FF4D00");}
else if (colorIndex == 78)
    {changeColor("#FF4E00");}
else if (colorIndex == 79)
    {changeColor("#FF4F00");}
else if (colorIndex == 80)
    {changeColor("#FF5000");}
else if (colorIndex == 81)
    {changeColor("#FF5100");}
else if (colorIndex == 82)
    {changeColor("#FF5200");}
else if (colorIndex == 83)
    {changeColor("#FF5300");}
else if (colorIndex == 84)
    {changeColor("#FF5400");}
else if (colorIndex == 85)
    {changeColor("#FF5500");}
else if (colorIndex == 86)
    {changeColor("#FF5600");}
else if (colorIndex == 87)
    {changeColor("#FF5700");}
else if (colorIndex == 88)
    {changeColor("#FF5800");}
else if (colorIndex == 89)
    {changeColor("#FF5900");}
else if (colorIndex == 90)
    {changeColor("#FF5A00");}
else if (colorIndex == 91)
    {changeColor("#FF5B00");}
else if (colorIndex == 92)
    {changeColor("#FF5C00");}
else if (colorIndex == 93)
    {changeColor("#FF5D00");}
else if (colorIndex == 94)
    {changeColor("#FF5E00");}
else if (colorIndex == 95)
    {changeColor("#FF5F00");}
else if (colorIndex == 96)
    {changeColor("#FF6000");}
else if (colorIndex == 97)
    {changeColor("#FF6100");}
else if (colorIndex == 98)
    {changeColor("#FF6200");}
else if (colorIndex == 99)
    {changeColor("#FF6300");}
else if (colorIndex == 100)
    {changeColor("#FF6400");}
else if (colorIndex == 101)
    {changeColor("#FF6500");}
else if (colorIndex == 102)
    {changeColor("#FF6600");}
else if (colorIndex == 103)
    {changeColor("#FF6700");}
else if (colorIndex == 104)
    {changeColor("#FF6800");}
else if (colorIndex == 105)
    {changeColor("#FF6900");}
else if (colorIndex == 106)
    {changeColor("#FF6A00");}
else if (colorIndex == 107)
    {changeColor("#FF6B00");}
else if (colorIndex == 108)
    {changeColor("#FF6C00");}
else if (colorIndex == 109)
    {changeColor("#FF6D00");}
else if (colorIndex == 110)
    {changeColor("#FF6E00");}
else if (colorIndex == 111)
    {changeColor("#FF6F00");}
else if (colorIndex == 112)
    {changeColor("#FF7000");}
else if (colorIndex == 113)
    {changeColor("#FF7100");}
else if (colorIndex == 114)
    {changeColor("#FF7200");}
else if (colorIndex == 115)
    {changeColor("#FF7300");}
else if (colorIndex == 116)
    {changeColor("#FF7400");}
else if (colorIndex == 117)
    {changeColor("#FF7500");}
else if (colorIndex == 118)
    {changeColor("#FF7600");}
else if (colorIndex == 119)
    {changeColor("#FF7700");}
else if (colorIndex == 120)
    {changeColor("#FF7800");}
else if (colorIndex == 121)
    {changeColor("#FF7900");}
else if (colorIndex == 122)
    {changeColor("#FF7A00");}
else if (colorIndex == 123)
    {changeColor("#FF7B00");}
else if (colorIndex == 124)
    {changeColor("#FF7C00");}
else if (colorIndex == 125)
    {changeColor("#FF7D00");}
else if (colorIndex == 126)
    {changeColor("#FF7E00");}
else if (colorIndex == 127)
    {changeColor("#FF7F00");}
else if (colorIndex == 128)
    {changeColor("#FF8000");}
else if (colorIndex == 129)
    {changeColor("#FF8100");}
else if (colorIndex == 130)
    {changeColor("#FF8200");}
else if (colorIndex == 131)
    {changeColor("#FF8300");}
else if (colorIndex == 132)
    {changeColor("#FF8400");}
else if (colorIndex == 133)
    {changeColor("#FF8500");}
else if (colorIndex == 134)
    {changeColor("#FF8600");}
else if (colorIndex == 135)
    {changeColor("#FF8700");}
else if (colorIndex == 136)
    {changeColor("#FF8800");}
else if (colorIndex == 137)
    {changeColor("#FF8900");}
else if (colorIndex == 138)
    {changeColor("#FF8A00");}
else if (colorIndex == 139)
    {changeColor("#FF8B00");}
else if (colorIndex == 140)
    {changeColor("#FF8C00");}
else if (colorIndex == 141)
    {changeColor("#FF8D00");}
else if (colorIndex == 142)
    {changeColor("#FF8E00");}
else if (colorIndex == 143)
    {changeColor("#FF8F00");}
else if (colorIndex == 144)
    {changeColor("#FF9000");}
else if (colorIndex == 145)
    {changeColor("#FF9100");}
else if (colorIndex == 146)
    {changeColor("#FF9200");}
else if (colorIndex == 147)
    {changeColor("#FF9300");}
else if (colorIndex == 148)
    {changeColor("#FF9400");}
else if (colorIndex == 149)
    {changeColor("#FF9500");}
else if (colorIndex == 150)
    {changeColor("#FF9600");}
else if (colorIndex == 151)
    {changeColor("#FF9700");}
else if (colorIndex == 152)
    {changeColor("#FF9800");}
else if (colorIndex == 153)
    {changeColor("#FF9900");}
else if (colorIndex == 154)
    {changeColor("#FF9A00");}
else if (colorIndex == 155)
    {changeColor("#FF9B00");}
else if (colorIndex == 156)
    {changeColor("#FF9C00");}
else if (colorIndex == 157)
    {changeColor("#FF9D00");}
else if (colorIndex == 158)
    {changeColor("#FF9E00");}
else if (colorIndex == 159)
    {changeColor("#FF9F00");}
else if (colorIndex == 160)
    {changeColor("#FFA000");}
else if (colorIndex == 161)
    {changeColor("#FFA001");}
else if (colorIndex == 162)
    {changeColor("#FFA002");}
else if (colorIndex == 163)
    {changeColor("#FFA003");}
else if (colorIndex == 164)
    {changeColor("#FFA004");}
else if (colorIndex == 165)
    {changeColor("#FFA005");}
else if (colorIndex == 166)
    {changeColor("#FFA006");}
else if (colorIndex == 167)
    {changeColor("#FFA007");}
else if (colorIndex == 168)
    {changeColor("#FFA008");}
else if (colorIndex == 169)
    {changeColor("#FFA009");}
else if (colorIndex == 170)
    {changeColor("#FFA00A");}
else if (colorIndex == 171)
    {changeColor("#FFA00B");}
else if (colorIndex == 172)
    {changeColor("#FFA00C");}
else if (colorIndex == 173)
    {changeColor("#FFA00D");}
else if (colorIndex == 174)
    {changeColor("#FFA00E");}
else if (colorIndex == 175)
    {changeColor("#FFA00F");}
else if (colorIndex == 176)
    {changeColor("#FFA010");}
else if (colorIndex == 177)
    {changeColor("#FFA011");}
else if (colorIndex == 178)
    {changeColor("#FFA012");}
else if (colorIndex == 179)
    {changeColor("#FFA013");}
else if (colorIndex == 180)
    {changeColor("#FFA014");}
else if (colorIndex == 181)
    {changeColor("#FFA015");}
else if (colorIndex == 182)
    {changeColor("#FFA016");}
else if (colorIndex == 183)
    {changeColor("#FFA017");}
else if (colorIndex == 184)
    {changeColor("#FFA018");}
else if (colorIndex == 185)
    {changeColor("#FFA019");}
else if (colorIndex == 186)
    {changeColor("#FFA01A");}
else if (colorIndex == 187)
    {changeColor("#FFA01B");}
else if (colorIndex == 188)
    {changeColor("#FFA01C");}
else if (colorIndex == 189)
    {changeColor("#FFA01D");}
else if (colorIndex == 190)
    {changeColor("#FFA01E");}
else if (colorIndex == 191)
    {changeColor("#FFA01F");}
else if (colorIndex == 192)
    {changeColor("#FFA020");}
else if (colorIndex == 193)
    {changeColor("#FFA021");}
else if (colorIndex == 194)
    {changeColor("#FFA022");}
else if (colorIndex == 195)
    {changeColor("#FFA023");}
else if (colorIndex == 196)
    {changeColor("#FFA024");}
else if (colorIndex == 197)
    {changeColor("#FFA025");}
else if (colorIndex == 198)
    {changeColor("#FFA026");}
else if (colorIndex == 199)
    {changeColor("#FFA027");}
else if (colorIndex == 200)
    {changeColor("#FFA028");}
else if (colorIndex == 201)
    {changeColor("#FFA029");}
else if (colorIndex == 202)
    {changeColor("#FFA02A");}
else if (colorIndex == 203)
    {changeColor("#FFA02B");}
else if (colorIndex == 204)
    {changeColor("#FFA02C");}
else if (colorIndex == 205)
    {changeColor("#FFA02D");}
else if (colorIndex == 206)
    {changeColor("#FFA02E");}
else if (colorIndex == 207)
    {changeColor("#FFA02F");}
else if (colorIndex == 208)
    {changeColor("#FFA030");}
else if (colorIndex == 209)
    {changeColor("#FFA031");}
else if (colorIndex == 210)
    {changeColor("#FFA032");}
else if (colorIndex == 211)
    {changeColor("#FFA033");}
else if (colorIndex == 212)
    {changeColor("#FFA034");}
else if (colorIndex == 213)
    {changeColor("#FFA035");}
else if (colorIndex == 214)
    {changeColor("#FFA036");}
else if (colorIndex == 215)
    {changeColor("#FFA037");}
else if (colorIndex == 216)
    {changeColor("#FFA038");}
else if (colorIndex == 217)
    {changeColor("#FFA039");}
else if (colorIndex == 218)
    {changeColor("#FFA03A");}
else if (colorIndex == 219)
    {changeColor("#FFA03B");}
else if (colorIndex == 220)
    {changeColor("#FFA03C");}
else if (colorIndex == 221)
    {changeColor("#FFA03D");}
else if (colorIndex == 222)
    {changeColor("#FFA03E");}
else if (colorIndex == 223)
    {changeColor("#FFA03F");}
else if (colorIndex == 224)
    {changeColor("#FFA040");}
else if (colorIndex == 225)
    {changeColor("#FFA041");}
else if (colorIndex == 226)
    {changeColor("#FFA042");}
else if (colorIndex == 227)
    {changeColor("#FFA043");}
else if (colorIndex == 228)
    {changeColor("#FFA044");}
else if (colorIndex == 229)
    {changeColor("#FFA045");}
else if (colorIndex == 230)
    {changeColor("#FFA046");}
else if (colorIndex == 231)
    {changeColor("#FFA047");}
else if (colorIndex == 232)
    {changeColor("#FFA048");}
else if (colorIndex == 233)
    {changeColor("#FFA049");}
else if (colorIndex == 234)
    {changeColor("#FFA04A");}
else if (colorIndex == 235)
    {changeColor("#FFA04B");}
else if (colorIndex == 236)
    {changeColor("#FFA04C");}
else if (colorIndex == 237)
    {changeColor("#FFA04D");}
else if (colorIndex == 238)
    {changeColor("#FFA04E");}
else if (colorIndex == 239)
    {changeColor("#FFA04F");}
else if (colorIndex == 240)
    {changeColor("#FFA050");}
else if (colorIndex == 241)
    {changeColor("#FFA051");}
else if (colorIndex == 242)
    {changeColor("#FFA052");}
else if (colorIndex == 243)
    {changeColor("#FFA053");}
else if (colorIndex == 244)
    {changeColor("#FFA054");}
else if (colorIndex == 245)
    {changeColor("#FFA055");}
else if (colorIndex == 246)
    {changeColor("#FFA056");}
else if (colorIndex == 247)
    {changeColor("#FFA057");}
else if (colorIndex == 248)
    {changeColor("#FFA058");}
else if (colorIndex == 249)
    {changeColor("#FFA059");}
else if (colorIndex == 250)
    {changeColor("#FFA05A");}
else if (colorIndex == 251)
    {changeColor("#FFA05B");}
else if (colorIndex == 252)
    {changeColor("#FFA05C");}
else if (colorIndex == 253)
    {changeColor("#FFA05D");}
else if (colorIndex == 254)
    {changeColor("#FFA05E");}
else if (colorIndex == 255)
    {changeColor("#FFA05F");}
else if (colorIndex == 256)
    {changeColor("#FFA060");}
else if (colorIndex == 257)
    {changeColor("#FFA061");}
else if (colorIndex == 258)
    {changeColor("#FFA062");}
else if (colorIndex == 259)
    {changeColor("#FFA063");}
else if (colorIndex == 260)
    {changeColor("#FFA064");}
else if (colorIndex == 261)
    {changeColor("#FFA065");}
else if (colorIndex == 262)
    {changeColor("#FFA066");}
else if (colorIndex == 263)
    {changeColor("#FFA067");}
else if (colorIndex == 264)
    {changeColor("#FFA068");}
else if (colorIndex == 265)
    {changeColor("#FFA069");}
else if (colorIndex == 266)
    {changeColor("#FFA06A");}
else if (colorIndex == 267)
    {changeColor("#FFA06B");}
else if (colorIndex == 268)
    {changeColor("#FFA06C");}
else if (colorIndex == 269)
    {changeColor("#FFA06D");}
else if (colorIndex == 270)
    {changeColor("#FFA06E");}
else if (colorIndex == 271)
    {changeColor("#FFA06F");}
else if (colorIndex == 272)
    {changeColor("#FFA070");}
else if (colorIndex == 273)
    {changeColor("#FFA071");}
else if (colorIndex == 274)
    {changeColor("#FFA072");}
else if (colorIndex == 275)
    {changeColor("#FFA073");}
else if (colorIndex == 276)
    {changeColor("#FFA074");}
else if (colorIndex == 277)
    {changeColor("#FFA075");}
else if (colorIndex == 278)
    {changeColor("#FEA075");}
else if (colorIndex == 279)
    {changeColor("#FDA075");}
else if (colorIndex == 280)
    {changeColor("#FCA075");}
else if (colorIndex == 281)
    {changeColor("#FBA075");}
else if (colorIndex == 282)
    {changeColor("#FAA075");}
else if (colorIndex == 283)
    {changeColor("#F9A075");}
else if (colorIndex == 284)
    {changeColor("#F8A075");}
else if (colorIndex == 285)
    {changeColor("#F7A075");}
else if (colorIndex == 286)
    {changeColor("#F6A075");}
else if (colorIndex == 287)
    {changeColor("#F5A075");}
else if (colorIndex == 288)
    {changeColor("#F4A075");}
else if (colorIndex == 289)
    {changeColor("#F3A075");}
else if (colorIndex == 290)
    {changeColor("#F2A075");}
else if (colorIndex == 291)
    {changeColor("#F1A075");}
else if (colorIndex == 292)
    {changeColor("#F0A075");}
else if (colorIndex == 293)
    {changeColor("#EFA075");}
else if (colorIndex == 294)
    {changeColor("#EEA075");}
else if (colorIndex == 295)
    {changeColor("#EDA075");}
else if (colorIndex == 296)
    {changeColor("#ECA075");}
else if (colorIndex == 297)
    {changeColor("#EBA075");}
else if (colorIndex == 298)
    {changeColor("#EAA075");}
else if (colorIndex == 299)
    {changeColor("#E9A075");}
else if (colorIndex == 300)
    {changeColor("#E8A075");}
else if (colorIndex == 301)
    {changeColor("#E7A075");}
else if (colorIndex == 302)
    {changeColor("#E6A075");}
else if (colorIndex == 303)
    {changeColor("#E5A075");}
else if (colorIndex == 304)
    {changeColor("#E4A075");}
else if (colorIndex == 305)
    {changeColor("#E3A075");}
else if (colorIndex == 306)
    {changeColor("#E2A075");}
else if (colorIndex == 307)
    {changeColor("#E1A075");}
else if (colorIndex == 308)
    {changeColor("#E0A075");}
else if (colorIndex == 309)
    {changeColor("#DFA075");}
else if (colorIndex == 310)
    {changeColor("#DEA075");}
else if (colorIndex == 311)
    {changeColor("#DDA075");}
else if (colorIndex == 312)
    {changeColor("#DCA075");}
else if (colorIndex == 313)
    {changeColor("#DBA075");}
else if (colorIndex == 314)
    {changeColor("#DAA075");}
else if (colorIndex == 315)
    {changeColor("#D9A075");}
else if (colorIndex == 316)
    {changeColor("#D8A075");}
else if (colorIndex == 317)
    {changeColor("#D7A075");}
else if (colorIndex == 318)
    {changeColor("#D6A075");}
else if (colorIndex == 319)
    {changeColor("#D5A075");}
else if (colorIndex == 320)
    {changeColor("#D4A075");}
else if (colorIndex == 321)
    {changeColor("#D3A075");}
else if (colorIndex == 322)
    {changeColor("#D2A075");}
else if (colorIndex == 323)
    {changeColor("#D1A075");}
else if (colorIndex == 324)
    {changeColor("#D0A075");}
else if (colorIndex == 325)
    {changeColor("#CFA075");}
else if (colorIndex == 326)
    {changeColor("#CEA075");}
else if (colorIndex == 327)
    {changeColor("#CDA075");}
else if (colorIndex == 328)
    {changeColor("#CCA075");}
else if (colorIndex == 329)
    {changeColor("#CBA075");}
else if (colorIndex == 330)
    {changeColor("#CAA075");}
else if (colorIndex == 331)
    {changeColor("#C9A075");}
else if (colorIndex == 332)
    {changeColor("#C8A075");}
else if (colorIndex == 333)
    {changeColor("#C7A075");}
else if (colorIndex == 334)
    {changeColor("#C6A075");}
else if (colorIndex == 335)
    {changeColor("#C5A075");}
else if (colorIndex == 336)
    {changeColor("#C4A075");}
else if (colorIndex == 337)
    {changeColor("#C3A075");}
else if (colorIndex == 338)
    {changeColor("#C2A075");}
else if (colorIndex == 339)
    {changeColor("#C1A075");}
else if (colorIndex == 340)
    {changeColor("#C0A075");}
else if (colorIndex == 341)
    {changeColor("#BFA075");}
else if (colorIndex == 342)
    {changeColor("#BEA075");}
else if (colorIndex == 343)
    {changeColor("#BDA075");}
else if (colorIndex == 344)
    {changeColor("#BCA075");}
else if (colorIndex == 345)
    {changeColor("#BBA075");}
else if (colorIndex == 346)
    {changeColor("#BAA075");}
else if (colorIndex == 347)
    {changeColor("#B9A075");}
else if (colorIndex == 348)
    {changeColor("#B8A075");}
else if (colorIndex == 349)
    {changeColor("#B7A075");}
else if (colorIndex == 350)
    {changeColor("#B6A075");}
else if (colorIndex == 351)
    {changeColor("#B5A075");}
else if (colorIndex == 352)
    {changeColor("#B4A075");}
else if (colorIndex == 353)
    {changeColor("#B3A075");}
else if (colorIndex == 354)
    {changeColor("#B2A075");}
else if (colorIndex == 355)
    {changeColor("#B1A075");}
else if (colorIndex == 356)
    {changeColor("#B0A075");}
else if (colorIndex == 357)
    {changeColor("#AFA075");}
else if (colorIndex == 358)
    {changeColor("#AEA075");}
else if (colorIndex == 359)
    {changeColor("#ADA075");}
else if (colorIndex == 360)
    {changeColor("#ACA075");}
else if (colorIndex == 361)
    {changeColor("#ABA075");}
else if (colorIndex == 362)
    {changeColor("#AAA075");}
else if (colorIndex == 363)
    {changeColor("#A9A075");}
else if (colorIndex == 364)
    {changeColor("#A8A075");}
else if (colorIndex == 365)
    {changeColor("#A7A075");}
else if (colorIndex == 366)
    {changeColor("#A6A075");}
else if (colorIndex == 367)
    {changeColor("#A5A075");}
else if (colorIndex == 368)
    {changeColor("#A4A075");}
else if (colorIndex == 369)
    {changeColor("#A3A075");}
else if (colorIndex == 370)
    {changeColor("#A2A075");}
else if (colorIndex == 371)
    {changeColor("#A1A075");}
else if (colorIndex == 372)
    {changeColor("#A0A075");}
else if (colorIndex == 373)
    {changeColor("#9FA075");}
else if (colorIndex == 374)
    {changeColor("#9EA075");}
else if (colorIndex == 375)
    {changeColor("#9DA075");}
else if (colorIndex == 376)
    {changeColor("#9CA075");}
else if (colorIndex == 377)
    {changeColor("#9BA075");}
else if (colorIndex == 378)
    {changeColor("#9AA075");}
else if (colorIndex == 379)
    {changeColor("#99A075");}
else if (colorIndex == 380)
    {changeColor("#98A075");}
else if (colorIndex == 381)
    {changeColor("#97A075");}
else if (colorIndex == 382)
    {changeColor("#96A075");}
else if (colorIndex == 383)
    {changeColor("#95A075");}
else if (colorIndex == 384)
    {changeColor("#94A075");}
else if (colorIndex == 385)
    {changeColor("#93A075");}
else if (colorIndex == 386)
    {changeColor("#92A075");}
else if (colorIndex == 387)
    {changeColor("#91A075");}
else if (colorIndex == 388)
    {changeColor("#90A075");}
else if (colorIndex == 389)
    {changeColor("#8FA075");}
else if (colorIndex == 390)
    {changeColor("#8EA075");}
else if (colorIndex == 391)
    {changeColor("#8DA075");}
else if (colorIndex == 392)
    {changeColor("#8CA075");}
else if (colorIndex == 393)
    {changeColor("#8BA075");}
else if (colorIndex == 394)
    {changeColor("#8AA075");}
else if (colorIndex == 395)
    {changeColor("#89A075");}
else if (colorIndex == 396)
    {changeColor("#88A075");}
else if (colorIndex == 397)
    {changeColor("#87A075");}
else if (colorIndex == 398)
    {changeColor("#86A075");}
else if (colorIndex == 399)
    {changeColor("#85A075");}
else if (colorIndex == 400)
    {changeColor("#84A075");}
else if (colorIndex == 401)
    {changeColor("#83A075");}
else if (colorIndex == 402)
    {changeColor("#82A075");}
else if (colorIndex == 403)
    {changeColor("#81A075");}
else if (colorIndex == 404)
    {changeColor("#80A075");}
else if (colorIndex == 405)
    {changeColor("#7FA075");}
else if (colorIndex == 406)
    {changeColor("#7EA075");}
else if (colorIndex == 407)
    {changeColor("#7DA075");}
else if (colorIndex == 408)
    {changeColor("#7CA075");}
else if (colorIndex == 409)
    {changeColor("#7BA075");}
else if (colorIndex == 410)
    {changeColor("#7AA075");}
else if (colorIndex == 411)
    {changeColor("#79A075");}
else if (colorIndex == 412)
    {changeColor("#78A075");}
else if (colorIndex == 413)
    {changeColor("#77A075");}
else if (colorIndex == 414)
    {changeColor("#76A075");}
else if (colorIndex == 415)
    {changeColor("#75A075");}
else if (colorIndex == 416)
    {changeColor("#75A076");}
else if (colorIndex == 417)
    {changeColor("#75A077");}
else if (colorIndex == 418)
    {changeColor("#75A078");}
else if (colorIndex == 419)
    {changeColor("#75A079");}
else if (colorIndex == 420)
    {changeColor("#75A07A");}
else if (colorIndex == 421)
    {changeColor("#75A07B");}
else if (colorIndex == 422)
    {changeColor("#75A07C");}
else if (colorIndex == 423)
    {changeColor("#75A07D");}
else if (colorIndex == 424)
    {changeColor("#75A07E");}
else if (colorIndex == 425)
    {changeColor("#75A07F");}
else if (colorIndex == 426)
    {changeColor("#75A080");}
else if (colorIndex == 427)
    {changeColor("#75A081");}
else if (colorIndex == 428)
    {changeColor("#75A082");}
else if (colorIndex == 429)
    {changeColor("#75A083");}
else if (colorIndex == 430)
    {changeColor("#75A084");}
else if (colorIndex == 431)
    {changeColor("#75A085");}
else if (colorIndex == 432)
    {changeColor("#75A086");}
else if (colorIndex == 433)
    {changeColor("#75A087");}
else if (colorIndex == 434)
    {changeColor("#75A088");}
else if (colorIndex == 435)
    {changeColor("#75A089");}
else if (colorIndex == 436)
    {changeColor("#75A08A");}
else if (colorIndex == 437)
    {changeColor("#75A08B");}
else if (colorIndex == 438)
    {changeColor("#75A08C");}
else if (colorIndex == 439)
    {changeColor("#75A08D");}
else if (colorIndex == 440)
    {changeColor("#75A08E");}
else if (colorIndex == 441)
    {changeColor("#75A08F");}
else if (colorIndex == 442)
    {changeColor("#75A090");}
else if (colorIndex == 443)
    {changeColor("#75A091");}
else if (colorIndex == 444)
    {changeColor("#75A092");}
else if (colorIndex == 445)
    {changeColor("#75A093");}
else if (colorIndex == 446)
    {changeColor("#75A094");}
else if (colorIndex == 447)
    {changeColor("#75A095");}
else if (colorIndex == 448)
    {changeColor("#75A096");}
else if (colorIndex == 449)
    {changeColor("#75A097");}
else if (colorIndex == 450)
    {changeColor("#75A098");}
else if (colorIndex == 451)
    {changeColor("#75A099");}
else if (colorIndex == 452)
    {changeColor("#75A09A");}
else if (colorIndex == 453)
    {changeColor("#75A09B");}
else if (colorIndex == 454)
    {changeColor("#75A09C");}
else if (colorIndex == 455)
    {changeColor("#75A09D");}
else if (colorIndex == 456)
    {changeColor("#75A09E");}
else if (colorIndex == 457)
    {changeColor("#75A09F");}
else if (colorIndex == 458)
    {changeColor("#75A0A0");}
else if (colorIndex == 459)
    {changeColor("#75A0A1");}
else if (colorIndex == 460)
    {changeColor("#75A0A2");}
else if (colorIndex == 461)
    {changeColor("#75A0A3");}
else if (colorIndex == 462)
    {changeColor("#75A0A4");}
else if (colorIndex == 463)
    {changeColor("#75A0A5");}
else if (colorIndex == 464)
    {changeColor("#75A0A6");}
else if (colorIndex == 465)
    {changeColor("#75A0A7");}
else if (colorIndex == 466)
    {changeColor("#75A0A8");}
else if (colorIndex == 467)
    {changeColor("#75A0A9");}
else if (colorIndex == 468)
    {changeColor("#75A0AA");}
else if (colorIndex == 469)
    {changeColor("#75A0AB");}
else if (colorIndex == 470)
    {changeColor("#75A0AC");}
else if (colorIndex == 471)
    {changeColor("#75A0AD");}
else if (colorIndex == 472)
    {changeColor("#75A0AE");}
else if (colorIndex == 473)
    {changeColor("#75A0AF");}
else if (colorIndex == 474)
    {changeColor("#75A0B0");}
else if (colorIndex == 475)
    {changeColor("#75A0B1");}
else if (colorIndex == 476)
    {changeColor("#75A0B2");}
else if (colorIndex == 477)
    {changeColor("#75A0B3");}
else if (colorIndex == 478)
    {changeColor("#75A0B4");}
else if (colorIndex == 479)
    {changeColor("#75A0B5");}
else if (colorIndex == 480)
    {changeColor("#75A1B5");}
else if (colorIndex == 481)
    {changeColor("#75A2B5");}
else if (colorIndex == 482)
    {changeColor("#75A3B5");}
else if (colorIndex == 483)
    {changeColor("#75A4B5");}
else if (colorIndex == 484)
    {changeColor("#75A5B5");}
else if (colorIndex == 485)
    {changeColor("#75A6B5");}
else if (colorIndex == 486)
    {changeColor("#75A7B5");}
else if (colorIndex == 487)
    {changeColor("#75A8B5");}
else if (colorIndex == 488)
    {changeColor("#75A9B5");}
else if (colorIndex == 489)
    {changeColor("#75AAB5");}
else if (colorIndex == 490)
    {changeColor("#75ABB5");}
else if (colorIndex == 491)
    {changeColor("#75ACB5");}
else if (colorIndex == 492)
    {changeColor("#75ADB5");}
else if (colorIndex == 493)
    {changeColor("#75AEB5");}
else if (colorIndex == 494)
    {changeColor("#75AFB5");}
else if (colorIndex == 495)
    {changeColor("#75B0B5");}
else if (colorIndex == 496)
    {changeColor("#75B1B5");}
else if (colorIndex == 497)
    {changeColor("#75B2B5");}
else if (colorIndex == 498)
    {changeColor("#75B3B5");}
else if (colorIndex == 499)
    {changeColor("#75B4B5");}
else if (colorIndex == 500)
    {changeColor("#75B5B5");}
else if (colorIndex == 501)
    {changeColor("#75B6B5");}
else if (colorIndex == 502)
    {changeColor("#75B7B5");}
else if (colorIndex == 503)
    {changeColor("#75B8B5");}
else if (colorIndex == 504)
    {changeColor("#75B9B5");}
else if (colorIndex == 505)
    {changeColor("#75BAB5");}
else if (colorIndex == 506)
    {changeColor("#75BBB5");}
else if (colorIndex == 507)
    {changeColor("#75BCB5");}
else if (colorIndex == 508)
    {changeColor("#75BDB5");}
else if (colorIndex == 509)
    {changeColor("#75BEB5");}
else if (colorIndex == 510)
    {changeColor("#75BFB5");}
else if (colorIndex == 511)
    {changeColor("#75C0B5");}
else if (colorIndex == 512)
    {changeColor("#75C1B5");}
else if (colorIndex == 513)
    {changeColor("#75C2B5");}
else if (colorIndex == 514)
    {changeColor("#75C3B5");}
else if (colorIndex == 515)
    {changeColor("#75C4B5");}
else if (colorIndex == 516)
    {changeColor("#75C5B5");}
else if (colorIndex == 517)
    {changeColor("#75C6B5");}
else if (colorIndex == 518)
    {changeColor("#75C7B5");}
else if (colorIndex == 519)
    {changeColor("#75C8B5");}
else if (colorIndex == 520)
    {changeColor("#75C9B5");}
else if (colorIndex == 521)
    {changeColor("#75CAB5");}
else if (colorIndex == 522)
    {changeColor("#75CBB5");}
else if (colorIndex == 523)
    {changeColor("#75CCB5");}
else if (colorIndex == 524)
    {changeColor("#75CDB5");}
else if (colorIndex == 525)
    {changeColor("#75CEB5");}
else if (colorIndex == 526)
    {changeColor("#75CFB5");}
else if (colorIndex == 527)
    {changeColor("#75D0B5");}
else if (colorIndex == 528)
    {changeColor("#75D1B5");}
else if (colorIndex == 529)
    {changeColor("#75D2B5");}
else if (colorIndex == 530)
    {changeColor("#75D3B5");}
else if (colorIndex == 531)
    {changeColor("#75D4B5");}
else if (colorIndex == 532)
    {changeColor("#75D5B5");}
else if (colorIndex == 533)
    {changeColor("#75D6B5");}
else if (colorIndex == 534)
    {changeColor("#75D7B5");}
else if (colorIndex == 535)
    {changeColor("#75D8B5");}
else if (colorIndex == 536)
    {changeColor("#75D9B5");}
else if (colorIndex == 537)
    {changeColor("#75DAB5");}
else if (colorIndex == 538)
    {changeColor("#75DBB5");}
else if (colorIndex == 539)
    {changeColor("#75DCB5");}
else if (colorIndex == 540)
    {changeColor("#75DDB5");}
else if (colorIndex == 541)
    {changeColor("#75DEB5");}
else if (colorIndex == 542)
    {changeColor("#75DFB5");}
else if (colorIndex == 543)
    {changeColor("#75E0B5");}
else if (colorIndex == 544)
    {changeColor("#75E1B5");}
else if (colorIndex == 545)
    {changeColor("#75E2B5");}
else if (colorIndex == 546)
    {changeColor("#75E3B5");}
else if (colorIndex == 547)
    {changeColor("#75E4B5");}
else if (colorIndex == 548)
    {changeColor("#75E5B5");}
else if (colorIndex == 549)
    {changeColor("#75E6B5");}
else if (colorIndex == 550)
    {changeColor("#75E7B5");}
else if (colorIndex == 551)
    {changeColor("#75E8B5");}
else if (colorIndex == 552)
    {changeColor("#75E9B5");}
else if (colorIndex == 553)
    {changeColor("#75EAB5");}
else if (colorIndex == 554)
    {changeColor("#75EBB5");}
else if (colorIndex == 555)
    {changeColor("#75ECB5");}
else if (colorIndex == 556)
    {changeColor("#75EDB5");}
else if (colorIndex == 557)
    {changeColor("#75EEB5");}
else if (colorIndex == 558)
    {changeColor("#75EFB5");}
else if (colorIndex == 559)
    {changeColor("#75F0B5");}
else if (colorIndex == 560)
    {changeColor("#75F1B5");}
else if (colorIndex == 561)
    {changeColor("#75F2B5");}
else if (colorIndex == 562)
    {changeColor("#75F3B5");}
else if (colorIndex == 563)
    {changeColor("#75F4B5");}
else if (colorIndex == 564)
    {changeColor("#75F5B5");}
else if (colorIndex == 565)
    {changeColor("#75F6B5");}
else if (colorIndex == 566)
    {changeColor("#75F7B5");}
else if (colorIndex == 567)
    {changeColor("#75F8B5");}
else if (colorIndex == 568)
    {changeColor("#75F9B5");}
}
