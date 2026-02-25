<?php require_once('Connections/dixhuit.php');

	$reqtest = "SELECT * FROM $tbl_concours where pseudo=\"$pseudo\" or email =\"$email\"";
  	mysql_select_db($database_dixhuit, $dixhuit);
	$reqpseudo = mysql_query($reqtest, $dixhuit) or die(mysql_error());
	$totalResult1 = mysql_num_rows($reqpseudo);

  	
if ($totalResult1 == '0'){
	$txtlogin = "login ok";
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

//$insertSQL = sprintf("INSERT INTO $tbl_concours (id, civil, nom, prenom, rue_domicile, ville_domicile, code_postal_domicile, email, telephone_perso, naissance, pseudo, pass, indice_01, indice_02, indice_03, indice_04, indice_05, indice_06, indice_07, indice_08, indice_09, indice_10, indice_11, indice_12, indice_13, date_record, valid) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
$insertSQL = sprintf("INSERT INTO $tbl_concours (id, civil, nom, prenom, rue_domicile, ville_domicile, code_postal_domicile, email, telephone_perso, naissance, pseudo, pass, indice_01, indice_02, indice_03, indice_04, indice_05, indice_06, indice_07, indice_08, indice_09, indice_10, indice_11, indice_12, indice_13, profession, lecturean, livrepoche, genre1, genre2, genre3, genre4, genre5, genre6, genre7, genre8, genre9, genre10, genre11, lieuachat, Pocket, ed1018, FleuveNoir, PockJeun, date_record, valid) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",
                       GetSQLValueString($HTTP_POST_VARS['id'], "int"),
                       GetSQLValueString($HTTP_POST_VARS['civil'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['nom'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['prenom'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['rue_domicile'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['ville_domicile'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['code_postal_domicile'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['email'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['telephone_perso'], "text"),         
                       GetSQLValueString($HTTP_POST_VARS['naissance'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['pseudo'], "text"),         
                       GetSQLValueString($HTTP_POST_VARS['pass'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['indice_01'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['indice_02'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['indice_03'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['indice_04'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['indice_05'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['indice_06'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['indice_07'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['indice_08'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['indice_09'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['indice_10'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['indice_11'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['indice_12'], "text"),
                       GetSQLValueString($HTTP_POST_VARS['indice_13'], "text"),
						GetSQLValueString($HTTP_POST_VARS['profession'], "text"),
						GetSQLValueString($HTTP_POST_VARS['lecturean'], "text"),
						GetSQLValueString($HTTP_POST_VARS['livrepoche'], "text"),
							GetSQLValueString($HTTP_POST_VARS['genre1'], "text"),
							GetSQLValueString($HTTP_POST_VARS['genre2'], "text"),
							GetSQLValueString($HTTP_POST_VARS['genre3'], "text"),
							GetSQLValueString($HTTP_POST_VARS['genre4'], "text"),
							GetSQLValueString($HTTP_POST_VARS['genre5'], "text"),
							GetSQLValueString($HTTP_POST_VARS['genre6'], "text"),
							GetSQLValueString($HTTP_POST_VARS['genre7'], "text"),
							GetSQLValueString($HTTP_POST_VARS['genre8'], "text"),
							GetSQLValueString($HTTP_POST_VARS['genre9'], "text"),
							GetSQLValueString($HTTP_POST_VARS['genre10'], "text"),
							GetSQLValueString($HTTP_POST_VARS['genre11'], "text"),
						GetSQLValueString($HTTP_POST_VARS['lieuachat'], "text"),
						GetSQLValueString($HTTP_POST_VARS['Pocket'], "text"),
						GetSQLValueString($HTTP_POST_VARS['ed1018'], "text"),
						GetSQLValueString($HTTP_POST_VARS['FleuveNoir'], "text"),
						GetSQLValueString($HTTP_POST_VARS['PockJeun'], "text"),
					   
                       GetSQLValueString($HTTP_POST_VARS['date_record'], "date"),
                       GetSQLValueString($HTTP_POST_VARS['valid'], "int"));



  mysql_select_db($database_dixhuit, $dixhuit);
  $Result1 = mysql_query($insertSQL, $dixhuit) or die(mysql_error());
	$txtlogin = "Merci, vos informations ont bien été enregistrées.<br>Revenez découvrir les autres séries Grands détectives et jouez tous les mois !"; 
	$txtrecord = "<br><br>$TutPassport<br>$BT_close";
}
else if (!($totalResult1 == '0')){
	$txtlogin = "Ce login est déjà utilisé ou vous avez déjà été enregistré.<br>";
	$txtrecord = "$BT_revenir $BT_close";
}
?>
<html>
<head>
<title>::: Grand Jeux 10|18 . Formulaire d'inscription :::</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="style.css" rel="stylesheet" type="text/css">
<script language="JavaScript1.2" src="js_roll_over.js"></script>
</HEAD>
<body bgcolor="#933F03" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<?php include("bandeau.php"); ?>
<table border="0" cellpadding="0" cellspacing="0">
  <tr> 
    <td rowspan="2" valign="top"><img src="img/inscript_illust.gif" width="227" height="415"></td>
    <td><img src="img/vide.gif" width="40" height="11"></td>
    <td valign="middle" class="moyentext"><img src="img/vide.gif" width="502" height="11"></td>
    <td rowspan="2" valign="middle" class="moyentext"><img src="img/vide.gif" width="9" height="50"></td>
  </tr>
  <tr>
    <td><img src="img/vide.gif" width="40" height="94"></td>
    <td align="center" valign="top" class="moyentext"><strong><?php echo"$txtlogin $txtrecord"; ?></strong></td>
  </tr>
</table>
</body>
</html>