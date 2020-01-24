//VARIABLES

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let mover = document.getElementsByClassName('mover');
let cerrado = true;

//PRE-LOADER
window.addEventListener('load', function()
{
  $('#onload').fadeOut();
  $('body').removeClass('hidden');
  menus();
});

//MENU Y ANIMACIONES CON SCROLL
window.addEventListener('scroll', function()
{
  menus();
  aparecerElementos();
});

//HEADER NAV BACKGROUND
function menus()
{
  let desplazamiento_actual = window.pageYOffset;

    if(desplazamiento_actual<=300)
    {
      nav.classList.remove('nav2');
      nav.classList.remove('nav3');
      nav.className = ('nav1');
      nav.style.transition='1s';
      menu.style.top = '80px'
      abrir.style.color = '#fff';
      $('.btn-header').css({'color':'white'});
      $('.btn-contact').css({'color':'rgb(9, 73, 78)','background':'white'});
    }
    else if(desplazamiento_actual>300 && desplazamiento_actual<=900)
    {
      nav.classList.remove('nav1');
      nav.classList.remove('nav3');
      nav.className = ('nav2');
      menu.style.top = '100px';
      abrir.style.color = '#000';
      $('.btn-header').css({'color':'black'});
      $('.btn-contact').css({'color':'white','background':'black'});
    }
    else
    {
      nav.classList.remove('nav1');
      nav.classList.remove('nav2');
      nav.className = ('nav3');
      menu.style.top = '100px';
      abrir.style.color = '#000';
      $('.btn-header').css({'color':'black'});
      $('.btn-contact').css({'color':'white','background':'black'});
    }
}

// ANIMACION ELEMENTOS
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

    if(desplazamiento_actual > mover[i].offsetTop - 600)
    {
      mover[i].style.animation = ""+tipoMov+" 1s ease-out";
      mover[i].style.opacity = '1';
    }
  }
}

// ABRIR MENU RESPONSIVE

abrir.addEventListener('click', function()
{
  apertura();
});

function apertura()
{
  if(cerrado)//si es true
  {
    menu.style.width = '70vw';
    cerrado=false;
  }
  else
  {
    menu.style.width = '0%';
    menu.style.overflow = 'hidden';
    cerrado=true;
  }
}

//CERRAR MENU RESPONSIVE AL HACER CLICK EN CUALQUIER PARTE
window.addEventListener('click',function(e)
{
  if(cerrado==false)
  {
    let span = document.querySelector('span');
    if(e.target !== span && e.target !== abrir)
    {
      menu.style.width = '0%';
      menu.style.overflow = 'hidden';
      cerrado = true;
    }
  }
});

//CERRAR MENU RESPONSIVE CON RESIZE
window.addEventListener('resize', function()
{
  if(this.screen.width>=700)
  {
    cerrado=true;
    menu.style.removeProperty('overflow');
    menu.style.removeProperty('width');
  }
});

//VENTANA MODAL
let modal = document.getElementById('miModal');
let flex = document.getElementById('flexModal');
let abrirModal = document.getElementById('abrirModal');
let cerrarModal = document.getElementById('close')

abrirModal.addEventListener('click', function() 
{  
  modal.style.display = 'block';
});

cerrarModal.addEventListener('click', function() 
{  
  modal.style.display = 'none';
});

window.addEventListener('click', function(e)
{
  if(e.target == flex)
  {
    modal.style.display = 'none';
  }
});

