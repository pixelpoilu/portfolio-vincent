<?
//Code à réutiliser pour chaque mois
if ($verif){
	//Condition pour gagner
//	if ( ($select1 == "Féofilaktovitch") and ($select2 == "raffiné") and ($select3 == "égorgé") and ($select4 == "vert") and ($select5 == "appétissante") and ($select6 == "procès-verbal") and ($select7 == "violon") and ($select8 == "infaillible") and ($select9 == "Fandorine") and ($select10 == "ivrogne")){
	if ( $kode == "Uo1gACgGQxJLrCG"){

	require_once('../Connections/dixhuit.php');
	session_start();
	
	session_register('indicemois');
	$indicemois = $reponse04;	//A modifier selon le mois
	
	session_register('indicenum');
	$indicenum = "indice_04";	//A modifier selon le mois
	
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

<TITLE>::: 10|18 20 ans de grands détectives Journal d'Avril:::</TITLE>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-1"> 

<LINK REL="stylesheet" HREF="lecture.css" TYPE="text/css">
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
<table width="780" border="0" cellpadding="0" cellspacing="0">
  <tr> 
    <td colspan="3"><img src="top.gif" width="780" height="17"></td>
  </tr>
  <tr> 
    <td><img src="a.gif" width="45" height="232"></td>
    <td><img src="b.gif" width="668" height="232"></td>
    <td><img src="c.gif" width="67" height="232"></td>
  </tr>
  <tr> 
    <td colspan="3"><img src="top_titre_jeu.gif" width="780" height="64"></td>
  </tr>
  <tr> 
    <td><img src="a1.gif" width="45" height="232"></td>
    <td><table width="668" border="0" cellpadding="0" cellspacing="0" bgcolor="#C6C189">
        <tr> 
          <td colspan="2" valign="top" class="text11"><table width="100%" border="0" cellspacing="0" cellpadding="5">
              <tr> 
                <td valign="top" class="text11"><p>Utilisez la souris pour s&eacute;lectionner 
                    les mots dans la grille (cliquez et faites glisser votre souris 
                    de la premi&egrave;re &agrave; la derni&egrave;re lettre du 
                    mot trouv&eacute;).<br>
                    D&eacute;couvrez ainsi les 19 mots cach&eacute;s reprenant 
                    tous les noms propres figurant dans le premier chapitre du 
                    livre. <br>
                    Attention, ces mots peuvent figurer dans tous les sens (horizontal 
                    de gauche &agrave; droite ou de droite &agrave; gauche, vertical 
                    de bas en haut ou de haut en bas, et diagonal). Saurez-vous 
                    trouver l'indice du mois...?</p></td>
              </tr>
            </table></td>
          <td width="8" rowspan="3"><img src="ligne_v.gif" width="8" height="232"></td>
          <td width="157" rowspan="3"><img src="grill_illust.gif" width="156" height="232"></td>
        </tr>
        <tr> 
          <td width="226" align="center" valign="top"><a href="chapitre_avril.html" target="_blank"><img src="lire_pass2.gif" width="197" height="17" border="0"></a></td>
          <td width="277" align="center" valign="top"><a href="chapitre-premier-avril.pdf" target="_blank"><img src="chap.gif" width="197" height="17" border="0"></a></td>
        </tr>
        <tr> 
          <td align="center" valign="top"><a href="javascript:GoJournal();" target="_self"><img src="bt_journal.gif" width="137" height="22" border="0"></a> 
          </td>
          <td align="center" valign="top"><a href="javascript:window.close();"><img src="bt_close.gif" width="137" height="22" border="0"></a></td>
        </tr>
      </table></td>
    <td><img src="c1.gif" width="67" height="232"></td>
  </tr>
  <tr> 
    <td colspan="3"><img src="saurez.gif" width="780" height="46"></td>
  </tr>
  <tr> 
    <td colspan="3"><img src="top_titre2.gif" width="780" height="41"></td>
  </tr>
  <tr> 
    <td background="a2.gif"><img src="a2.gif" width="45" height="154"></td>
    <td align="center" valign="middle" bgcolor="#C6C189"><table width="100%" border="0" cellpadding="6" cellspacing="0" bgcolor="#C6C189">
        <tr> 
          <td align="center" valign="middle" class="text11"><div align="center"> 
              <object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="500" height="534">
                <param name="movie" value="motcrois.swf">
                <param name=quality value=high>
                <embed src="motcrois.swf" width="500" height="534" quality=high pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash"></embed> 
              </object>
              <br>
              <br>
              <br>
            </div></td>
        </tr>
      </table></td>
    <td background="c2.gif"><img src="c2.gif" width="67" height="154"></td>
  </tr>
  <tr> 
    <td colspan="3"><img src="bottom.gif" width="780" height="119"></td>
  </tr>
</table>
<p>&nbsp;</p>
</BODY>

</HTML>

