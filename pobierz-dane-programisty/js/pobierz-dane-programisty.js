var przycisk = document.getElementById('przycisk');

przycisk.addEventListener('click', function (event) {
    event.preventDefault();
    $.getJSON(
        'https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php',
        function (dane) {
            $('body').append('<div id="dane-programisty"></div>');
            $('#dane-programisty').prepend('<p>Imię: ' + dane.imie + '</p>');
            $('#dane-programisty').append('<p>Nazwisko: ' + dane.nazwisko + '</p>');
            $('#dane-programisty').append('<p>Zawód: ' + dane.zawod + '</p>');
            $('#dane-programisty').append('<p>Frima: ' + dane.firma + '</p>');
        })

});
