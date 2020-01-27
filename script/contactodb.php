<?php
  $nombre = $_POST["nombre"];
  $telefono = $_POST["telefono"];
  $correo = $_POST["correo"];
  $mensaje = $_POST["mensaje"];
  require("conexion.php");
  $sql = "INSERT INTO clientes (nombres, telefono, correo, mensaje) VALUES ('$nombre','$telefono','$correo','$mensaje')";
  mysqli_query($connection, $sql);
?>