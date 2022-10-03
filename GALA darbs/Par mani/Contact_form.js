// Pārbauda vai nav tukšs
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("Aizpildiet visus laukus!");
    } else {
    document.getElementById('form').submit();
    alert("Ziņa nosūtīta...");
    }
    }
    //Funkcija lai parādītu popupu
    function div_show() {
    document.getElementById('abc').style.display = "block";
    }
    //Funkcija, lai aizvērtu popupu
    function div_hide(){
    document.getElementById('abc').style.display = "none";
    }