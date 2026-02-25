<?
//Code à réutiliser pour chaque mois
if ($verif){
	//Condition pour gagner
//	if ( ($select1 == "Féofilaktovitch") and ($select2 == "raffiné") and ($select3 == "égorgé") and ($select4 == "vert") and ($select5 == "appétissante") and ($select6 == "procès-verbal") and ($select7 == "violon") and ($select8 == "infaillible") and ($select9 == "Fandorine") and ($select10 == "ivrogne")){
	if ( $kode == "Uo1gACgGQxJLrCG"){

	require_once('../Connections/dixhuit.php');
	session_start();
	
	session_register('indicemois');
	$indicemois = $reponse06;	//A modifier selon le mois
	
	session_register('indicenum');
	$indicenum = "indice_06";	//A modifier selon le mois
	
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
<HTML>

<HEAD>
<TITLE>::: 10|18 20 ans de grands détectives Journal de Février:::</TITLE>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-1">
<LINK REL="stylesheet" HREF="../lecture.css" TYPE="text/css">
<STYLE TYPE="text/css">

<!--

INPUT {
color:#FFFFFF;
background-color:#873C08;
font-size:15px;
font-family:verdana;
}

SELECT {
color:#000000;
background-color:#BDAEA5;
font-size:10px;
font-family:verdana;

}

body {
	font-family: "Times New Roman", Times, serif;
	font-size: 14px;
	background-image: url(images/fond_journal.jpg);
	background-repeat: no-repeat;
	background-position: 0px 0px;
	text-align: justify;
}

td {
	font-family: "Times New Roman", Times, serif;
	font-size: 16px;
	color: #333333;
	font-weight: bold;
	vertical-align: text-bottom;
}
-->
</style>
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

</HEAD>

<BODY BGCOLOR="#933f03" TEXT="#000000" marginwidth="0" marginheight="0" topmargin="0" leftmargin="0" LINK="#FFFFFF" VLINK="#FFFFFF" ALINK="#FFFFFF">
<table border="0" cellpadding="0" cellspacing="0" width="780">
<!-- fwtable fwsrc="journal_juin_jeu.png" fwbase="journal_juin_jeu.png" fwstyle="Dreamweaver" fwdocid = "742308039" fwnested="0" -->
  <tr>
<!-- Shim row, height 1. -->
   <td><img src="images_jeu/spacer.gif" width="58" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="18" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="93" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="62" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="11" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="155" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="12" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="155" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="10" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="47" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="48" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="60" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="21" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="30" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="1" border="0" alt=""></td>
  </tr>

  <tr><!-- row 1 -->
   <td colspan="14"><img name="journal_juin_jeu_r1_c1" src="images_jeu/journal_juin_jeu_r1_c1.gif" width="780" height="76" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="76" border="0" alt=""></td>
  </tr>
  <tr><!-- row 2 -->
   <td rowspan="11"><img name="journal_juin_jeu_r2_c1" src="images_jeu/journal_juin_jeu_r2_c1.gif" width="58" height="1105" border="0" alt=""></td>
   <td colspan="12"><img name="journal_juin_jeu_r2_c2" src="images_jeu/journal_juin_jeu_r2_c2.gif" width="692" height="231" border="0" alt=""></td>
   <td rowspan="11"><img name="journal_juin_jeu_r2_c14" src="images_jeu/journal_juin_jeu_r2_c14.gif" width="30" height="1105" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="231" border="0" alt=""></td>
  </tr>
  <tr><!-- row 3 -->
    <td colspan="12" valign="top"><b>COMMENT JOUER?:</b><span class="text3"><font color="#000000"><br>
      Utilisez la souris pour s&eacute;lectionner les mots dans la grille (cliquez 
      et faites glisser votre souris de la premi&egrave;re &agrave; la derni&egrave;re 
      lettre du mot trouv&eacute;). D&eacute;couvrez ainsi les 15 mots cach&eacute;s 
      reprenant tous les noms propres figurant dans le premier chapitre du livre. 
      Attention, ces mots peuvent figurer dans tous les sens (horizontal de gauche 
      &agrave; droite ou de droite &agrave; gauche, vertical de bas en haut ou 
      de haut en bas, et diagonal). Saurez-vous trouver l'indice du mois...?</font></span></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="68" border="0" alt=""></td>
  </tr>
  <tr><!-- row 4 -->
   <td><img name="journal_juin_jeu_r4_c2" src="images_jeu/journal_juin_jeu_r4_c2.gif" width="18" height="16" border="0" alt=""></td>
   <td colspan="2"><a href="javascript:GoJournal()"><img name="journal_juin_jeu_r4_c3" src="images_jeu/journal_juin_jeu_r4_c3.gif" width="155" height="16" border="0" alt="Revenir au journal"></a></td>
   <td><img name="journal_juin_jeu_r4_c5" src="images_jeu/journal_juin_jeu_r4_c5.gif" width="11" height="16" border="0" alt=""></td>
   <td><a href="chapitre_juin.html" target="_blank"><img name="journal_juin_jeu_r4_c6" src="images_jeu/journal_juin_jeu_r4_c6.gif" width="155" height="16" border="0" alt="Lire le premier chapitre en ligne"></a></td>
   <td><img name="journal_juin_jeu_r4_c7" src="images_jeu/journal_juin_jeu_r4_c7.gif" width="12" height="16" border="0" alt=""></td>
   <td><a href="chapitre-premier-juin.pdf" target="_blank"><img name="journal_juin_jeu_r4_c8" src="images_jeu/journal_juin_jeu_r4_c8.gif" width="155" height="16" border="0" alt="Télécharger au Format PDF"></a></td>
   <td><img name="journal_juin_jeu_r4_c9" src="images_jeu/journal_juin_jeu_r4_c9.gif" width="10" height="16" border="0" alt=""></td>
   <td colspan="3"><a href="javascript:window.close();" target="_blank"><img name="journal_juin_jeu_r4_c10" src="images_jeu/journal_juin_jeu_r4_c10.gif" width="155" height="16" border="0" alt="Femer la fenêtre"></a></td>
   <td><img name="journal_juin_jeu_r4_c13" src="images_jeu/journal_juin_jeu_r4_c13.gif" width="21" height="16" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="16" border="0" alt=""></td>
  </tr>
  <tr><!-- row 5 -->
   <td colspan="12"><img name="journal_juin_jeu_r5_c2" src="images_jeu/journal_juin_jeu_r5_c2.gif" width="692" height="33" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="33" border="0" alt=""></td>
  </tr>
  <tr><!-- row 6 -->
   <td colspan="12"><img name="journal_juin_jeu_r6_c2" src="images_jeu/journal_juin_jeu_r6_c2.gif" width="692" height="81" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="81" border="0" alt=""></td>
  </tr>
  <tr><!-- row 7 -->
   <td colspan="2"><img name="journal_juin_jeu_r7_c2" src="images_jeu/journal_juin_jeu_r7_c2.gif" width="111" height="123" border="0" alt=""></td>
   <td rowspan="3" colspan="8" valign="top"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="500" height="534">
        <param name="movie" value="motcrois.swf">
        <param name=quality value=high>
        <embed src="motcrois.swf" width="500" height="534" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash"></embed> 
      </object></td>
   <td rowspan="2" colspan="2"><img name="journal_juin_jeu_r7_c12" src="images_jeu/journal_juin_jeu_r7_c12.gif" width="81" height="417" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="123" border="0" alt=""></td>
  </tr>
  <tr><!-- row 8 -->
   <td rowspan="2" colspan="2"><img name="journal_juin_jeu_r8_c2" src="images_jeu/journal_juin_jeu_r8_c2.gif" width="111" height="411" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="294" border="0" alt=""></td>
  </tr>
  <tr><!-- row 9 -->
   <td rowspan="2" colspan="2"><img name="journal_juin_jeu_r9_c12" src="images_jeu/journal_juin_jeu_r9_c12.gif" width="81" height="160" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="117" border="0" alt=""></td>
  </tr>
  <tr><!-- row 10 -->
   <td colspan="9"><img name="journal_juin_jeu_r10_c2" src="images_jeu/journal_juin_jeu_r10_c2.gif" width="563" height="43" border="0" alt=""></td>
   <td><img name="journal_juin_jeu_r10_c11" src="images_jeu/journal_juin_jeu_r10_c11.gif" width="48" height="43" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="43" border="0" alt=""></td>
  </tr>
  <tr><!-- row 11 -->
   <td colspan="12"><img name="journal_juin_jeu_r11_c2" src="images_jeu/journal_juin_jeu_r11_c2.gif" width="692" height="31" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="31" border="0" alt=""></td>
  </tr>
  <tr><!-- row 12 -->
   <td colspan="12"><img name="journal_juin_jeu_r12_c2" src="images_jeu/journal_juin_jeu_r12_c2.gif" width="692" height="68" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="68" border="0" alt=""></td>
  </tr>
<!--   This table was automatically created with Macromedia Fireworks   -->
<!--   http://www.macromedia.com   -->
</table>
</BODY>

</HTML>