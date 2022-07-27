console.log("Skripta izpildes sākums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>";
let text = "";

for (let i = 1; i < 5; i++) {
  //for ( ; ; ){}
  //for (sākums - darbības ciklu uzsākot; nosacījums cikla turināšanai; soļa veikšana")
  //sākums-> (nosacījums spēkā) -> {} ->soļa veikšana -> nosacījums (-—) -> {} soļa pildīšana -> nosacījums (nav spēkā)
  //pārejam pie nākamās darbības aiz cikla

  if (i % 2 == 1) {
    //% atlikums no dalījuma ar 2. Ja 1 tad nepāris, ja 0 tad pāris
    text = text + i + "<br>";
}
}
document.getElementById("for_automatic_count_classic").innerHTML = text;

text = "";
var i = 1;
for ( ; i < 5; ){
  text = text + 1 + "<br>";
  i++;

}
document.getElementById("for_automatic_count_nonclassic").innerHTML = text;
text = "";
var i = 1;
while ( i < 5 ){
  text = text + 1 + "<br>";
  i++;
}
/*
text += cars[0] + "<br>";
text += text + cars[0] + "<br>";
*/
