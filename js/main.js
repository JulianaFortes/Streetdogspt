$('li.faq-form').hide();
$('li.faq-titulo').click(function () {
    $(this).next().slideToggle('slow');
});


/*Abrir Formulario de adocao se o checkbox "Adoptado" for seleccionado*/

$('#btn-adotado').click(function() {
    if( $('#btn-adotado:checked').length > 0 ) {
        $(".div-ADOTADO").show('slow');
    } else {
        $(".div-ADOTADO").hide('slow');
    }
});

/*Abrir Formulario de fat se o checkbox "Está me FAT" for seleccionado*/

$('#btn-fat').click(function() {
    if( $('#btn-fat:checked').length > 0 ) {
        $(".div-FAT").show('slow');
    } else {
        $(".div-FAT").hide('slow');
    }
});

/*Abrir Formulario de esterilização se o checkbox "SIM" for seleccionado*/

$('input[name=esterilizado]').click(function () {
    if (this.id == "btn-esteril") {
        $(".div-ESTERIL").show('slow');
    } else {
        $(".div-ESTERIL").hide('slow');
    }
});



/* Smooth scrolling */

$(document).ready(function(){

    $("a[href^='#']").on('click', function(e) {
        e.preventDefault();
        hash = this.hash.split('#');
        $('html, body').animate({
            scrollTop: $('#' + hash[1]).offset().top
        }, 1000);
    });
    
    $("a[href^='#inicio']").on('click', function(e) {
        e.preventDefault();
        hash = this.hash.split('#');
        $('html, body').animate({
            scrollTop: $('#' + hash[1]).offset().top
        }, 1000);
    });
});


