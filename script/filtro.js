//ALMACENAR EN PORTAFLIO
$(document).ready(function()
{
  getPortafolio();
});

var portafolioImg;

function getPortafolio()
{
  $.getJSON("script/portafolio.json",function(pjson)
  {
    portafolioImg=pjson;
    genPortafolio(portafolioImg);
  });
}

function genPortafolio(portafolioImg)
{
  $.each(portafolioImg.portafolio,function(i,porta) //ciclo
    {
    $("#galeria-work").append(`<div class="cont-work `+porta.dataNombre+`">
                <div class="img-work">
                    <img src=`+porta.imagen+` alt="">
                </div>
                <div class="textos-work">
                    <h4>`+porta.titulo+`</h4>
                </div>
            </div>`);
    });
}

//FILTRO DE SELECCION PORTAFOLIO
$(function()
{
    $('.filter').click(function()
    {
        $(this).addClass('active').siblings().removeClass('active'); //con siblings selecciono a los hermanos de lo que hice click
        let valor = $(this).attr('data-nombre');
        if(valor == 'todos')
        {
            $('.cont-work').show('1000');
        }
        else
        {
            $('.cont-work').not('.'+ valor).hide('1000');
            $('.cont-work').filter('.'+valor).show('1000');
        }
    });


//FILTRO DE SCROLL DEL MENU
    let equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        portafolio = $('#portafolio').offset().top,
        experiencia = $('#experiencia').offset().top,
        contacto = $('#contacto').offset().top;
    
    window.addEventListener('resize', function()
    {
        equipo = $('#equipo').offset().top,
        servicio = $('#servicio').offset().top,
        portafolio = $('#portafolio').offset().top,
        experiencia = $('#experiencia').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace-inicio').on('click', function(e)
    {
        e.preventDefault();
        $('html , body').animate({
              scrollTop: 0
        },600);
    });
    $('#enlace-equipo').on('click', function(e)
    {
        e.preventDefault();
        $('html , body').animate({
              scrollTop: equipo-100
        },600);
    });
    $('#enlace-servicio').on('click', function(e)
    {
        e.preventDefault();
        $('html , body').animate({
              scrollTop: servicio-100
        },600);
    });
    $('#enlace-portafolio').on('click', function(e)
    {
        e.preventDefault();
        $('html , body').animate({
              scrollTop: portafolio-100
        },600);
    });
    $('#enlace-experiencia').on('click', function(e)
    {
        e.preventDefault();
        $('html , body').animate({
              scrollTop: experiencia-100
        },600);
    });
    $('#enlace-contacto').on('click', function(e)
    {
        e.preventDefault();
        $('html , body').animate({
              scrollTop: contacto-100
        },600);
    });
    $('#enlace-comenzar').on('click', function(e)
    {
        e.preventDefault();
        $('html , body').animate({
              scrollTop: equipo-100
        },600);
    });
});