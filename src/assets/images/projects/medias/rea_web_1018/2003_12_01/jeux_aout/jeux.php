<?
//Code à réutiliser pour chaque mois
if ($verif){
	//Condition pour gagner
//	if ( ($select1 == "Féofilaktovitch") and ($select2 == "raffiné") and ($select3 == "égorgé") and ($select4 == "vert") and ($select5 == "appétissante") and ($select6 == "procès-verbal") and ($select7 == "violon") and ($select8 == "infaillible") and ($select9 == "Fandorine") and ($select10 == "ivrogne")){
	if ( $kode == "Uo1gACgGQxJLrCG"){

	require_once('../Connections/dixhuit.php');
	session_start();
	
	session_register('indicemois');
	$indicemois = $reponse08;	//A modifier selon le mois
	
	session_register('indicenum');
	$indicenum = "indice_08";	//A modifier selon le mois
	
	$inscription = "../succes_login_user.php";	//Renvoie à la page identification - Inscription
//	$inscription = "../inscription.php";	//Renvoie à la page Inscription

	header("Location:$inscription");
	}

	else {
	//Texte en cas d'echec
	$rekomencez = "<script language=\"Javascript\">alert ('Vous n\'avez pas trouvé tous les mots… Tentez à nouveau votre chance !'); </script>";
	}
}

?>
<html>
<head>
<TITLE>::: 10|18 20 ans de grands détectives Journal d'Août:::</TITLE>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link href="styles.css" rel="stylesheet" type="text/css">
<LINK REL="stylesheet" HREF="../lecture.css" TYPE="text/css">
<? echo"$rekomencez"; ?> 
<script language="Javascript">
function GoJournal()
{
if(confirm('Attention, en revenant au journal, vous risquez de perdre vos mots sélectionnés, continuer?'))
	{
	window.top.location.href='index.html';
	}
}
</script>

<!--The following section is an HTML table which reassembles the sliced image in a browser.-->
<!--Copy the table section including the opening and closing table tags, and paste the data where-->
<!--you want the reassembled image to appear in the destination document. -->
<!--======================== BEGIN COPYING THE HTML HERE ==========================-->
<table border="0" cellpadding="0" cellspacing="0" width="753">
<!-- fwtable fwsrc="jeux_aout_decoups.png" fwbase="jeux.gif" fwstyle="Dreamweaver" fwdocid = "742308039" fwnested="0" -->
  <tr>
<!-- Shim row, height 1. -->
   <td><img src="img_jeux/spacer.gif" width="38" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="478" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="12" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="187" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="38" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="1" border="0" alt=""></td>
  </tr>

  <tr><!-- row 1 -->
    <td colspan="5"><img name="index_r1_c1" src="img_index/index_r1_c1.gif" width="753" height="128" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="128" border="0" alt=""></td>
  </tr>
  <tr><!-- row 2 -->
   <td colspan="5"><img name="jeux_r2_c1" src="img_jeux/jeux_r2_c1.gif" width="753" height="72" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="72" border="0" alt=""></td>
  </tr>
  <tr><!-- row 3 -->
   <td colspan="5"><img name="jeux_r3_c1" src="img_jeux/jeux_r3_c1.gif" width="753" height="41" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="41" border="0" alt=""></td>
  </tr>
  <tr><!-- row 4 -->
   <td rowspan="13"><img name="jeux_r4_c1" src="img_jeux/jeux_r4_c1.gif" width="38" height="776" border="0" alt=""></td>
   <td colspan="3"><img name="jeux_r4_c2" src="img_jeux/jeux_r4_c2.gif" width="677" height="39" border="0" alt=""></td>
   <td rowspan="13"><img name="jeux_r4_c5" src="img_jeux/jeux_r4_c5.gif" width="38" height="776" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="39" border="0" alt=""></td>
  </tr>
  <tr><!-- row 5 -->
    <td rowspan="9" valign="top"><b>COMMENT JOUER ?</b><span class="text3"><font color="#000000"><br>
      Utilisez la souris pour s&eacute;lectionner les mots dans la grille (cliquez 
      et faites glisser votre souris de la premi&egrave;re &agrave; la derni&egrave;re 
      lettre du mot trouv&eacute;). D&eacute;couvrez ainsi les 9 mots cach&eacute;s 
      reprenant tous les noms propres figurant dans le premier chapitre du livre. 
      Attention, ces mots peuvent figurer dans tous les sens (horizontal de gauche 
      &agrave; droite ou de droite &agrave; gauche, vertical de bas en haut ou 
      de haut en bas, et diagonale). Saurez-vous trouver l'indice du mois...?</font></span></td>
   <td rowspan="9"><img name="jeux_r5_c3" src="img_jeux/jeux_r5_c3.gif" width="12" height="126" border="0" alt=""></td>
   <td><img name="jeux_r5_c4" src="img_jeux/jeux_r5_c4.gif" width="187" height="26" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="26" border="0" alt=""></td>
  </tr>
  <tr><!-- row 6 -->
   <td><a href="chapitre.pdf" target="_blank"><img name="jeux_r6_c4" src="img_jeux/jeux_r6_c4.gif" width="187" height="16" border="0" alt=""></a></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="16" border="0" alt=""></td>
  </tr>
  <tr><!-- row 7 -->
   <td><img name="jeux_r7_c4" src="img_jeux/jeux_r7_c4.gif" width="187" height="6" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="6" border="0" alt=""></td>
  </tr>
  <tr><!-- row 8 -->
   <td><a href="chapitre.html" target="_blank"><img name="jeux_r8_c4" src="img_jeux/jeux_r8_c4.gif" width="187" height="16" border="0" alt=""></a></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="16" border="0" alt=""></td>
  </tr>
  <tr><!-- row 9 -->
   <td><img name="jeux_r9_c4" src="img_jeux/jeux_r9_c4.gif" width="187" height="6" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="6" border="0" alt=""></td>
  </tr>
  <tr><!-- row 10 -->
   <td><a href="javascript:GoJournal()"><img name="jeux_r10_c4" src="img_jeux/jeux_r10_c4.gif" width="187" height="16" border="0" alt=""></a></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="16" border="0" alt=""></td>
  </tr>
  <tr><!-- row 11 -->
   <td><img name="jeux_r11_c4" src="img_jeux/jeux_r11_c4.gif" width="187" height="6" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="6" border="0" alt=""></td>
  </tr>
  <tr><!-- row 12 -->
   <td><a href="javascript:window.close();"><img name="jeux_r12_c4" src="img_jeux/jeux_r12_c4.gif" width="187" height="16" border="0" alt=""></a></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="16" border="0" alt=""></td>
  </tr>
  <tr><!-- row 13 -->
   <td><img name="jeux_r13_c4" src="img_jeux/jeux_r13_c4.gif" width="187" height="18" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="18" border="0" alt=""></td>
  </tr>
  <tr><!-- row 14 -->
   <td colspan="3"><img name="jeux_r14_c2" src="img_jeux/jeux_r14_c2.gif" width="677" height="10" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="10" border="0" alt=""></td>
  </tr>
  <tr><!-- row 15 -->
   <td colspan="3" valign="top"><center><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="500" height="534">
        <param name="movie" value="motcrois.swf">
        <param name=quality value=high>
        <embed src="motcrois.swf" width="500" height="534" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash"></embed> 
      </object>
        <br>
        <img src="img_index/etoile.gif" width="10" height="10"> &quot;L'illustré 
        du Royaume-Uni - Les nouvelles de Londres&quot;. 
      </center></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="552" border="0" alt=""></td>
  </tr>
  <tr><!-- row 16 -->
   <td colspan="3"><img name="jeux_r16_c2" src="img_jeux/jeux_r16_c2.gif" width="677" height="49" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="49" border="0" alt=""></td>
  </tr>
<!--   This table was automatically created with Macromedia Fireworks   -->
<!--   http://www.macromedia.com   -->
</table>
<!--========================= STOP COPYING THE HTML HERE =========================-->
</body>
</html>
