<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../PHPMailer/PHPMailer-master/src/Exception.php';
require '../PHPMailer/PHPMailer-master/src/PHPMailer.php';
require '../PHPMailer/PHPMailer-master/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.example.com'; 
    $mail->SMTPAuth = true;
    $mail->Username = 'led.panels@mail.ru'; 
    $mail->Password = 'sU-u31*)'; 
    $mail->SMTPSecure = 'tls';
    $mail->Port = 587;

    $mail->setFrom('ваш_почтовый_адрес@example.com', 'Ваше имя');
    $mail->addAddress('адрес_получателя@example.com');
    $mail->isHTML(true);
    $mail->Subject = 'Тема вашего письма';
    $mail->Body    = 'Текст вашего сообщения';

    $mail->send();
    echo 'Письмо отправлено!';
} catch (Exception $e) {
    echo "Ошибка при отправке письма: {$mail->ErrorInfo}";
}
?>
