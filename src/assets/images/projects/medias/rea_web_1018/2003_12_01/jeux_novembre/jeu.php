<?
//Code à réutiliser pour chaque mois
if ($verif){
	if (
 ($select1 == "Kgale")
and ($select2 == "theiere")
and ($select3 == "Botswana")
and ($select4 == "rouge")
and ($select5 == "inventaire")
and ($select6 == "acacia")
and ($select7 == "Kalahari")
and ($select8 == "fraicheur")
){
	require_once('../Connections/dixhuit.php');
	session_start();
	
	session_register('indicemois');
	$indicemois = $reponse11;	//A modifier selon le mois
	
	session_register('indicenum');
	$indicenum = "indice_11";	//A modifier selon le mois
	
	$inscription = "../succes_login_user.php";	//Renvoie à la page identification - Inscription
//	$inscription = "../inscription.php";	//Renvoie à la page Inscription

	header("Location:$inscription");
	}

	else {
	$rekomencez = "<script language=\"Javascript\">alert ('Vous n\'avez pas trouvé tous les mots… Tentez à nouveau votre chance !'); </script>";
	}
}

?>
<html>
<head>
<TITLE>::: 10|18 20 ans de grands détectives Journal de Novembre :::</TITLE>
<meta http-equiv="Content-Type" content="text/html;">
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
<meta name="description" content="FW MX DW MX HTML">
<!-- Fireworks MX Dreamweaver MX target.  Created Mon Oct 27 18:15:34 GMT+0100 (Paris, Madrid) 2003-->
<link href="jeu.css" rel="stylesheet" type="text/css">
</head>
<body bgcolor="#8C3907" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" class="body">
<table border="0" cellpadding="0" cellspacing="0" width="780">
<!-- fwtable fwsrc="jeu.png" fwbase="jeu.png" fwstyle="Dreamweaver" fwdocid = "742308039" fwnested="0" -->
  <tr>
<!-- Shim row, height 1. -->
   <td><img src="img_jeux/spacer.gif" width="61" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="167" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="22" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="237" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="13" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="34" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="155" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="30" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="61" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="1" border="0" alt=""></td>
  </tr>

  <tr><!-- row 1 -->
   <td colspan="9"><img name="jeu_r1_c1" src="img_jeux/jeu_r1_c1.gif" width="780" height="158" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="158" border="0" alt=""></td>
  </tr>
  <tr><!-- row 2 -->
   <td colspan="9"><img name="jeu_r2_c1" src="index_r2_c1.gif" width="780" height="102" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="102" border="0" alt=""></td>
  </tr>
  <tr><!-- row 3 -->
   <td rowspan="17"><img name="jeu_r3_c1" src="img_jeux/jeu_r3_c1.gif" width="61" height="921" border="0" alt=""></td>
   <td rowspan="10"><img name="couv" src="img_jeux/couv.jpg" width="167" height="274" border="0" alt=""></td>
   <td rowspan="12"><img name="jeu_r3_c3" src="img_jeux/jeu_r3_c3.gif" width="22" height="297" border="0" alt=""></td>
   <td colspan="5"><img name="jeu_r3_c4" src="img_jeux/jeu_r3_c4.gif" width="469" height="77" border="0" alt=""></td>
   <td rowspan="17"><img name="jeu_r3_c9" src="img_jeux/jeu_r3_c9.gif" width="61" height="921" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="77" border="0" alt=""></td>
  </tr>
  <tr><!-- row 4 -->
   <td><img name="jeu_r4_c4" src="img_jeux/jeu_r4_c4.gif" width="237" height="38" border="0" alt=""></td>
   <td rowspan="11"><img name="jeu_r4_c5" src="img_jeux/jeu_r4_c5.gif" width="13" height="220" border="0" alt=""></td>
   <td rowspan="2" colspan="3"><img name="jeu_r4_c6" src="img_jeux/jeu_r4_c6.gif" width="219" height="120" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="38" border="0" alt=""></td>
  </tr>
  <tr><!-- row 5 -->
   <td rowspan="10" valign="top"><p class="cont3">
Compl&eacute;ter les phrases du paragraphe suivant en choisissant le bon mot dans 
chaque menu d&eacute;roulant. Cliquez ensuite sur &quot;valider&quot; pour d&eacute;couvrir 
l'indice du mois de novembre.
</p></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="82" border="0" alt=""></td>
  </tr>
  <tr><!-- row 6 -->
   <td rowspan="9"><img name="jeu_r6_c6" src="img_jeux/jeu_r6_c6.gif" width="34" height="100" border="0" alt=""></td>
   <td><a href="chapitre.pdf" target="_blank"><img name="jeux_r6_c4" src="img_jeux/jeux_r6_c4.gif" width="155" height="16" border="0" alt=""></a></td>
   <td rowspan="9"><img name="jeu_r6_c8" src="img_jeux/jeu_r6_c8.gif" width="30" height="100" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="16" border="0" alt=""></td>
  </tr>
  <tr><!-- row 7 -->
   <td><img name="jeu_r7_c7" src="img_jeux/jeu_r7_c7.gif" width="155" height="6" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="6" border="0" alt=""></td>
  </tr>
  <tr><!-- row 8 -->
   <td><a href="chapitre_novembre.html" target="_blank"><img name="jeux_r8_c4" src="img_jeux/jeux_r8_c4.gif" width="155" height="16" border="0" alt="Lire le Chapitre"></a></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="16" border="0" alt=""></td>
  </tr>
  <tr><!-- row 9 -->
   <td><img name="jeu_r9_c7" src="img_jeux/jeu_r9_c7.gif" width="155" height="6" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="6" border="0" alt=""></td>
  </tr>
  <tr><!-- row 10 -->
   <td><a href="javascript:GoJournal()"><img name="jeux_r10_c4" src="img_jeux/jeux_r10_c4.gif" width="155" height="16" border="0" alt=""></a></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="16" border="0" alt=""></td>
  </tr>
  <tr><!-- row 11 -->
   <td><img name="jeu_r11_c7" src="img_jeux/jeu_r11_c7.gif" width="155" height="6" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="6" border="0" alt=""></td>
  </tr>
  <tr><!-- row 12 -->
   <td rowspan="2"><a href="javascript:window.close();"><img name="jeux_r12_c4" src="img_jeux/jeux_r12_c4.gif" width="155" height="16" border="0" alt=""></a></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="11" border="0" alt=""></td>
  </tr>
  <tr><!-- row 13 -->
   <td rowspan="2"><img name="jeu_r13_c2" src="img_jeux/jeu_r13_c2.gif" width="167" height="23" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="5" border="0" alt=""></td>
  </tr>
  <tr><!-- row 14 -->
   <td><img name="jeu_r14_c7" src="img_jeux/jeu_r14_c7.gif" width="155" height="18" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="18" border="0" alt=""></td>
  </tr>
  <tr><!-- row 15 -->
   <td colspan="7"><img name="jeu_r15_c2" src="img_jeux/jeu_r15_c2.gif" width="658" height="37" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="37" border="0" alt=""></td>
  </tr>
  <tr><!-- row 16 -->
   <td colspan="6" valign="top"><form name="questionnaire" action="">
        <p class="cont3">&nbsp; &nbsp; &nbsp; &nbsp; Mma Ramotswe poss&eacute;dait 
          une agence de d&eacute;tectives en Afrique, au pied du mont 
          <select name="select1" class="list">
            <option value=" Tsodilo"> Tsodilo</option>
            <option value="Kgale">###Kgale </option>
            <option value="Aha">Aha</option>
            <option value="Khomas">Khomas</option>
            <option value="Mandara">Mandara</option>
          </select>
          . Voici les biens dont elle disposait : une toute petite fourgonnette 
          blanche, deux bureaux, deux chaises, un t&eacute;l&eacute;phone et une 
          vieille machine &agrave; &eacute;crire. Il y avait en outre une 
          <select name="select2" class="list">
            <option value="cafetière">cafetière</option>
            <option value="theiere">###théière </option>
            <option value="bouteille">bouteille</option>
            <option value="bonbonne">bonbonne</option>
            <option value="carafe">carafe</option>
          </select>
          , dans laquelle Mma Ramotswe (seule femme d&eacute;tective priv&eacute;e 
          du 
          <select name="select3" class="list">
            <option value="Mozambique">Mozambique</option>
            <option value="Ghana">Ghana</option>
            <option value="Bénin">Bénin</option>
            <option value="Zimbabwe">Zimbabwe</option>
            <option value="Botswana">###Botswana </option>
          </select>
          ) pr&eacute;parait du th&eacute; 
          <select name="select4" class="list">
            <option value="vert"> vert</option>
            <option value="noir">noir</option>
            <option value="rouge">###rouge</option>
            <option value="fumé">fumé</option>
            <option value="bleu">bleu</option>
          </select>
          . Et aussi trois tasses : une pour elle, une pour sa secr&eacute;taire 
          et une pour le client. De quoi d'autre une agence de d&eacute;tectives 
          pourrait-elle avoir besoin ? Le m&eacute;tier de d&eacute;tective repose 
          sur l'intelligence et l'intuition humaines, et Mma Ramotswe poss&eacute;dait 
          l'une et l'autre en abondance. Bien s&ucirc;r, ce genre de chose ne 
          figurerait jamais dans aucun inventaire... </p>
        <p class="cont3"> Il y avait la vue aussi, mais elle non plus ne pouvait 
          appara&icirc;tre dans un 
          <select name="select5" class="list">
            <option value="répertoire">répertoire</option>
            <option value="guide">guide</option>
            <option value="inventaire">###inventaire</option>
            <option value="formulaire">formulaire</option>
            <option value="catalogue">catalogue</option>
          </select>.
          Comment une simple liste e&ucirc;t-elle d&eacute;crit ce que l'on voyait 
          de la porte de Mma Ramotswe ? Au premier plan, un 
          <select name="select6" class="list">
            <option value=" févier"> févier</option>
            <option value="acacia">###acacia</option>
            <option value="agave">agave</option>
            <option value="genêt">genêt</option>
            <option value="câprier">câprier</option>
          </select>
          , cet &eacute;pineux qui pars&egrave;me les abords sauvages du 
          <select name="select7" class="list">
            <option value="Namib">Namib</option>
            <option value="Sahara">Sahara</option>
            <option value="Kalahari">###Kalahari </option>
            <option value="Adrar">Adrar</option>
            <option value="Hoggar">Hoggar</option>
          </select>
          : longues &eacute;pines blanches pour mettre en garde, feuilles gris-olive 
          qui contrastent, d&eacute;licates. Parmi ses branchages, en fin d'apr&egrave;s-midi 
          ou dans la 
          <select name="select8" class="list">
            <option value="beauté"> beauté</option>
            <option value="pureté">pureté</option>
            <option value="splendeur">splendeur</option>
            <option value="fraicheur">###fraîcheur </option>
            <option value="délicatesse">délicatesse</option>
          </select>
          du petit matin, on pouvait voir - ou plut&ocirc;t entendre - un touraco 
          vert. Et derri&egrave;re l'acacia, par-del&agrave; la route poussi&eacute;reuse, 
          les toits de la ville, sous une couverture d'arbres et de brousse. A 
          l'horizon, dans le chatoiement azur des brumes de chaleur, les collines, 
          telles d'improbables termiti&egrave;res g&eacute;antes.</p>
        <div align="right">
          <input type='hidden' name='verif' value='1'>
          <INPUT NAME="Test" TYPE="submit" class="btenvoi" VALUE="Valider">
        </div>
      </form></td>
   <td><img name="jeu_r16_c8" src="img_jeux/jeu_r16_c8.gif" width="30" height="519" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="519" border="0" alt=""></td>
  </tr>
  <tr><!-- row 17 -->
   <td colspan="7"><img name="jeu_r17_c2" src="img_jeux/jeu_r17_c2.gif" width="658" height="28" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="28" border="0" alt=""></td>
  </tr>
  <tr><!-- row 18 -->
   <td colspan="7" valign="top"><p align="center" class="copy2">* La voix du Botswana 
        - ** Samedi, 1er novembre<br>
        &copy; Alexander McCall Smith, 1998. | &copy; Editions 10/18, d&eacute;partement 
        d'Univers Poche, pour la traduction fran&ccedil;aise, 2003. <br>
        Tous droits r&eacute;serv&eacute;s. Toute reproduction, m&ecirc;me partielle, 
        par quelque proc&eacute;d&eacute; que ce soit, est interdite.</p></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="34" border="0" alt=""></td>
  </tr>
  <tr><!-- row 19 -->
   <td colspan="7"><img name="jeu_r19_c2" src="img_jeux/jeu_r19_c2.gif" width="658" height="6" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="6" border="0" alt=""></td>
  </tr>
<!--   This table was automatically created with Macromedia Fireworks   -->
<!--   http://www.macromedia.com   -->
</table>
</body>
</html>