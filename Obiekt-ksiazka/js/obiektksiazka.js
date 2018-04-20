class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {
        var czyPrzeczytana;

        if (this.przeczytana === true) {
            czyPrzeczytana = 'została';
        } else {
            czyPrzeczytana = 'nie została';
        }
        return 'Książka ma tytuł "' + this.tytul + '", autorem jest ' + this.autor + ' i ' + czyPrzeczytana + ' przeczytana.';
    }
}

var pozycja1 = new Ksiazka('Teoria Portali', 'Martin Lechowicz', true);
//pozycja1.opiszKsiazke();

var pozycja2 = new Ksiazka('Świat lodu i ognia', 'George R.R. Martin', false);
//pozycja2.opiszKsiazke();

var pozycja3 = new Ksiazka('Raspberry Pi. Przewodnik użytkownika', 'Eben Upton oraz Gareth Halfacree', false);
//pozycja3.opiszKsiazke();

var biblioteczka = [pozycja1, pozycja2, pozycja3];

function iloscPrzeczytanych() {
    var status = 0;
    var dlugoscTablicy = biblioteczka.length;
    for (n = 0; n < dlugoscTablicy; n++) {
        console.log(biblioteczka[n].opiszKsiazke());
        if (biblioteczka[n].przeczytana === true) {
            status++;
        }
    }
    console.log('Przeczytanych: ' + status);
}
iloscPrzeczytanych(biblioteczka);