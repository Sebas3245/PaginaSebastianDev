<?php
  $destino = "jsebastianlara3245@gmail.com";
  $nombre = $_POST["nombre"];
  $telefono = $_POST["telefono"];
  $correo = $_POST["correo"];
  $mensaje = $_POST["mensaje"];
  $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
  $header = "From: "+$correo . "\r\n";
  mail($destino, "Contacto SebastianDev", $contenido, $header);
?>