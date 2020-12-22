$(function() {

    let numeros = '1234567890';

    let letras = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';

    let digitoVerificador = '1234567890Kk';



    $('.txtRut').keypress(function(e) {

        caracteres = numeros;

        let caracter = String.fromCharCode(e.which);

        if (caracteres.indexOf(caracter) < 0)

            return false;

    })

    $('.txtDv').keypress(function(e) {

        caracteres = digitoVerificador;

        let caracter = String.fromCharCode(e.which);

        if (caracteres.indexOf(caracter) < 0)

            return false;

    })

    $('.txtNombre').keypress(function(e) {

        caracteres = letras;

        let caracter = String.fromCharCode(e.which);

        if (caracteres.indexOf(caracter) < 0)

            return false;

    })

})$(function() {

    let numeros = '1234567890';

    let letras = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM ';

    let digitoVerificador = '1234567890Kk';



    $('.txtRut').keypress(function(e) {

        caracteres = numeros;

        let caracter = String.fromCharCode(e.which);

        if (caracteres.indexOf(caracter) < 0)

            return false;

    })

    $('.txtDv').keypress(function(e) {

        caracteres = digitoVerificador;

        let caracter = String.fromCharCode(e.which);

        if (caracteres.indexOf(caracter) < 0)

            return false;

    })

    $('.txtNombre').keypress(function(e) {

        caracteres = letras;

        let caracter = String.fromCharCode(e.which);

        if (caracteres.indexOf(caracter) < 0)

            return false;

    })

})


