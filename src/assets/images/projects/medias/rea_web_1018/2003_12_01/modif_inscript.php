<? require_once('Connections/dixhuit.php');
	function GetSQLValueString($theValue, $theType, $theDefinedValue = "", $theNotDefinedValue = "") {
		$theValue = (!get_magic_quotes_gpc()) ? addslashes($theValue) : $theValue;
			  switch ($theType) {
					    case "text":
					      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
					      break;    
					    case "long":
					    case "int":
					      $theValue = ($theValue != "") ? intval($theValue) : "NULL";
					      break;
					    case "double":
					      $theValue = ($theValue != "") ? "'" . doubleval($theValue) . "'" : "NULL";
					      break;
					    case "date":
					      $theValue = ($theValue != "") ? "'" . $theValue . "'" : "NULL";
					      break;
					    case "defined":
					      $theValue = ($theValue != "") ? $theDefinedValue : $theNotDefinedValue;
					      break;
						}
		return $theValue;
	}
	
	
  $updateSQL = sprintf("UPDATE $tbl_concours SET civil=%s, nom=%s, prenom=%s, rue_domicile=%s, ville_domicile=%s, code_postal_domicile=%s, email=%s, telephone_perso=%s, pseudo=%s, pass=%s WHERE id=$IDuser",
			GetSQLValueString($HTTP_POST_VARS['civil'], "text"),
			GetSQLValueString($HTTP_POST_VARS['nom'], "text"),
			GetSQLValueString($HTTP_POST_VARS['prenom'], "text"),
			GetSQLValueString($HTTP_POST_VARS['rue_domicile'], "text"),
			GetSQLValueString($HTTP_POST_VARS['ville_domicile'], "text"),
			GetSQLValueString($HTTP_POST_VARS['code_postal_domicile'], "text"),
			GetSQLValueString($HTTP_POST_VARS['email'], "text"),
			GetSQLValueString($HTTP_POST_VARS['telephone_perso'], "text"),
			GetSQLValueString($HTTP_POST_VARS['pseudo'], "text"),
			GetSQLValueString($HTTP_POST_VARS['pass'], "text"));
			
  mysql_select_db($database_dixhuit, $dixhuit);
  $Result1 = mysql_query($updateSQL, $dixhuit) or die(mysql_error());
		// Texte de confirmation
		$txtlogin = "Merci, vos modifications ont bien été enregistrées.<br><br>$BT_close";


?>
<html>
<head>
<title>::: Grand Jeux 10|18 . Vos informations :::</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="style.css" rel="stylesheet" type="text/css">
<script language="JavaScript1.2" src="js_roll_over.js"></script>
</HEAD>
<body bgcolor="#933F03" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<?php include("bandeau.php"); ?>
<table border="0" cellpadding="0" cellspacing="0">
  <tr> 
    <td rowspan="2" valign="top"><img src="img/vosinfos_illust.gif" width="227" height="416"></td>
    <td><img src="img/vide.gif" width="40" height="11"></td>
    <td valign="top" class="moyentext"><img src="img/vide.gif" width="502" height="11"></td>
    <td rowspan="2" valign="middle" class="moyentext"><img src="img/vide.gif" width="9" height="50"></td>
  </tr>
  <tr>
    <td><img src="img/vide.gif" width="40" height="94"></td>
    <td valign="top" class="moyentext"><strong><?php echo"$txtlogin"; ?></strong></td>
  </tr>
</table>
  
<img src="img/vide.gif" width="780" height="18"><br>
</body>
</html>