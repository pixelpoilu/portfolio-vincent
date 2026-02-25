<?
require_once('Connections/dixhuit.php');
	$Reponse = "<br><br>$BT_close";
?>
<html>
<head>
<title>::: Grand Jeux 10|18 . Liste des gagnants :::</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script language="JavaScript1.2" src="js_roll_over.js"></script>
<link href="style.css" rel="stylesheet" type="text/css">
<style type="text/css">
<!--
.BigTtext {

	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-size: 18px;
	color: #E9E9E9;
}
-->
</style>
<style type="text/css">
<!--
.MoyenText {

	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-size: 12px;
	color: #E9E9E9;
}
-->
</style>
</HEAD>
<body bgcolor="#933F03" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<?php include("bandeau.php"); ?>
<table border="0" cellpadding="0" cellspacing="0">
  <tr> 
    <td rowspan="2" valign="top"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="227" height="415">
        <param name="movie" value="img/winner_list.swf">
        <param name=quality value=high><param name="BGCOLOR" value="">
        <embed src="img/winner_list.swf" width="227" height="415" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" bgcolor=""></embed> 
      </object></td>
    <td><img src="img/vide.gif" width="40" height="11"></td>
    <td valign="middle" class="moyentext"><img src="img/vide.gif" width="502" height="11"></td>
    <td rowspan="2" valign="middle" class="moyentext"><img src="img/vide.gif" width="5" height="50"></td>
  </tr>
  <tr>
    <td><img src="img/vide.gif" width="40" height="94"></td>
    <td align="center" valign="top" class="BigTtext"><strong>Liste des gagnants 
      du Jeu d'Ao&ucirc;t</strong><br>
      <span class="MoyenText"><strong>La liste sera consultable tr&egrave;s prochainement...</strong></span><br>
      <br>
      <table width="500" border="0" cellpadding="1" cellspacing="0">
        <tr> 
          <td><img src="img/wingold.gif" width="500" height="70"></td>
        </tr>
        <tr> 
          <td><table border="0" cellpadding="5" cellspacing="0">
              <tr class="MoyenText"> 
                <td><img src="img/vide.gif" width="29" height="20"></td>
                <td><strong>Le tirage au sort est en cours...</strong></td>
              </tr>
            </table></td>
        </tr>
      </table>
      <br>
      <table width="500" border="0" cellpadding="1" cellspacing="0">
        <tr> 
          <td><img src="img/winbronze.gif" width="500" height="70"></td>
        </tr>
        <tr> 
          <td><table border="0" cellpadding="5" cellspacing="0">
              <tr> 
                <td><img src="img/vide.gif" width="29" height="20"></td>
                <td colspan="3" class="MoyenText">Le tirage au sort est en cours...</td>
                <td valign="bottom" class="formula"><? echo"$Reponse"; ?></td>
              </tr>
            </table></td>
        </tr>
      </table></td>
  </tr>
</table>
</body>
</html>