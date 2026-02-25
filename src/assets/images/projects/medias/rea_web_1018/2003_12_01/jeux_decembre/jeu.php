<?
//Code à réutiliser pour chaque mois
if ($verif){
	//Condition pour gagner
//	if ( ($select1 == "Féofilaktovitch") and ($select2 == "raffiné") and ($select3 == "égorgé") and ($select4 == "vert") and ($select5 == "appétissante") and ($select6 == "procès-verbal") and ($select7 == "violon") and ($select8 == "infaillible") and ($select9 == "Fandorine") and ($select10 == "ivrogne")){
	if ( $kode == "Uo1gACgGQxJLrCG"){

	require_once('../Connections/dixhuit.php');
	session_start();
	
	session_register('indicemois');
	$indicemois = $reponse12;	//A modifier selon le mois
	
	session_register('indicenum');
	$indicenum = "indice_12";	//A modifier selon le mois
	
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
<TITLE>::: 10|18 20 ans de grands détectives Journal d'octobre :::</TITLE>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<meta name="description" content="FW MX DW MX HTML">
<!-- Fireworks MX Dreamweaver MX target.  Created Fri Sep 26 13:26:29 GMT+0200 (Paris, Madrid (heure d'été)) 2003-->
<style type="text/css">
<!--
.unnamed1 {
	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-size: 12px;
}
.unnamed2 {
	font-family: Verdana, Arial, Helvetica, sans-serif;
	font-size: 10px;
}
-->
</style>
</head>

<body bgcolor="#8C3907" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" class="body">
<!--The following section is an HTML table which reassembles the sliced image in a browser.-->
<!--Copy the table section including the opening and closing table tags, and paste the data where-->
<!--you want the reassembled image to appear in the destination document. -->
<!--======================== BEGIN COPYING THE HTML HERE ==========================-->
<table border="0" cellpadding="0" cellspacing="0">
  <!-- fwtable fwsrc="jeu_octobre.png" fwbase="jeu.gif" fwstyle="Dreamweaver" fwdocid = "742308039" fwnested="0" -->
  <tr> 
    <!-- Shim row, height 1. -->
    <td><img src="jeux_img/spacer.gif" width="27" height="1" border="0" alt=""></td>
  </tr>
  <tr> 
    <!-- row 1 -->
    <td><img name="journ_dec_r1_c1" src="journ_dec_r1_c1.gif" width="780" height="148" border="0" alt=""></td>
  </tr>
  <tr> 
    <td bgcolor="F7F7F7"><img name="journ_dec_r2_c1" src="journ_dec_r2_c1.gif" width="780" height="38" border="0" alt=""></td>
  </tr>
  <tr> 
    <td><img name="journ_dec_r7_c1" src="journ_dec_r7_c1.gif" width="780" height="54" border="0" alt=""></td>
  </tr>
  <tr> 
    <td><table border="0" cellpadding="0" cellspacing="0">
        <tr> 
          <td valign="top"><img name="journ_dec_r3_c1" src="journ_dec_r3_c1.gif" width="56" height="360" border="0" alt=""></td>
          <td valign="top" bgcolor="#F7F8F3"> <table width="669" border="0" cellpadding="0" cellspacing="0">
              <tr> 
                <td width="470" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tr> 
                      <td><img name="journ_dec_r3_c2" src="journ_dec_r3_c2.gif" width="454" height="86" border="0" alt=""></td>
                    </tr>
                    <tr> 
                      <td><table border="0" cellpadding="10" cellspacing="0">
                          <tr> 
                            <td width="315" class="unnamed1"><? echo"$rekomencez"; ?> 
                              <div align="justify">
                                <script language="Javascript">
function GoJournal()
{
if(confirm('Attention, en revenant au journal, vous risquez de perdre vos mots sélectionnés, continuer?'))
	{
	window.top.location.href='index.html';
	}
}
</script>
                                <b>COMMENT JOUER ?</b><span class="cont"><br>
                                Utilisez la souris pour s&eacute;lectionner les 
                                mots dans la grille (cliquez et faites glisser 
                                votre souris de la premi&egrave;re &agrave; la 
                                derni&egrave;re lettre du mot trouv&eacute;). 
                                D&eacute;couvrez ainsi les 9 mots cach&eacute;s 
                                reprenant tous les noms propres figurant dans 
                                le premier chapitre du livre. Attention, ces mots 
                                peuvent figurer dans tous les sens (horizontal 
                                de gauche &agrave; droite ou de droite &agrave; 
                                gauche, vertical de bas en haut ou de haut en 
                                bas, et diagonale). Saurez-vous trouver l'indice 
                                du mois...?</span><span class="cont"></span></div></td>
                            <td width="155"><table border="0" cellspacing="0" cellpadding="0">
                                <tr> 
                                  <td><a href="chapitre.pdf" target="_blank"><img name="jeux_r6_c4" src="jeux_img/jeux_r6_c4.gif" width="155" height="16" border="0" alt=""></a></td>
                                </tr>
                                <tr> 
                                  <td><img name="jeu_r11_c10" src="jeux_img/jeu_r11_c10.gif" width="155" height="6" border="0" alt=""></td>
                                </tr>
                                <tr> 
                                  <td><a href="chapitre_decembre.html" target="_blank"><img name="jeux_r8_c4" src="jeux_img/jeux_r8_c4.gif" width="155" height="16" border="0" alt=""></a></td>
                                </tr>
                                <tr> 
                                  <td><img name="jeu_r11_c10" src="jeux_img/jeu_r11_c10.gif" width="155" height="6" border="0" alt=""></td>
                                </tr>
                                <tr> 
                                  <td><a href="javascript:GoJournal()"><img name="jeux_r10_c4" src="jeux_img/jeux_r10_c4.gif" width="155" height="16" border="0" alt=""></a></td>
                                </tr>
                                <tr> 
                                  <td><img name="jeu_r11_c10" src="jeux_img/jeu_r11_c10.gif" width="155" height="6" border="0" alt=""></td>
                                </tr>
                                <tr> 
                                  <td><a href="javascript:window.close();"><img name="jeux_r12_c4" src="jeux_img/jeux_r12_c4.gif" width="155" height="16" border="0" alt=""></a></td>
                                </tr>
                              </table></td>
                          </tr>
                        </table>
                        <p>&nbsp;</p></td>
                    </tr>
                  </table></td>
                <td width="199"><img name="journ_dec_r3_c5" src="journ_dec_r3_c5b.gif" width="158" height="269" border="0" alt=""></td>
              </tr>
              <tr> 
                <td><img src="/img/vide.gif" width="470" height="22"></td>
                <td><img src="/img/vide.gif" width="199" height="22"></td>
              </tr>
            </table></td>
          <td valign="top"><img name="journ_dec_r3_c6" src="journ_dec_r3_c6.gif" width="55" height="360" border="0" alt=""></td>
        </tr>
      </table></td>
  </tr>
  <tr> 
    <td><table border="0" cellspacing="0" cellpadding="0">
        <tr> 
          <td><img name="journ_dec_r3_c1" src="journ_dec_r3_c1.gif" width="56" height="530" border="0" alt=""></td>
          <td valign="top" bgcolor="#F7F8F3"><table border="0" cellspacing="0" cellpadding="0">
              <tr> 
                <td><img src="/img/vide.gif" width="669" height="5"></td>
              </tr>
              <tr> 
                <td align="center" valign="middle"><OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
 codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"
 WIDTH="500" HEIGHT="490" ALIGN="middle">
                    <PARAM NAME=movie VALUE="motcrois.swf">
                    <PARAM NAME=quality VALUE=high>
                    <PARAM NAME=wmode VALUE=transparent>
                    <PARAM NAME=bgcolor VALUE=#F7F8F3>
                    <EMBED src="motcrois.swf" quality=high wmode=transparent bgcolor=#F7F8F3  WIDTH="500" HEIGHT="490" ALIGN="middle"
 TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED> 
                  </OBJECT></td>
              </tr>
            </table></td>
          <td><img name="journ_dec_r3_c6" src="journ_dec_r3_c6.gif" width="55" height="530" border="0" alt=""></td>
        </tr>
      </table></td>
  </tr>
  <tr> 
    <td bgcolor="#F7F8F3"><img name="journ_dec_r17_c1" src="journ_dec_r17_c1.gif" width="780" height="88" border="0" alt=""></td>
  </tr>
  <tr> 
    <td>&nbsp;</td>
  </tr>
  <tr> 
    <td>&nbsp;</td>
  </tr>
  <tr> 
    <td>&nbsp;</td>
  </tr>
  <tr> 
    <td>&nbsp;</td>
  </tr>
  <tr> 
    <td>&nbsp;</td>
  </tr>
  <tr> 
    <td>&nbsp;</td>
  </tr>
  <tr> 
    <td>&nbsp;</td>
  </tr>
  <tr> 
    <td>&nbsp;</td>
  </tr>
  <!--   This table was automatically created with Macromedia Fireworks   -->
  <!--   http://www.macromedia.com   -->
</table>
<!--========================= STOP COPYING THE HTML HERE =========================-->
</body>
</html>