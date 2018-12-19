<?php
if($_POST){
	
$fname = $_POST['name'];
$lname = $_POST['surname'];
$email = $_POST['email'];
$message = $_POST['mssg'];
$date = $_POST['date'];
$usr_time = $_POST['usr_time'];
$personer = $_POST['personer'];
$tel = $_POST['tel'];
/**
 * This example shows making an SMTP connection with authentication.
 */
//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Etc/UTC');
require 'booktable/requirebooking.php';
//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = "send.one.com";
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 25;
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = "bokabord@restaurangkina.com";
//Password to use for SMTP authentication
$mail->Password = "159159";
//Set who the message is to be sent from
$mail->setFrom('bokabord@restaurangkina.com', 'Bordsbokning');
//Set an alternative reply-to address
$mail->addReplyTo('bokabord@restaurangkina.com', 'First Last');
//Set who the message is to be sent to
$mail->addAddress('bokabord@restaurangkina.com', 'Restaurang Kina');
//Set the subject line
$mail->Subject = 'Onlinebokning';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->Body = "Meddelande: $message <br>Namn: $fname $lname <br>E-post: $email<br> Telefonnummer: $tel <br>Datum: $date<br>Tid: $usr_time<br>Antal personer: $personer";
//Replace the plain text body with one created manually
$mail->AltBody = 'Tack för din bokning!';
//Attach an image file
$mail->addAttachment('');
//send the message, check for errors
if (!$mail->send()) {
    echo "Kunde inte skickas: " . $mail->ErrorInfo;
} else {
  echo '<div class="alert alert-success" id="success-alert" role="alert" style="font-size: 2em; text-align: center;" >
<button type="button" class="close" data-dismiss="alert">x</button>
    <strong>Tack för din bokning! <i class="fas fa-check-circle"></i></strong>
	<blockquote class="blockquote">
  <p class="mb-0">Ett bekräftelsemail kommer att skickas.</p>
</blockquote>
	</div>
	
	';
}

}
?>