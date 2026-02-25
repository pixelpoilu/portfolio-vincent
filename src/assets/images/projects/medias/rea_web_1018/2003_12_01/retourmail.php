<?
require_once('Connections/dixhuit.php');

  	$reqMail = "SELECT * FROM $tbl_concours where email=\"$passemail\" ";
  	mysql_select_db($database_dixhuit, $dixhuit);
	$reqindMail = mysql_query($reqMail, $dixhuit) or die(mysql_error());
	$totalResultMail = mysql_num_rows($reqindMail);
  
  if (!($totalResultMail == '0')) {
			    while ($MailUser = mysql_fetch_array($reqindMail)){
				$Reponse = "Vos coordonées et mot de passe vous ont été envoyées par mail<br><br> $BT_close";
				$F_TO = $MailUser[email];
				$F_SUBJECT = "Grand jeux 10 18 : Vos Coordonées";
				$linetot1 = "votre pseudo : $MailUser[pseudo]<br>votre pass : $MailUser[pass]<br>$MailUser[nom]$MailUser[prenom]$MailUser[rue_domicile]$MailUser[ville_domicile]$MailUser[code_postal_domicile]<br>$MailUser[email]<br>Liste des indices :<br>1 - $MailUser[indice_01]<br>2 - $MailUser[indice_02]<br>3 - $MailUser[indice_03]<br>4 - $MailUser[indice_04]<br>5 - $MailUser[indice_05]<br>6 - $MailUser[indice_06]<br>7 - $MailUser[indice_07]<br>8 - $MailUser[indice_08]9 - $MailUser[indice_09]<br>10 - $MailUser[indice_10]<br>11 - $MailUser[indice_11]<br>12 - $MailUser[indice_12]<br>$MailUser[indice_13]";
				mail($F_TO, $F_SUBJECT, $linetot1, "From: $email \nMime-Version: 1.0\nContent-Type: text/html; charset=ISO-8859-1\nContent-Transfer-Encoding: 7bit"); 

				}
	}
 else if ($totalResultMail == '0') {
	$Reponse = "Vous n'êtes pas encore inscrit<br><br>$BT_revenir $BT_close";
	}
?>
<html>
<head>
<title>::: Grand Jeux 10|18 . Mot de passe perdu :::</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script language="JavaScript1.2" src="js_roll_over.js"></script>
<link href="style.css" rel="stylesheet" type="text/css">
</HEAD>
<body bgcolor="#933F03" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<?php include("bandeau.php"); ?>
<table border="0" cellpadding="0" cellspacing="0">
  <tr> 
    <td rowspan="2" valign="top"><img src="img/vosinfos_illust.gif" width="227" height="416"></td>
    <td><img src="img/vide.gif" width="40" height="11"></td>
    <td valign="middle" class="moyentext"><img src="img/vide.gif" width="502" height="11"></td>
    <td rowspan="2" valign="middle" class="moyentext"><img src="img/vide.gif" width="9" height="50"></td>
  </tr>
  <tr>
    <td><img src="img/vide.gif" width="40" height="94"></td>
    <td valign="top" class="moyentext"><strong><? echo"$Reponse"; ?></strong></td>
  </tr>
</table>
</body>
</html>