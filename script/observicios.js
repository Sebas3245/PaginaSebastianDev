window.addEventListener('load', function()
{
  $('#onload').fadeOut();
  $('body').removeClass('hidden');
});

//ESCOJER SERVICIO

var servicioscontratar =[];
servicioscontratar[0] = "App de Escritorio";
servicioscontratar[1] = "Sitio Web";
servicioscontratar[2] = "App Movil";

$(".tabla a").click(function() { 
  var servicioes = this.getAttribute('tipo-contrato');
  console.log(servicioes);
  var serviciocontratado;

  for(var i = 0; i<servicioscontratar.length; i++)
  {
    if(servicioes == servicioscontratar[i])
    {
      serviciocontratado = servicioscontratar[i];
    }
  }
  var textoEnvCorreo = document.getElementById('textoEnvCorreo');
  textoEnvCorreo.innerHTML = "Ingrese su correo para enviarle informacion acerca del servicio: " + serviciocontratado;
});

//VENTANA MODAL
let flex = document.getElementById('flexModal');

window.addEventListener('click', function(e)
{
  if(e.target == flex)
  {
    window.location = '#tablascont'
    $('#contentModal').css({'transform':'scale(0,-100%)'}); 
  }
});

var envCorreo = document.getElementById('envCorreo');
envCorreo.addEventListener('click', function(){
  var parame = {
    correo: document.getElementById("correotxt").value
  };
  if(parame.correo === ""){
    document.getElementById("correotxt").focus();
  }else{
    $.ajax({
      type: "POST",
      url: "script/sendtocorreo.php",
      data: parame,
      success: function() {
        alert("Correo enviado exitosamente")
      }
    });
  }
});