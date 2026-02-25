<?
//Code à réutiliser pour chaque mois
if ($verif){
	if (
 ($select1 == "dangereux")
and ($select2 == "hurla")
and ($select3 == "titubant")
and ($select4 == "indistincts")
and ($select5 == "courtoise")
and ($select6 == "extreme")
and ($select7 == "etincelantes")
and ($select8 == "abrupte")



){
	require_once('../Connections/dixhuit.php');
	session_start();
	
	session_register('indicemois');
	$indicemois = $reponse07;	//A modifier selon le mois
	
	session_register('indicenum');
	$indicenum = "indice_07";	//A modifier selon le mois
	
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
<TITLE>::: 10|18 20 ans de grands détectives Journal de Juillet:::</TITLE>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-1">
<style type="text/css">
<!--
td {
	font-family: "Times New Roman", Times, serif;
	font-size: 14px;
	color: #000000;
	background-color: #F7F5F2;

}

.btenvoi {
background-color: #CCCCCC; color: #000000; font-family: "Times New Roman", Times, serif; font-weight: normal; font-size: 14px; border: 1 solid #333333}
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
<style type="text/css">
<!--
.unnamed1 {
	font-family: "Times New Roman", Times, serif;
	font-size: 24px;
	color: #1F1F1F;
}
.unnamed2 {
	font-family: "Times New Roman", Times, serif;
	font-size: 16px;
	color: #1F1F1F;
}
-->
</style>
</HEAD>
<body bgcolor='#973E06' leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<table width="780" border="0" cellpadding="0" cellspacing="0">
  <tr> 
    <td colspan="3"><img src="top.gif" width="780" height="155"></td>
  </tr>
  <tr> 
    <td><img src="left_1.gif" width="46" height="101"></td>
    <td><img src="titre.gif" width="678" height="101"></td>
    <td><img src="right.gif" width="56" height="101"></td>
  </tr>
  <tr> 
    <td><img src="left_2.gif" width="46" height="219"></td>
    <td><table border="0" cellpadding="0" cellspacing="0" bgcolor="#F2F6F0">
        <tr> 
          <td valign="top" class="unnamed1"><div align="center">Comment jouer 
              ?</div></td>
          <td rowspan="4" align="right"><img src="couv.gif" width="195" height="219"></td>
        </tr>
        <tr> 
          <td><div align="justify"><span class="unnamed2"><font size="5"> Compléter 
              les phrases du paragraphe suivant en choisissant le bon mot dans 
              chaque menu déroulant. Cliquez ensuite sur "valider" pour découvrir 
              l’indice du mois de juillet.</font> </span></div></td>
        </tr>
        <tr> 
          <td><img name="journal_mai_egypte_jeu_r8_c5" src="vide.gif" width="483" height="8" border="0" alt=""></td>
        </tr>
        <tr> 
          <td align="center" valign="middle"><table border="0" cellpadding="0" cellspacing="0">
              <tr> 
                <!-- row 8 -->
                <td><img src="vide.gif" width="7" height="17" border="0" alt=""></td>
                <td><a href="javascript:GoJournal()"><img name="journal_mai_egypte_jeu_r8_c3" src="retour_journal.gif" width="155" height="16" border="0" alt="Revenir au journal"></a></td>
                <td><img name="journal_mai_egypte_jeu_r8_c5" src="vide.gif" width="11" height="17" border="0" alt=""></td>
                <td>&nbsp;</td>
                <td><img src="vide.gif" width="12" height="17" border="0" alt=""></td>
                <td><a href="premier_chap.pdf" target="_blank"><img name="journal_mai_egypte_jeu_r8_c10" src="lire_pdf.gif" width="155" height="16" border="0" alt="Télécharger au Format PDF"></a></td>
                <td><img src="vide.gif" width="10" height="17" border="0" alt=""></td>
                <td>&nbsp;</td>
              </tr>
              <tr> 
                <td colspan="8"><img src="vide.gif" width="7" height="5" border="0" alt=""></td>
              </tr>
              <tr> 
                <td>&nbsp;</td>
                <td><a href="chapitre_juillet.html" target="_blank"><img name="journal_mai_egypte_jeu_r8_c6" src="lire_html.gif" width="155" height="16" border="0" alt="Lire le premier chapitre en ligne"></a></td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td><a href="javascript:window.close();"><img name="journal_mai_egypte_jeu_r8_c14" src="fermer_fenetre.gif" width="155" height="16" border="0" alt="Femer la fenêtre"></a></td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            </table></td>
        </tr>
      </table></td>
    <td><img src="right.gif" width="56" height="219"></td>
  </tr>
  <tr> 
    <td colspan="3"><img src="bando_saur.gif" width="780" height="43"></td>
  </tr>
  <tr> 
    <td valign="bottom" background="left_5.gif"><img src="left_5.gif" width="46" height="336"></td>
    <td bgcolor="F2F6F0"><table width="100%" border="0" cellpadding="6" cellspacing="0" bgcolor="F2F6F0">
        <tr> 
          <td class="unnamed2"><form name="questionnaire" action="">
              Non loin de l&agrave;, la route de Diddlestock croisait celle d'Ottercombe, 
              masqu&eacute;e par les haies et les talus. C'&eacute;tait un carrefour 
              <select name="select1" class="btenvoi">
                <option value="délicat" selected>délicat</option>
                <option value="glissant">glissant</option>
                <option value="dangereux">dangereux</option>
                <option value="meurtrier">meurtrier</option>
                <option value="risqué">risqué</option>
              </select>
              . Voil&agrave;, il y &eacute;tait. Watchman donna un coup d'avertisseur 
              et, l'instant suivant, &eacute;crasa la p&eacute;dale de frein. 
              La voiture d&eacute;rapa, fit une embard&eacute;e et alla finir 
              sa course contre le talus, le pare-chocs avant coinc&eacute; dans 
              le pare-chocs arri&egrave;re d'une petite auto &agrave; deux places.<br>
              Watchman se pencha par la vitre.<br>
              - &Ccedil;a ne va pas, non ? 
              <select name="select2" class="btenvoi">
                <option value="aboya" selected>aboya</option>
                <option value="hurla">hurla</option>
                <option value="cria">cria</option>
                <option value="rugit">rugit</option>
                <option value="glapit">glapit</option>
              </select>
              -t-il.<br>
              La petite auto eut un soubresaut convulsif, mais le pare-chocs la 
              retint prisonni&egrave;re.<br>
              - Arr&ecirc;tez ! rugit Watchman.<br>
              Il descendit et se dirigea en 
              <select name="select3" class="btenvoi">
                <option value="chancelant" selected>chancelant</option>
                <option value="tremblant">tremblant</option>
                <option value="titubant">titubant</option>
                <option value="trébuchant">trébuchant</option>
                <option value="vacillant">vacillant</option>
              </select>
              vers l'autre voiture.<br>
              Il faisait si sombre entre les haies que les traits du chauffeur, 
              dissimul&eacute;s par le toit de l'auto et les bords de son chapeau, 
              demeuraient 
              <select name="select4" class="btenvoi">
                <option value="flous" selected>flous</option>
                <option value="imprécis">imprécis</option>
                <option value="invisibles">invisibles</option>
                <option value="obscurs">obscurs</option>
                <option value="vagues">vagues</option>
                <option value="indistincts">indistincts</option>
              </select>
              . Apparemment, il &eacute;tait sur le point d'ouvrir la porti&egrave;re 
              lorsque Watchman s'approcha de lui, nu-t&ecirc;te. Alors il sembla 
              changer d'avis. Il s'enfon&ccedil;a dans son si&egrave;ge et rabattit 
              le bord de son couvre-chef.<br>
              - Vous &ecirc;tes malade ou quoi, commen&ccedil;a Watchman, &agrave; 
              foncer ainsi sur une route de campagne avec votre bolide ? Vous 
              ne pouvez pas klaxonner, non ? Vous avez surgi derri&egrave;re ce 
              virage vingt fois plus vite que... Comment ?<br>
              L'homme avait marmonn&eacute; quelque chose.<br>
              - Comment ? r&eacute;p&eacute;ta Watchman.<br>
              - Je suis vraiment navr&eacute;. Je ne vous ai pas entendu jusqu'au 
              moment o&ugrave;...<br>
              Sa voix mourut.<br>
              - Bon, on ne va pas passer la nuit ici. Je ne crois pas qu'il y 
              ait beaucoup de d&eacute;g&acirc;ts.<br>
              L'homme ne broncha pas, et l'irritation de Watchman s'accrut.<br>
              - Venez donc me donner un coup de main.<br>
              - Oui, bien s&ucirc;r. Naturellement.<br>
              Curieusement, la voix &eacute;tait fort 
              <select name="select5" class="btenvoi">
                <option value="affable" selected>affable</option>
                <option value="courtoise">courtoise</option>
                <option value="aimable">aimable</option>
                <option value="distinguée">distinguée</option>
                <option value="élégante">élégante</option>
              </select>
              .<br>
              - Je suis d&eacute;sol&eacute;. Vraiment d&eacute;sol&eacute;. Tout 
              cela est ma faute.<br>
              Le voyant battre sa coulpe, Watchman se radoucit.<br>
              - Allez, fit-il, ce n'est pas bien grave. Vous venez ?<br>
              L'homme descendit par l'autre porti&egrave;re et contourna la voiture. 
              Quand Watchman l'eut rejoint, il se penchait sur les pare-chocs 
              entrelac&eacute;s.<br>
              - Je peux soulever la mienne, si cela ne vous ennuie pas de reculer 
              de quelques centim&egrave;tres, d&eacute;clara l'homme.<br>
              Ses larges mains calleuses agripp&egrave;rent le pare-chocs de son 
              auto.<br>
              - Entendu, acquies&ccedil;a Watchman.<br>
              Ils r&eacute;ussirent &agrave; s&eacute;parer les pare-chocs sans 
              trop de peine.<br>
              - C'est bon ! cria Watchman &agrave; travers la vitre.<br>
              L'homme l&acirc;cha sa voiture et fouilla dans ses poches avec des 
              gestes mal assur&eacute;s.<br>
              - Cigarette ? proposa Watchman, lui tendant son propre paquet.<br>
              - Merci beaucoup, r&eacute;pondit l'homme. Les flammes de l'enfer 
              !<br>
              Il h&eacute;sita, puis prit une cigarette.<br>
              - Vous voulez du feu ?<br>
              - J'en ai, merci.<br>
              Se d&eacute;tournant, il cacha l'allumette dans ses mains et se 
              baissa avec une pr&eacute;caution 
              <select name="select6" class="btenvoi">
                <option value="démesurée" selected>démesurée</option>
                <option value="exagérée">exagérée</option>
                <option value="extreme">extrême</option>
                <option value="infinie">infinie</option>
                <option value="disproportionnée">disproportionnée</option>
              </select>
              , comme si un coup de vent mena&ccedil;ait d'&eacute;teindre la 
              flamme.<br>
              - Vous allez &agrave; Ottercombe, j'imagine ? dit Watchman.<br>
              L'autre r&eacute;v&eacute;la une rang&eacute;e de dents 
              <select name="select7" class="btenvoi">
                <option value="brillantes" selected>brillantes</option>
                <option value="éblouissantes">éblouissantes</option>
                <option value="etincelantes">étincelantes</option>
                <option value="resplendissantes">resplendissantes</option>
                <option value="scintillantes">scintillantes</option>
              </select>
              .<br>
              - Cela en a l'air, hein ? D&eacute;sol&eacute; de ne pas pouvoir 
              vous laisser passer devant.<br>
              - A la vitesse o&ugrave; vous roulez, je ne risque pas de vous coller 
              aux talons, sourit Watchman.<br>
              - En effet, opina l'homme.<br>
              Il s'&eacute;carta, et sa voix parut venir de loin.<br>
              - Je ne me mettrai pas en travers de votre chemin. Bonsoir.<br>
              - Bonsoir.<br>
              L'absurde petite auto se montra tout &agrave; fait &agrave; la hauteur. 
              Elle bondit sur la chauss&eacute;e et disparut dans la descente 
              <select name="select8" class="btenvoi">
                <option value="ardue" selected>ardue</option>
                <option value="escarpée">escarpée</option>
                <option value="abrupte">abrupte</option>
                <option value="raide">raide</option>
                <option value="à pic">à pic</option>
              </select>
              . Watchman suivit plus prudemment et, quand il contourna la colline, 
              l'autre voiture avait d&eacute;j&agrave; pris le tournant suivant. 
              Il entendit un coup de klaxon lointain, comme une moquerie.</p> 
              <p align="right"> 
                <input type='hidden' name='verif' value='1'>
                <INPUT NAME="Test" TYPE="submit" class="btenvoi" VALUE="Valider">
              </p>
            </form></td>
        </tr>
      </table></td>
    <td valign="bottom" background="right5.gif"><img src="right5.gif" width="56" height="336"></td>
  </tr>
  <tr> 
    <td valign="top"><img src="left_4.gif" width="46" height="26"></td>
    <td>&nbsp;</td>
    <td valign="top"><img src="right4.gif" width="56" height="26"></td>
  </tr>
  <tr> 
    <td colspan="3"><img src="bottom2.gif" width="780" height="104"></td>
  </tr>
</table>
</BODY>
</HTML>