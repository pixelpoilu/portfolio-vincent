<?
//Code à réutiliser pour chaque mois
if ($verif){
	//Condition pour gagner
//	if ( ($select1 == "Féofilaktovitch") and ($select2 == "raffiné") and ($select3 == "égorgé") and ($select4 == "vert") and ($select5 == "appétissante") and ($select6 == "procès-verbal") and ($select7 == "violon") and ($select8 == "infaillible") and ($select9 == "Fandorine") and ($select10 == "ivrogne")){
	if ( $kode == "b5c39gf3de"){

	require_once('../Connections/dixhuit.php');
	session_start();
	
	session_register('indicemois');
	$indicemois = $reponse02;	//A modifier selon le mois
	
	session_register('indicenum');
	$indicenum = "indice_02";	//A modifier selon le mois
	
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

-->

</STYLE>
<script language="Javascript">
function GoJournal()
{
if(confirm('Attention, en revenant au journal, vous risquez de perdre vos mots sélectionnés, continuer?'))
	{
	window.top.location.href='index.html';
	}
}
</script>
<? echo"$rekomencez"; ?>

</HEAD>

<BODY BGCOLOR="#933f03" TEXT="#000000" marginwidth="0" marginheight="0" topmargin="0" leftmargin="0" LINK="#FFFFFF" VLINK="#FFFFFF" ALINK="#FFFFFF">
<table width="778" height="100" border="0" cellpadding="0" cellspacing="0">
  <tr valign="top"> 
    <td><img src="0a.gif" width="80" height="108"></td>
    <td><img src="0titre.gif" width="620" height="108"></td>
    <td><img src="0c.gif" width="78" height="108"></td>
  </tr>
  <tr> 
    <td><img src="0a1.gif" width="80" height="18"></td>
    <td><img src="0ligne1.gif" width="620" height="18"></td>
    <td><img src="0c1.gif" width="78" height="18"></td>
  </tr>
  <tr> 
    <td rowspan="2" valign="top" background="0a1.gif"><img src="0a1.gif" width="80" height="42"></td>
    <td bgcolor="#CCCC99"><table width="100%" border="0" cellspacing="0" cellpadding="10">
        <tr> 
          <td bgcolor="CCCC99" class="text1"><strong><font color="973E06">COMMENT 
            JOUER :</font></strong> Utilisez la souris pour s&eacute;lectionner 
            les mots dans la
            grille (cliquez et faites glisser votre souris de la premi&egrave;re 
            &agrave; la derni&egrave;re
            lettre du mot trouv&eacute;). D&eacute;couvrez ainsi les 15 mots cach&eacute;s 
            qui font partie
            des titres de la s&eacute;rie Cadfael. Attention, ces mots peuvent 
            figurer dans
            tous les sens (horizontal de gauche &agrave; droite ou de droite &agrave; 
            gauche,
            vertical de bas en haut ou de haut en bas, et diagonal). Saurez-vous
            trouver l'indice du mois...?</td>
        </tr>
      </table></td>
    <td rowspan="2" valign="top" background="0c1.gif"><img src="0c1.gif" width="78" height="42"></td>
  </tr>
  <tr> 
    <td align="center" valign="top" bgcolor="#CCCC99"><a href="javascript:GoJournal();" target="_self"><img src="bt_journal.gif" width="137" height="22" border="0"></a> <a href="javascript:window.close();"><img src="bt_close.gif" width="137" height="22" border="0"></a></td>
  </tr>
  <tr> 
    <td><img src="0a1.gif" width="80" height="18"></td>
    <td><img src="0ligne1.gif" width="620" height="18"></td>
    <td><img src="0c1.gif" width="78" height="18"></td>
  </tr>
  <tr> 
    <td valign="bottom" background="0a1.gif"><img src="0a4.gif" width="80" height="414"></td>
    <TD align="center" valign="top" BGCOLOR="CCCC99"><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="500" height="334">
        <param name="movie" value="motcache.swf">
        <param name=quality value=high><param name="BGCOLOR" value="#CCCC99">
        <embed src="motcache.swf" width="500" height="334" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" bgcolor="#CCCC99"></embed> 
      </object></TD>
    <td valign="top" background="0c1.gif"><img src="0c1.gif" width="78" height="18"><br> 
      <img src="0c4.gif" width="78" height="414"></td>
  </tr>
  <tr> 
    <td><img src="0a5.gif" width="80" height="116"></td>
    <td><img src="0bas.gif" width="620" height="116"></td>
    <td><img src="0c5.gif" width="78" height="116"></td>
  </tr>
  <tr> 
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr> 
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr> 
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr> 
    <td>&nbsp;</td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
</table>
</BODY>

</HTML>

