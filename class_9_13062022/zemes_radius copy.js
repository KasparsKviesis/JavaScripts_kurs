var r = 6371;
p = 3.14159;
g = 2*p*r;

num = g;
roundedString = num.toFixed(2);
rounded = Number(roundedString);

document.getElementById("ekvators").innerHTML = rounded;
document.getElementById("radiuss").innerHTML = r;

console.log("Radiuss: "+r)
console.log("Pī: " +p)
console.log("Riņķa līnija " +g)

// gada % likme 0,01%, ja 2 gadi tad 0,02%, ja 3 gadi, tad 0,03%.
// Klienta V un U
// Noguldāmā summa
// Noguldījuma termiņš (gadi)

/*
Cienījamais ...klienta_vārds...,
Mēs, banka, redzam, ka jums kontā ir ...EUR naudas summa.
Ja ieguldīsiet mūsu bankā uz 1 gadu, tad pēc gada % jūs saņemsiet ...EUR.
Ja ieguldīsiet mūsu bankā uz 2 gadiem, tad pēc gada % jūs saņemsiet ...EUR.
Ja ieguldīsiet mūsu bankā uz 2 gadiem, tad pēc gada % jūs saņemsiet ...EUR.
Ja ieguldīsiet mūsu bankā uz 2 gadiem, tad pēc gada % jūs saņemsiet ...EUR.
Ja ieguldīsiet mūsu bankā uz 2 gadiem, tad pēc gada % jūs saņemsiet ...EUR.