<?
//Code à réutiliser pour chaque mois
if ($verif){
	if (
 ($select1 == "cigarette")
and ($select2 == "maigre")
and ($select3 == "rouge")
and ($select4 == "bureau")
and ($select5 == "Carlos")
and ($select6 == "detective")
and ($select7 == "montre")
){
	require_once('../Connections/dixhuit.php');
	session_start();
	
	session_register('indicemois');
	$indicemois = $reponse09;	//A modifier selon le mois
	
	session_register('indicenum');
	$indicenum = "indice_09";	//A modifier selon le mois
	
	$inscription = "../succes_login_user.php";	//Renvoie à la page identification - Inscription
//	$inscription = "../inscription.php";	//Renvoie à la page Inscription

	header("Location:$inscription");
	}

	else {
	$rekomencez = "<script language=\"Javascript\">alert ('Vous n\'avez pas trouvé tous les mots… Tentez à nouveau votre chance !'); </script>";
	}
}

?>
<HTML>
<HEAD>
<TITLE>::: 10|18 20 ans de grands détectives Journal de Septembre :::</TITLE>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-1">
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
<style type="text/css">
<!--
.unnamed1 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 10px;
}
.unnamed2 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 12px;
}

.btenvoi {
background-color: F1E9D4; color: #000000; font-family: "Times New Roman", Times, serif; font-weight: normal; font-size: 12px; border: 1 solid #333333}

-->
</style>
<style type="text/css">
<!--
.unnamed3 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 10px;
}
-->
</style>
</head>

<body bgcolor="#F1E9D4" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<!--The following section is an HTML table which reassembles the sliced image in a browser.-->
<!--Copy the table section including the opening and closing table tags, and paste the data where-->
<!--you want the reassembled image to appear in the destination document. -->
<!--======================== BEGIN COPYING THE HTML HERE ==========================-->
<table border="0" cellpadding="0" cellspacing="0" width="780">
<!-- fwtable fwsrc="journ_sept.png" fwbase="jeu.gif" fwstyle="Dreamweaver" fwdocid = "742308039" fwnested="0" -->
  <tr>
<!-- Shim row, height 1. -->
   <td><img src="img_jeux/spacer.gif" width="40" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="17" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="47" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="113" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="16" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="90" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="155" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="10" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="155" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="24" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="64" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="48" height="1" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="1" border="0" alt=""></td>
  </tr>

  <tr><!-- row 1 -->
   <td colspan="13"><img name="journ_sept_r1_c1" src="img_jeux/journ_sept_r1_c1.gif" width="780" height="180" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="180" border="0" alt=""></td>
  </tr>
  <tr><!-- row 2 -->
   <td colspan="13"><img name="journ_sept_r2_c1" src="img_jeux/journ_sept_r2_c1.gif" width="780" height="74" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="74" border="0" alt=""></td>
  </tr>
  <tr><!-- row 3 -->
   <td rowspan="8"><img name="journ_sept_r3_c1" src="img_jeux/journ_sept_r3_c1.gif" width="40" height="274" border="0" alt=""></td>
   <td rowspan="8" colspan="3"><img name="journ_sept_r3_c2" src="img_jeux/journ_sept_r3_c2.gif" width="177" height="274" border="0" alt=""></td>
   <td rowspan="6" colspan="2" class="unnamed2"><img name="jeu_r3_c5" src="img_jeux/jeu_r3_c5.gif" width="17" height="138" border="0" alt=""></td>
   <td colspan="6" valign="top" bgcolor="#f1e9d4" class="unnamed1"><div align="center"><font size="3"><strong>Comment 
        jouer ?</strong></font></div>
      <div align="justify"><span class="unnamed2"> Compléter les phrases du paragraphe 
        suivant en choisissant le bon mot dans chaque menu déroulant. Cliquez 
        ensuite sur "valider" pour découvrir l’indice du mois de septembre.</span></div></td>
   <td rowspan="9"><img name="journ_sept_r3_c7" src="img_jeux/journ_sept_r3_c7.gif" width="48" height="583" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="72" border="0" alt=""></td>
  </tr>
  <tr><!-- row 4 -->
   <td rowspan="5"><img name="jeu_r4_c7" src="img_jeux/jeu_r4_c7.gif" width="90" height="66" border="0" alt=""></td>
   <td colspan="3"><img name="jeu_r4_c8" src="img_jeux/jeu_r4_c8.gif" width="320" height="10" border="0" alt=""></td>
   <td rowspan="5" colspan="2"><img name="journ_sept_r3_c6" src="img_jeux/journ_sept_r3_c6.gif" width="88" height="66" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="10" border="0" alt=""></td>
  </tr>
  <tr><!-- row 5 -->
   <td><a href="javascript:GoJournal()"><img name="jeu_r5_c8" src="img_jeux/jeu_r5_c8.gif" width="155" height="16" border="0" alt="Revenir au journal"></a></td>
   <td><img name="jeu_r5_c9" src="img_jeux/jeu_r5_c9.gif" width="10" height="16" border="0" alt=""></td>
   <td><a href="chapitre_septembre.html" target="_blank"><img name="jeu_r5_c10" src="img_jeux/jeu_r5_c10.gif" width="155" height="16" border="0" alt="Lire le premier chapitre en ligne"></a></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="16" border="0" alt=""></td>
  </tr>
  <tr><!-- row 6 -->
   <td colspan="3"><img name="jeu_r6_c8" src="img_jeux/jeu_r6_c8.gif" width="320" height="10" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="10" border="0" alt=""></td>
  </tr>
  <tr><!-- row 7 -->
   <td><a href="chapitre-premier-sept.pdf" target="_blank"><img name="jeu_r7_c8" src="img_jeux/jeu_r7_c8.gif" width="155" height="16" border="0" alt="Télécharger au Format PDF"></a></td>
   <td><img name="jeu_r7_c9" src="img_jeux/jeu_r7_c9.gif" width="10" height="16" border="0" alt=""></td>
   <td><a href="javascript:window.close();" target="_blank"><img name="jeu_r7_c10" src="img_jeux/jeu_r7_c10.gif" width="155" height="16" border="0" alt="Femer la fenêtre"></a></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="16" border="0" alt=""></td>
  </tr>
  <tr><!-- row 8 -->
   <td colspan="3"><img name="jeu_r8_c8" src="img_jeux/jeu_r8_c8.gif" width="320" height="14" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="14" border="0" alt=""></td>
  </tr>
  <tr><!-- row 9 -->
   <td><img name="jeu_r9_c5" src="img_jeux/jeu_r9_c5.gif" width="1" height="14" border="0" alt=""></td>
   <td colspan="7"><img name="jeu_r9_c6" src="img_jeux/jeu_r9_c6.gif" width="514" height="14" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="14" border="0" alt=""></td>
  </tr>
  <tr><!-- row 10 -->
   <td colspan="2" class="unnamed2"><img name="jeu_r10_c5" src="img_jeux/jeu_r10_c5.gif" width="17" height="122" border="0" alt=""></td>
   <td colspan="6" rowspan="2" valign="top" bgcolor="#f1e9d4" class="unnamed2"><form name="questionnaire" action="">
        <p> Le visiteur referma doucement la porte du petit bureau.<br>
          - Cayetano Brul&eacute; ? demanda-t-il.<br>
          La pi&egrave;ce sentait le caf&eacute; et la
          <select name="select1" class="btenvoi">
            <option value="citronnelle" selected>citronnelle</option>
            <option value="cigarette">la cigarette</option>
            <option value="cannelle">cannelle</option>
            <option value="clope">clope</option>
          </select>
          . Cayetano pivota sur son si&egrave;ge : devant lui se tenait un homme 
          <select name="select2" class="btenvoi"> -  - 
            <option value="svelte" selected>svelte</option>
            <option value="jeune" >jeune</option>
            <option value="maigre" >maigre</option>
			<option value="mince" >mince</option>
          </select>
          , aux yeux bleu d&eacute;lav&eacute;, aux cheveux blancs. Il portait 
          un costume fonc&eacute;, en lin, &agrave; la veste crois&eacute;e, et 
          une cravate de soie 
          <select name="select3" class="btenvoi">
            <option value="jaune" selected>jaune</option>
            <option value="rouge">rouge</option>
            <option value="verte">verte</option>
            <option value="blanche">blanche</option>
          </select>
          , fix&eacute;e par une &eacute;pingle en or.<br>
          - Moi-m&ecirc;me, r&eacute;pondit le d&eacute;tective sans quitter son 
          bureau, le paquet de caf&eacute; espresso encore &agrave; la main, la 
          petite cafeti&egrave;re italienne, d&eacute;mont&eacute;e, dans son 
          dos.<br>
          <br>
          Par la fen&ecirc;tre, la lumi&egrave;re de l'apr&egrave;s-midi tombait 
          maintenant sur la nuque et les &eacute;paules de Brul&eacute;. Il posa 
          le paquet pr&egrave;s de l'Olivetti, se mit debout, essaya de se s&eacute;cher 
          les mains avec la serviette humide qu'il utilisait pour les tasses et 
          tendit le bras par-dessus le 
          <select name="select4" class="btenvoi"> -  - 
            <option value="secretaire" >secr&eacute;taire</option>
            <option value="bureau" >bureau</option>
            <option value="meuble" selected>meuble</option>
            <option value="guéridon" >gu&eacute;ridon</option>
          </select>
          . <br>
          - Enchant&eacute;. &Agrave; qui ai-je l'honneur ?<br>
          - Kustermann, 
          <select name="select5" class="btenvoi">
            <option value="Ricardo" selected>Ricardo</option>
			<option value="Manuel" selected>Manuel</option>
            <option value="Cristiàn">Cristiàn</option>
            <option value="Carlos">Carlos</option>
          </select>
          Kustermann, r&eacute;pondit le visiteur en serrant la main du 
          <select name="select6" class="btenvoi">
            <option value="policier" selected>policier</option>
            <option value="privé">privé</option>
            <option value="detective">d&eacute;tective</option>
            <option value="commissaire">commissaire</option>
          </select>
          .<br>
          Il sourit, r&eacute;v&eacute;lant quelques couronnes. Brul&eacute; calcula 
          que la vente de ces dents, du costume et de la
		       <select name="select7" class="btenvoi">
            <option value="cravate" selected>cravate</option>
            <option value="broche">broche</option>
            <option value="montre">montre</option>
            <option value="veste">veste</option>
          </select>
          lui rapporterait de quoi se la couler douce pendant deux ans.<br>
        </p>
  <p align="right"> 
                <input type='hidden' name='verif' value='1'>
                <INPUT NAME="Test" TYPE="submit" class="btenvoi" VALUE="Valider"></p>
            </form>
</td>
   <td><img src="img_jeux/spacer.gif" width="1" height="122" border="0" alt=""></td>
  </tr>
  <tr><!-- row 11 -->
   <td><img name="journ_sept_r5_c1" src="img_jeux/journ_sept_r5_c1.gif" width="40" height="309" border="0" alt=""></td>
   <td><img name="journ_sept_r5_c2" src="img_jeux/journ_sept_r5_c2.gif" width="17" height="309" border="0" alt=""></td>
   <td colspan="4"><img name="jeu_r11_c3" src="img_jeux/jeu_r11_c3.gif" width="177" height="309" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="309" border="0" alt=""></td>
  </tr>
  <tr><!-- row 12 -->
   <td colspan="13"><img name="journ_sept_r11_c1" src="img_jeux/journ_sept_r11_c1.gif" width="780" height="30" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="30" border="0" alt=""></td>
  </tr>
  <tr><!-- row 13 -->
   <td colspan="3"><img name="jeu_r13_c1" src="img_jeux/jeu_r13_c1.gif" width="104" height="40" border="0" alt=""></td>
    <td colspan="8" valign="top" bgcolor="#f1e9d4" class="unnamed3">&copy; Roberto 
      Ampuero &copy; Editorial Planeta Chilena S.A. &copy; Editions 10/18, d&eacute;partement 
      d&#8217;Univers Poche, 2003,<br>
      pour la traduction fran&ccedil;aise. Tous droits r&eacute;serv&eacute;s. 
      Toute reproduction, m&ecirc;me partielle, par quelque proc&eacute;d&eacute; 
      que ce soit, est interdite.</td>
   <td colspan="2"><img name="jeu_r13_c12" src="img_jeux/jeu_r13_c12.gif" width="112" height="40" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="40" border="0" alt=""></td>
  </tr>
  <tr><!-- row 14 -->
   <td colspan="13"><img name="jeu_r14_c1" src="img_jeux/jeu_r14_c1.gif" width="780" height="56" border="0" alt=""></td>
   <td><img src="img_jeux/spacer.gif" width="1" height="56" border="0" alt=""></td>
  </tr>
<!--   This table was automatically created with Macromedia Fireworks   -->
<!--   http://www.macromedia.com   -->
</table>
<!--========================= STOP COPYING THE HTML HERE =========================-->
</body>
</html>
