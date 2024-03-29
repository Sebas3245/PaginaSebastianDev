//PRE-LOADER
window.addEventListener('load', function () {
  $('#onload').fadeOut();
  $('body').removeClass('hidden');
});

//ALMACENAR EN GALERIA DE CERTIFICADOS
$(document).ready(function () {
  getCertificados();
});

var certificadoImg;

function getCertificados() {
  $.getJSON("script/certificados.json", function (cjson) {
    certificadoImg = cjson;
    genGaleriaCert(certificadoImg);
  });
}

var swiper;
function genGaleriaCert(certificadoImg) {
  $.each(certificadoImg.certificados, function (i, cert) //ciclo
  {
    $("#gallery-container").append(`<div class="gallery-item mover" tipo-mov=` + cert.animacion + `>
      <img src=`+ cert.imagen + ` id=` + i + ` class="gallery-img">
      <span>Realizado: `+ cert.fecha + `</span>
    </div>`);
    $('#imagenes-swiper').append(`<div class="swiper-slide slide-` + i + `">
      <img src=`+ cert.imagen + `>
    </div>`);
  });

  //GALERIA
  var gallery = document.getElementById('gallery-container').getElementsByTagName('img');
  for (var i = 0; i < gallery.length; i++) {
    gallery[i].addEventListener('click', function () {
      var id = this.getAttribute('id');

      swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        initialSlide: id,
        updateOnWindowResize: true,
        slidesPerView: 'auto',
        //loop: true, 

        //MANEJAR CON FLECHAS
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },

        //PAGINACION
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        // NAVEGACION
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

      location.href = "#modal";
    });
  }
}


//CERRAR GALERIA AL HACER CLICK EN CUALQUIER PARTE
let flex = document.getElementById('flexModal');

window.addEventListener('click', function (e) {
  if (e.target == flex) {
    window.location = '#'
    swiper.destroy(true, false);
  }
});


// ANIMACION 
window.addEventListener('load', function () {
  aparecerElementos();
});

window.addEventListener('scroll', function () {
  aparecerElementos();
});

let mover = document.getElementsByClassName('mover');

function aparecerElementos() {
  let desplazamiento_actual = window.pageYOffset;

  for (var i = 0; i < mover.length; i++) {
    var tipoMov = $(mover[i]).attr('tipo-mov');

    if (desplazamiento_actual < mover[i].offsetTop - 700) {
      mover[i].style.removeProperty('animation');
      mover[i].style.opacity = '0';
    }

    if (desplazamiento_actual > mover[i].offsetTop - 500) {
      mover[i].style.animation = "" + tipoMov + " 1s ease-out";
      mover[i].style.opacity = '1';
    }
  }
}

//SCROLL COMENZAR
$('#enlace-comenzar').on('click', function (e) {
  e.preventDefault();
  $('html , body').animate({
    scrollTop: $('.gallery-item').offset().top - 20
  }, 600);
});