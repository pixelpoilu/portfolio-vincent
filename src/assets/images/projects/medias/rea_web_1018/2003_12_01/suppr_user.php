<?php require_once('Connections/dixhuit.php');

		$SupprUsr = "DELETE FROM $tbl_concours WHERE id=\"$IDuser\" ";
		$SupprUsr = mysql_db_query($database_dixhuit, $SupprUsr);

		// Texte de confirmation
		$txtlogin = "Merci, votre enregistrement a bien été supprimé<br><br>$BT_close";


?>
<html>
<head>
<title>::: Grand Jeux 10|18 . Formulaire d'inscription :::</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link rel="stylesheet" href="style.css" type="text/css">
<script language="JavaScript1.2" src="js_roll_over.js"></script>
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
    <td valign="top" class="moyentext"><strong><?php echo"$txtlogin"; ?></strong></td>
  </tr>
</table>
</body>
</html>