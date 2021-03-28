var kerdesek;
var kerdessorszam = 0;

window.onload = function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );
}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kerdesek = d;
    kerdesmegjelenites(0)
}

function kerdesmegjelenites(kerdes) {
    let kérdés_ide = document.getElementById("kérdés_szöveg")
    kérdés_ide.innerHTML = kerdesek[kerdes].questionText;
    for (var i = 1; i <= 3; i++) {
        let kérdés_elem = document.getElementById("válasz" + i)
        kérdés_elem.innerHTML= kerdesek[kerdes]["answer"+i]
    }
    if (kerdesek[kerdes].image!="") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kerdesek[kerdes].image
    }
    else {
        document.getElementById("kép1").src = "https://i.pinimg.com/564x/32/58/ba/3258bafbefbc616c5736347001d9bb15.jpg"
    }
    
}
function elorekattint() {
    kerdessorszam++;
    if (kerdessorszam == kerdesek.length) {
        kerdessorszam = 0;
    }
    kerdesmegjelenites(kerdessorszam)
    Clear();
}
function visszakattint() {
    if (kerdessorszam > 0) {
        kerdessorszam = kerdessorszam - 1;

    }
    else {
        kerdessorszam = kerdesek.length-1;
    }

    kerdesmegjelenites(kerdessorszam)
    Clear();
}
function Válasz(n) {
    if (n == kerdesek[kerdessorszam].correctAnswer) {
        document.getElementById("válasz" + n).classList.add("jo");
    }
    else {
        document.getElementById("válasz" + n).classList.add("rossz");
    }

}

function Clear() {
    document.getElementById("válasz1").classList.remove("jo");
    document.getElementById("válasz1").classList.remove("rossz");
    document.getElementById("válasz2").classList.remove("jo");
    document.getElementById("válasz2").classList.remove("rossz");
    document.getElementById("válasz3").classList.remove("jo");
    document.getElementById("válasz3").classList.remove("rossz");
}