let numeri = document.getElementById("numeri");
let listaNumeri = []
let listaNumeriInseriti = '';

function creaNumeri(numeri,listaNumeri) {
    let k = '';
    for (let i = 0; i < 5; i++) {
        let n = Math.floor(Math.random() * (100 - 1) + 1);
        k += n + " ";
        listaNumeri.push(n);
    }
    numeri.innerHTML = k;
}
function inserisciNumeri() {
    let result = ''
    let p = 0;
    listaNumeriInseriti = prompt("Inserisci i 5 numeri divisi da una virgola");
    listaNumeriInseriti = listaNumeriInseriti.split(",")
    for(let i = 0; i<listaNumeri.length; i++) {
        if (listaNumeriInseriti[i] == listaNumeri[i]) {
            p+=1;
            result += listaNumeriInseriti[i] + " ";
        }
    }
    numeri.innerHTML = "hai indovinato " + p + " numeri e sono " + result;
}


creaNumeri(numeri,listaNumeri);
setTimeout(inserisciNumeri,30000);
