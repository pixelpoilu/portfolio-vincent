<?

session_start();
require_once('Connections/dixhuit.php');
if (!($indicemois)){	header("Location:$rep_actuel");}

  	$reqMail = "SELECT * FROM $tbl_concours where pseudo=\"$pseudo\" and pass=\"$pass\" ";
  	mysql_select_db($database_dixhuit, $dixhuit);
	$reqindMail = mysql_query($reqMail, $dixhuit) or die(mysql_error());
	$totalResultMail = mysql_num_rows($reqindMail);
  
  if (!($totalResultMail == '0')) {
  
		while ($detailsuser = mysql_fetch_array($reqindMail))
		{
		$IDuser = $detailsuser[id];
		$UpdateUser = "UPDATE $tbl_concours SET $indicenum='$indicemois' WHERE id=\"$IDuser\" ";
		$UpdateUser = mysql_db_query($database_dixhuit, $UpdateUser);

		// Texte de confirmation
		$Reponse = "Merci, votre nouvel indice a bien été enregistré.<br><br>$TutPassport<br><br>$BT_close";

		}

	}
 else if ($totalResultMail == '0') {
		$Reponse = "Impossible de trouver votre login et mot de passe<br><br>$BT_retry $BT_oublipass $BT_inscript $BT_close";
	}
?>
<html>
<head>
<title>::: Grand Jeux 10|18 . Vos Indices :::</title>
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
    <td align="center" valign="top" class="moyentext"><strong><? echo"$Reponse"; ?></strong></td>
  </tr>
</table>
</body>
</html>