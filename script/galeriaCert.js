//PRE-LOADER
window.addEventListener('load', function()
{
  $('#onload').fadeOut();
  $('body').removeClass('hidden');
});

//GALERIA
var gallery = document.getElementById('gallery-container').getElementsByTagName('img');
var swiper;

for(var i = 0; i < gallery.length;i++ )
{
    gallery[i].addEventListener('click', function()
    {
        var id = this.getAttribute('id');
        console.log(id);
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
          },
   
          // NAVEGACION
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
        });

        location.href="#modal";
    });
}
//CERRAR GALERIA AL HACER CLICK EN CUALQUIER PARTE
let flex = document.getElementById('flexModal');

window.addEventListener('click', function(e)
{
  if(e.target == flex)
  {
    window.location = '#'
    swiper.destroy(true, false);
  }
});


// ANIMACION 
window.addEventListener('load', function()
{
  aparecerElementos();
});

window.addEventListener('scroll', function()
{
  aparecerElementos();
});

let mover = document.getElementsByClassName('mover');

function aparecerElementos()
{
  let desplazamiento_actual = window.pageYOffset;

  for(var i=0;i<mover.length;i++)
  {
    var tipoMov = $(mover[i]).attr('tipo-mov');

    if(desplazamiento_actual<mover[i].offsetTop-700)
    {
      mover[i].style.removeProperty('animation');
      mover[i].style.opacity = '0';
    }

    if(desplazamiento_actual > mover[i].offsetTop - 500)
    {
      mover[i].style.animation = ""+tipoMov+" 1s ease-out";
      mover[i].style.opacity = '1';
    }
  }
}