<?php
  $destino = "jsebastianlara3245@gmail.com";
  $nombre = $_POST["nombre"];
  $telefono = $_POST["telefono"];
  $correo = $_POST["correo"];
  $mensaje = $_POST["mensaje"];
  $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
  $header = "From: SebastianDev"  . "\r\n";
  $header.= "Reply-To: ContactoDev@noreply.com" . "\r\n";
  $header.= "X-Mailer: PHP/" . phpversion();
  mail($destino, "Contacto SebastianDev", $contenido, $header);
?>