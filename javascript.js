var choixdujoueur = 0;
var gagne = 0;
var perdu = 0;


document.getElementById('Pierre').addEventListener('click', function () {
    choixdujoueur = 1;
    var Ordi = (Math.random()*3) +1;

    Ordi = Math.floor(Ordi);

    if (Ordi === 1) {
        alert('Cest une egalité Parfaite');
    }

    if (Ordi === 2) {
        alert('On a Gagné');
        victoire();
    }

    if (Ordi === 3) {
        alert('Cest Perdu');
        defaite();
    }
});

document.getElementById('Feuille').addEventListener('click', function () {
    choixdujoueur = 1;
    var Ordi = (Math.random()*3) +1;

    Ordi = Math.floor(Ordi);

    if (Ordi === 1) {
        alert('Cest une egalité Parfaite');
    }

    if (Ordi === 2) {
        alert('On a Gagné');
        victoire();
    }

    if (Ordi === 3) {
        alert('Cest Perdu');
        defaite();
    }
});

document.getElementById('Ciseaux').addEventListener('click', function () {
    choixdujoueur = 1;
    var Ordi = (Math.random()*3) +1;

    Ordi = Math.floor(Ordi);

    if (Ordi === 1) {
        alert('Cest une egalité Parfaite');
    }

    if (Ordi === 2) {
        alert('On a Gagné');
        victoire();
    }

    if (Ordi === 3) {
        alert('Cest Perdu');
        defaite();
    }
});

function victoire() {
    gagne++;
    document.getElementById('joueur').innerHTML = 'Tu as ' + gagne + ' Victoire !';
}

function defaite() {
    perdu++;
    document.getElementById('ia').innerHTML = 'Tu as ' + perdu + ' Victoire !';
}