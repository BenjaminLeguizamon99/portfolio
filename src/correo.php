<?php
    $destinatario = 'leguizamonbenjamin0@gmail.com';
    $nombre = $_POST['name'];
    $asunto = $_POST['asunto'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $header = 'Enviado desde el Portfolio de Benjamin Leguizamon';
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre . $apellido;

    mail($destinatario, $asunto, $mensajeCompleto, $header);
    echo "<script>alert('Correo Enviado Exitosamente')</script>";

?>