<?php 

$_POST = json_decode( file_get_contents("php://input"), true );

$name = $_POST['name'];;
$email = $_POST['email'];;
$text = $_POST['text'];;

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'kartemiy678@gmail.com';                 // Наш логин
$mail->Password = 'artemkli81';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('kartemiy678@gmail.com', 'Артемий Климашко');   // От кого письмо 
$mail->addAddress('dordge45@gmail.com');     // Add a recipient

$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = 'Пользователь оставил данные <br> <br>
                  Имя: ' . $name . ' <br>
                  email: ' . $email . ' <br>
                  Текст: ' . $text . ' <br>';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>