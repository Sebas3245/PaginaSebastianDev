<?php
  $destino = $_POST["correo"];
  $contenido = "Hola esta funcion se encuentra en desarrollo, por lo tanto aun no hay especificaciones sobre el servicio que deseas contratar";
  $header = "From: SebastianDev"  . "\r\n";
  $header.= "Reply-To: jsebastianlara3245@gmail.com" . "\r\n";
  $header.= "X-Mailer: PHP/" . phpversion();
  mail($destino, "Contratacion de servicio SebastianDev", $contenido, $header);
?>