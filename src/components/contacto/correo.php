<?php
    $destinatario = 'leguizamonbenjamin0@gmail.com';
    $nombre = $_POST['name'];
    $asunto = $_POST['asunto'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    $header = 'Enviado desde el portfolio de Benjamin Leguizamon';
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

    mail($destinatario, $asunto, $mensajeCompleto, $header);

?>