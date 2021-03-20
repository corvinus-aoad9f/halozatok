window.onload = function () {
    console.log("geráppá")
    var elso = document.getElementById("elso");
    var sor = document.createElement("div");
    sor.classList.add("sor");
    elso.appendChild(sor);
    for (var i = 0; i < 10; i++) {
        var szam = document.createElement("div");
        sor.appendChild(szam);
        szam.classList.add("elem");
        szam.innerText = i + 1;
        szam.style.background = `rgb(255, ${255 - 20 * i}, 255)`;
    }

    var faktoriális = function (n) {
        let er = 1;
        for (let i = 2; i <= n; i++) {
            er = er * i;
        }
        return er;
    }

    for (var s = 0; s < 10; s++) {
        var pascal = document.getElementById("pascal");
        var sorr = document.createElement("div");
        sorr.classList.add("sor");
        pascal.appendChild(sorr);
        for (var o = 0; o <= s; o++) {

            var elem = document.createElement("div");
            elem.classList.add("elem");
            elem.innerText = faktoriális(s) / (faktoriális(o) * faktoriális(s - o));
            sorr.appendChild(elem);
        }
    }
}