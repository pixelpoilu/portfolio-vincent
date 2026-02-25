<?php
//		echo "&messretour=\"prob de connexion\"";
require_once('Connections/dixhuit.php');
  	$reqMail = "SELECT * FROM $tbl_concours where id=\"$id\" ";
  	mysql_select_db($database_dixhuit, $dixhuit);
	$reqindMail = mysql_query($reqMail, $dixhuit) or die(mysql_error());
	$totalResultMail = mysql_num_rows($reqindMail);
	
  if (!($totalResultMail == '0')) {
  		$UpdateUser = "UPDATE $tbl_concours SET indice_13='OK' WHERE id=\"$id\" ";
		$UpdateUser = mysql_db_query($database_dixhuit, $UpdateUser);
		$messageretour ="gagne";

/*
			    while ($MailUser = mysql_fetch_array($reqindMail)){
				$Reponse = "Vos coordonées et mot de passe vous ont été envoyées par mail<br><br> $BT_close";
				$F_TO = $MailUser[email];
				$F_SUBJECT = "Grand jeux 10 18 : Vos Coordonées";
				$linetot1 = "votre pseudo : $MailUser[pseudo]<br>votre pass : $MailUser[pass]<br>$MailUser[nom]$MailUser[prenom]$MailUser[rue_domicile]$MailUser[ville_domicile]$MailUser[code_postal_domicile]<br>$MailUser[email]<br>Liste des indices :<br>1 - $MailUser[indice_01]<br>2 - $MailUser[indice_02]<br>3 - $MailUser[indice_03]<br>4 - $MailUser[indice_04]<br>5 - $MailUser[indice_05]<br>6 - $MailUser[indice_06]<br>7 - $MailUser[indice_07]<br>8 - $MailUser[indice_08]9 - $MailUser[indice_09]<br>10 - $MailUser[indice_10]<br>11 - $MailUser[indice_11]<br>12 - $MailUser[indice_12]<br>$MailUser[indice_13]";
				mail($F_TO, $F_SUBJECT, $linetot1, "From: $email \nMime-Version: 1.0\nContent-Type: text/html; charset=ISO-8859-1\nContent-Transfer-Encoding: 7bit"); 
*/
				}
 else if ($totalResultMail == '0') {
		$messageretour ="prob de connexion";

	}
		echo "&messretour=".$messageretour;
?>
