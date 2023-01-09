//ALMACENAR EN PORTAFLIO
$(document).ready(function () {
  getPortafolio();
});

var portafolioImg;

function getPortafolio() {
  $.getJSON("script/portafolio.json", function (pjson) {
    portafolioImg = pjson;
    genPortafolio(portafolioImg);
  });
}

var swiper;

function genPortafolio(portafolioImg) {
  let hash = {};
  let setImages = portafolioImg.portafolio.filter((port) =>
    hash[port.titulo] ? false : (hash[port.titulo] = true)
  );

  setImages.map((porta, i) => {
    $("#galeria-work").append(
      `<div class="cont-work ` +
        porta.dataNombre +
        `">
      <div class="img-work">
        <img src="${porta.imagen}" id="${i}" dataTitle="${porta.titulo}" alt="">
      </div>
      <div class="textos-work">
        <a target="_blank" ${porta.link ? "href='" + porta.link + "'" : ""} >` +
        porta.titulo +
        `</a>
      </div>
    </div>`
    );
  });

  //Portafolio click
  var gallery = document
    .getElementById("galeria-work")
    .getElementsByTagName("img");

  for (var i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener("click", function () {
      var dataTitle = this.getAttribute("dataTitle");

      let imgs = portafolioImg.portafolio.filter(
        (img) => img.titulo === dataTitle
      );

      if (typeof swiper === "object") {
        swiper.destroy(true, false);
        swiper = undefined;
        document.getElementById("imagenes-swiper").innerHTML = "";
      }

      imgs.map((image, i) => {
        $("#imagenes-swiper").append(`<div class="swiper-slide slide-${i}">
          <img src="${image.imagen}">
        </div>`);
      });

      swiper = new Swiper(".swiper-container", {
        effect: "cube",
        grabCursor: true,
        centeredSlides: true,
        updateOnWindowResize: true,
        slidesPerView: "auto",

        //MANEJAR CON FLECHAS
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },

        //PAGINACION
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        // NAVEGACION
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      location.href = "#miModalPort";
    });
  }
}

//CERRAR PORTAFOLIO AL HACER CLICK EN CUALQUIER PARTE
let flexPort = document.getElementById("flexModalPort");

window.addEventListener("click", function (e) {
  if (e.target == flexPort) {
    window.location = "#portafolio";
    swiper.destroy(true, false);
  }
});

//FILTRO DE SELECCION PORTAFOLIO
$(function () {
  $(".filter").click(function () {
    $(this).addClass("active").siblings().removeClass("active"); //con siblings selecciono a los hermanos de lo que hice click
    let valor = $(this).attr("data-nombre");
    if (valor == "todos") {
      $(".cont-work").show("1000");
    } else {
      $(".cont-work")
        .not("." + valor)
        .hide("1000");
      $(".cont-work")
        .filter("." + valor)
        .show("1000");
    }
  });

  //FILTRO DE SCROLL DEL MENU

  /* $('#enlace-inicio').on('click', function(e)
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
            scrollTop: $('#equipo').offset().top-100
      },600);
  });
  $('#enlace-servicio').on('click', function(e)
  {
      e.preventDefault();
      $('html , body').animate({
            scrollTop: $('#servicio').offset().top-100
      },600);
  });
  $('#enlace-portafolio').on('click', function(e)
  {
      e.preventDefault();
      $('html , body').animate({
            scrollTop: $('#portafolio').offset().top-100
      },600);
  });
  $('#enlace-experiencia').on('click', function(e)
  {
      e.preventDefault();
      $('html , body').animate({
            scrollTop: $('#experiencia').offset().top-100
      },600);
  });
  $('#enlace-contacto').on('click', function(e)
  {
      e.preventDefault();
      $('html , body').animate({
            scrollTop: $('#contacto').offset().top-100
      },600);
  });
  $('#enlace-comenzar').on('click', function(e)
  {
      e.preventDefault();
      $('html , body').animate({
            scrollTop: $('#equipo').offset().top-100
      },600);
  }); */
});