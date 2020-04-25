<?php
require_once realpath(__DIR__ . "/vendor/autoload.php");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
// Load Composer's autoloader
require 'vendor/autoload.php';

// Get sensitive data from .env file
use Dotenv\Dotenv;
$dotenv  = Dotenv::createImmutable(__DIR__);
$dotenv->load();

// Form data from Http request
$name = $_GET["name"];
$from = $_GET["email"];
$subject = $_GET["subject"];
$text = $_GET["text"];
$phone = $_GET["phone"];


// Form data validation
$errors = [];
if($name == null || $name == ""){
  array_push($errors,"The name is required");
}elseif(strlen($name) > 150){
  array_push($errors,"The name is too long");
}
if($from == null || $from == ""){
  array_push($errors,"The email is required");
}
elseif(!preg_match("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/",$from)){
  array_push($errors,"The email is invalid");
}elseif(strlen($from) > 200){
  array_push($errors,"The email is too long");
}
if($phone !== null && $phone !== ""){
  if(!preg_match("/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/",$phone)){
    array_push($errors,"The phone number is invalid");
  }
}
if($subject == null || $subject == ""){
  array_push($errors,"The subject is required");
}elseif(strlen($name) > 150){
  array_push($errors,"The subject is too long");
}
if($text == null || $text == ""){
  array_push($errors,"The message is required");
}
if(count($errors) !== 0){
  $payload = array("errors"=>$errors,"isValid"=>false);
  print(json_encode($payload));
  return;
}else{
  $payload = array("errors"=>$errors,"isValid"=>true);
  print(json_encode($payload));
}
// Send the mail
// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);
  //Server settings
  $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
  $mail->isSMTP();                                            // Send using SMTP
  $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mail->Username   = getenv('EMAIL');                        // SMTP username
  $mail->Password   = getenv('PASSWORD');                     // SMTP password
  $mail->SMTPSecure = 'tls';                                  // TLS = 587 , SSL = 465
  $mail->Port       = 587;                                    
  //Recipients
  $mail->setFrom($from, 'Aster Electric');
  $mail->addAddress("nazim@ryanleulmi.com");
  $mail->addReplyTo($from, 'Requesting a quate');
  // Content
  $mail->isHTML(true);                                         // Set email format to HTML
  $mail->Subject = $subject;
  $mail->Body    = $text;
  $mail->send();









