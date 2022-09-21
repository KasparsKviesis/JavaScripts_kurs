//let jsWindow = window.open(
//  "http://www.sportacentrs.com",
 //   "test",
//);
//setTimeout(() => {
//  jsWindow.resizeTo(900, 600);
//}, 1000);

//setTimeout(() => {
  //  jsWindow.close();
  //}, 5000);
//
 // setTimeout(() => {
 //   window.open("http://www.apollo.lv");
 // }, 5000);

 function myFunction() {
  let text = "Vai vēlies atvērt lapu";
  if (confirm(text) == true)
  document.getElementById("demo").innerHTML = text;
}
 let jsWindow = window.open(
  "http://www.sportacentrs.com",
    "test",
 );
 counter = 1;
 var x = setInterval(my_function, 1000);
 
 document.getElementById("demo1").innerHTML = `Intervāla Id ${x}`;
 
 function my_function() {
 document.getElementById("demo2").innerHTML = counter;
 counter++;
 if (counter > 15){clearInterval(x);}
 }
  setTimeout(() => {
    window.open("http://www.apollo.lv");
  }, 5000);