<?php
  $destino = "jsebastianlara3245@gmail.com";
  $nombre = $_POST["nombre"];
  $telefono = $_POST["telefono"];
  $correo = $_POST["correo"];
  $mensaje = $_POST["mensaje"];
  $contenido = "Nombre: " . $nombre . "\nCorreo: " . $correo . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
  mail($destino, "Contacto SebastianDev", $contenido);
  header("Location:../index.html");
?>