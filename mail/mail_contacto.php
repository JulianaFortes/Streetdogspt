<?php
$para = "julianasameiro@gmail.com";
$name = $_POST['name'];
$assunto = "Mensagem enviada a partir de StreetDogspt.com";
$email = $_POST['email'];


//Definição da  mensagem que vai ser enviado no e-mail
$message = "<strong>Nome:  </strong>".$name;
$message .= "<br>  <strong>Mensagem: </strong>".$_POST['message'];


$headers =  "Content-Type:text/html; charset=UTF-8\n";
$headers .= "From: ".$email ."\n"; //Vai ser //mostrado que  o email partiu deste email e seguido do nome
$headers .= "X-Sender:  <sistema@dominio.com.br>\n"; //email do servidor //que enviou
$headers .= "X-Mailer: PHP  v".phpversion()."\n";
$headers .= "X-IP:  ".$_SERVER['REMOTE_ADDR']."\n";
$headers .= "MIME-Version: 1.0\n";

mail($para, $assunto, $message, $headers);  //função que faz o envio do email.;

?>

<!DOCTYPE html>
<html lang="pt-br">
    <head>
      <link rel="shortcut icon" href="img/brick_logo.png"  />
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>StreetDogs | Resgate Animal</title>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <link rel="stylesheet" href="../css/style.css">
    </head>
    <body>
      <div class="container" style="text-align: center">
        <div class="jumbotron" style="background-image: none; margin-top: 10%">
          <h1>Mensagem enviada com sucesso.</h1>
          <h2>Obrigado pelo seu contacto.</h2>
          <a href="../index.html"><br><button class="btn btn-default btn-lg btn-orange">Voltar</button></a>
        </div>
      </div>




    </body>
</html>
