var vards_uzvards = "Jānis Bērziņš,";
var nauda = 15000;
var peļņa_1 = (nauda * 0.0001) * 1;
var peļņa_2 = (nauda * 0.0002) * 2;
var peļņa_3 = (nauda * 0.0003) * 3;
var peļņa_4 = (nauda * 0.0004) * 4;
var peļņa_5 = (nauda * 0.0005) * 5;
document.getElementById("client").innerHTML = vards_uzvards;
document.getElementById("money").innerHTML = nauda;
document.getElementById("procenti_1").innerHTML = peļņa_1;
document.getElementById("procenti_2").innerHTML = peļņa_2;
document.getElementById("procenti_3").innerHTML = peļņa_3;
document.getElementById("procenti_4").innerHTML = peļņa_4;
document.getElementById("procenti_5").innerHTML = peļņa_5;

const cars = ["Saab", "Volvo", "BMW"];
cars.sort();
document.getElementById("cars").innerHTML;