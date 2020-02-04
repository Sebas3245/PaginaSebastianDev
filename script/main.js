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
  var x = window.matchMedia("(max-width: 500px)");

  let desplazamiento_actual = window.pageYOffset;

  if(desplazamiento_actual<=300)
  {
    nav.classList.remove('nav2');
    nav.classList.remove('nav3');
    nav.className = ('nav1');
    nav.style.transition='1s';
    menu.style.top = '80px'
    abrir.style.color = '#fff';
    if(x.matches)
    {
      $('.btn-header').css({'color':'black'});
    }
    else
    {
      $('.btn-header').css({'color':'white'});
    }
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

//FIX TEXTOS HEADER
window.setInterval(function()
{
  var txtG = document.getElementById('textosG');
  var txt1 = document.getElementById('t1-1');
  var txt2 = document.getElementById('t2-1');

  if(txt1.innerText == "SebastianDev")
  {
    txtG.style.alignItems = "flex-start";

    txt1.innerHTML = "DESARROLLO DE SOFTWARE";
    $(txt1).removeClass('t1-1');
    $(txt1).addClass('t1-2');

    txt2.innerHTML = "Somos un equipo de desarrollo de software en diferentes areas como Sitios web / Aplicaciones de Escritorio / Aplicaciones Moviles, segun lo requerido por el cliente.";
    $(txt2).removeClass('t2-1');
    $(txt2).addClass('t2-2');
  }
  else if(txt1.innerText == "DESARROLLO DE SOFTWARE")
  {
    txtG.style.alignItems = "center";

    txt1.innerHTML = "SebastianDev";
    $(txt1).removeClass('t1-2');
    $(txt1).addClass('t1-1');

    txt2.innerHTML = "Equipo de desarrollo";
    $(txt2).removeClass('t2-2');
    $(txt2).addClass('t2-1');
  }
},5200);

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
  menus();
});

//VENTANA MODAL
let flex = document.getElementById('flexModal');
document.getElementById("nombre").focus();

window.addEventListener('click', function(e)
{
  if(e.target == flex)
  {
    window.location = '#contacto'
    $('#modalMensaje').css({'transform':'scale(0,0)'}); 
  }
});

//VETANA MODAL MENSAJE
var msg = document.getElementById('enviarMsg')
function enviarMensaje()
{
  var param = {
    nombre: document.getElementById("nombre").value,
    telefono: document.getElementById("telefono").value,
    correo: document.getElementById("correo").value,
    mensaje: document.getElementById("mensaje").value
  };

  if(param.nombre == "") {
    document.getElementById("nombre").focus();
  }
  else{
    if(param.telefono == ""){
      document.getElementById("telefono").focus();
    }
    else{
      if(isNaN(param.telefono)){
        alert("El telefono debe llenarse con campos numericos");
      }
      else{
        if(param.correo == ""){
          document.getElementById("correo").focus();
        }
        else{
          if(param.mensaje == ""){
            document.getElementById("mensaje").focus();
          }
          else
          {
            $.ajax({
              type: "POST",
              url: "script/contactodb.php",
              data: param,
              success: function() 
              {

              }
            });
            $.ajax({
              type: "POST",
              url: "script/contactomail.php",
              data: param,
              success: function() 
              {
                $('#modalMensaje').css({'transform':'scale(1,1)'});
                document.getElementById("nombre").value="";
                document.getElementById("telefono").value="";
                document.getElementById("correo").value="";
                document.getElementById("mensaje").value="";
              }
            });
          }
        }
      }
    }
  }
}

$('#closeMensajeM').click(function() 
{ 
  $('#modalMensaje').css({'transform':'scale(0,0)'}); 
});