/**
 * @name summator
 * @description Sums a un b
 *  
 * 
 * 

*/


function dialogs(){
var a = Number(promt("ievadiet a vērtību:")), b = Number(promt("Ievadiet b bērtību:"));
document.getElementById("summator_1").innerHTML = a + " un " + b + "summa ir "+ summator(a, b);
}

dialogs();

function summator(a,b){
  c = a + b;
  return c;
}