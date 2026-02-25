<?
//Code à réutiliser pour chaque mois
if ($verif){
	if (
 ($select1 == "Fakhri")
and ($select2 == "voie")
and ($select3 == "horrible")
and ($select4 == "gredins")
and ($select5 == "Opera")
and ($select6 == "sceptique")
and ($select7 == "sur")
and ($select8 == "marmonna")
and ($select9 == "brumeux")
and ($select10 == "radieux")
){
	require_once('../Connections/dixhuit.php');
	session_start();
	
	session_register('indicemois');
	$indicemois = $reponse05;	//A modifier selon le mois
	
	session_register('indicenum');
	$indicenum = "indice_05";	//A modifier selon le mois
	
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
<TITLE>::: 10|18 20 ans de grands détectives Journal de Mai:::</TITLE>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-1">
<style type="text/css">
<!--
td {
	font-family: "Times New Roman", Times, serif;
	font-size: 14px;
	color: #000000;
	background-color: #BDB69D;

}

.btenvoi {
background-color: BDB69D; color: #000000; font-family: "Times New Roman", Times, serif; font-weight: normal; font-size: 14px; border: 1 solid #333333}
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
<body bgcolor='#973E06' leftmargin="0" topmargin="0" marginwidth="0" marginheight="0"><form name="questionnaire" action="">
<table border="0" cellpadding="0" cellspacing="0" width="780">
<!-- fwtable fwsrc="journal_mai_egypte_jeu.png" fwbase="journal_mai_egypte_jeu.png" fwstyle="Dreamweaver" fwdocid = "742308039" fwnested="0" -->
  <tr>
<!-- Shim row, height 1. -->
   <td><img src="images_jeu/spacer.gif" width="34" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="7" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="59" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="96" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="11" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="50" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="20" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="85" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="12" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="112" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="8" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="35" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="10" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="129" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="26" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="7" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="23" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="55" height="1" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="1" border="0" alt=""></td>
  </tr>

  <tr><!-- row 1 -->
   <td rowspan="2"><img name="journal_mai_egypte_jeu_r1_c1" src="images_jeu/journal_mai_egypte_jeu_r1_c1.jpg" width="34" height="62" border="0" alt=""></td>
   <td colspan="15"><img name="journal_mai_egypte_jeu_r1_c2" src="images_jeu/journal_mai_egypte_jeu_r1_c2.jpg" width="667" height="30" border="0" alt=""></td>
   <td rowspan="2" colspan="3"><img name="journal_mai_egypte_jeu_r1_c17" src="images_jeu/journal_mai_egypte_jeu_r1_c17.jpg" width="79" height="62" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="30" border="0" alt=""></td>
  </tr>
  <tr><!-- row 2 -->
   <td colspan="15"><img name="journal_mai_egypte_jeu_r2_c2" src="images_jeu/journal_mai_egypte_jeu_r2_c2.gif" width="667" height="32" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="32" border="0" alt=""></td>
  </tr>
  <tr><!-- row 3 -->
   <td rowspan="12"><img name="journal_mai_egypte_jeu_r3_c1" src="images_jeu/journal_mai_egypte_jeu_r3_c1.jpg" width="34" height="1119" border="0" alt=""></td>
   <td colspan="2"><img name="journal_mai_egypte_jeu_r3_c2" src="images_jeu/journal_mai_egypte_jeu_r3_c2.gif" width="66" height="82" border="0" alt=""></td>
   <td colspan="11"><img name="journal_mai_egypte_jeu_r3_c4" src="images_jeu/journal_mai_egypte_jeu_r3_c4.jpg" width="568" height="82" border="0" alt=""></td>
   <td colspan="3"><img name="journal_mai_egypte_jeu_r3_c15" src="images_jeu/journal_mai_egypte_jeu_r3_c15.gif" width="56" height="82" border="0" alt=""></td>
   <td rowspan="9" colspan="2"><img name="journal_mai_egypte_jeu_r3_c18" src="images_jeu/journal_mai_egypte_jeu_r3_c18.jpg" width="56" height="971" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="82" border="0" alt=""></td>
  </tr>
  <tr><!-- row 4 -->
   <td colspan="5"><img name="journal_mai_egypte_jeu_r4_c2" src="images_jeu/journal_mai_egypte_jeu_r4_c2.gif" width="223" height="22" border="0" alt=""></td>
   <td><img name="journal_mai_egypte_jeu_r4_c7" src="images_jeu/journal_mai_egypte_jeu_r4_c7.gif" width="20" height="22" border="0" alt=""></td>
   <td colspan="3"><img name="journal_mai_egypte_jeu_r4_c8" src="images_jeu/journal_mai_egypte_jeu_r4_c8.gif" width="209" height="22" border="0" alt=""></td>
   <td><img name="journal_mai_egypte_jeu_r4_c11" src="images_jeu/journal_mai_egypte_jeu_r4_c11.gif" width="8" height="22" border="0" alt=""></td>
   <td colspan="6"><img name="journal_mai_egypte_jeu_r4_c12" src="images_jeu/journal_mai_egypte_jeu_r4_c12.gif" width="230" height="22" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="22" border="0" alt=""></td>
  </tr>
  <tr><!-- row 5 -->
   <td colspan="16"><img name="journal_mai_egypte_jeu_r5_c2" src="images_jeu/journal_mai_egypte_jeu_r5_c2.gif" width="690" height="136" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="136" border="0" alt=""></td>
  </tr>
  <tr><!-- row 6 -->
   <td colspan="15" valign="top" background="images_jeu/journal_mai_egypte_jeu_r6_c2.jpg"><p>Compléter les phrases du paragraphe suivant en choisissant le bon mot dans chaque menu déroulant. Cliquez ensuite sur "valider" pour découvrir l’indice du mois de mai.</p></td>
   <td rowspan="5"><img name="journal_mai_egypte_jeu_r6_c17" src="images_jeu/journal_mai_egypte_jeu_r6_c17.gif" width="23" height="689" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="60" border="0" alt=""></td>
  </tr>
  <tr><!-- row 7 -->
   <td colspan="15"><img name="journal_mai_egypte_jeu_r7_c2" src="images_jeu/journal_mai_egypte_jeu_r7_c2.gif" width="667" height="13" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="13" border="0" alt=""></td>
  </tr>
  <tr><!-- row 8 -->
   <td><img name="journal_mai_egypte_jeu_r8_c2" src="images_jeu/journal_mai_egypte_jeu_r8_c2.gif" width="7" height="17" border="0" alt=""></td>
   <td colspan="2"><a href="javascript:GoJournal()"><img name="journal_mai_egypte_jeu_r8_c3" src="images_jeu/journal_mai_egypte_jeu_r8_c3.gif" width="155" height="17" border="0" alt="Revenir au journal"></a></td>
   <td><img name="journal_mai_egypte_jeu_r8_c5" src="images_jeu/journal_mai_egypte_jeu_r8_c5.gif" width="11" height="17" border="0" alt=""></td>
   <td colspan="3"><a href="chapitre_mai.html" target="_blank"><img name="journal_mai_egypte_jeu_r8_c6" src="images_jeu/journal_mai_egypte_jeu_r8_c6.gif" width="155" height="17" border="0" alt="Lire le premier chapitre en ligne"></a></td>
   <td><img name="journal_mai_egypte_jeu_r8_c9" src="images_jeu/journal_mai_egypte_jeu_r8_c9.gif" width="12" height="17" border="0" alt=""></td>
   <td colspan="3"><a href="chapitre-premier-mai.pdf" target="_blank"><img name="journal_mai_egypte_jeu_r8_c10" src="images_jeu/journal_mai_egypte_jeu_r8_c10.gif" width="155" height="17" border="0" alt="Télécharger au Format PDF"></a></td>
   <td><img name="journal_mai_egypte_jeu_r8_c13" src="images_jeu/journal_mai_egypte_jeu_r8_c13.gif" width="10" height="17" border="0" alt=""></td>
   <td colspan="2"><a href="javascript:window.close();"><img name="journal_mai_egypte_jeu_r8_c14" src="images_jeu/journal_mai_egypte_jeu_r8_c14.gif" width="155" height="17" border="0" alt="Femer la fenêtre"></a></td>
   <td><img name="journal_mai_egypte_jeu_r8_c16" src="images_jeu/journal_mai_egypte_jeu_r8_c16.gif" width="7" height="17" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="17" border="0" alt=""></td>
  </tr>
  <tr><!-- row 9 -->
   <td colspan="15"><img name="journal_mai_egypte_jeu_r9_c2" src="images_jeu/journal_mai_egypte_jeu_r9_c2.gif" width="667" height="31" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="31" border="0" alt=""></td>
  </tr>
  <tr><!-- row 10 -->
   <td rowspan="2"><img name="journal_mai_egypte_jeu_r10_c2" src="images_jeu/journal_mai_egypte_jeu_r10_c2.gif" width="7" height="610" border="0" alt=""></td>
   <td colspan="14" valign="top" background="images_jeu/journal_mai_egypte_jeu_r10_c3.jpg">   <div align="left"> 
        <p> La voiture &eacute;tait tir&eacute;e par deux chevaux et pouvait tout 
          au plus admettre trois passagers. McPhee et Owen se tass&egrave;rent 
          de part et d'autre de 
          <select name="select1" class="btenvoi">
            <option value="Garvin" selected>Garvin</option>
            <option value="Mahmoud">Mahmoud</option>
            <option value="Fakhri">Fakhri</option>
            <option value="Nouri">Nouri</option>
            <option value="Bimbashi">Bimbashi</option>
          </select>,
           et, apr&egrave;s de grandes d&eacute;monstrations de h&acirc;te, le 
          cocher r&eacute;ussit &agrave; faire avancer les chevaux &agrave; un 
          pas r&eacute;gulier le long de la large 
          <select name="select2" class="btenvoi">
            <option value="rue" selected>rue</option>
            <option value="voie">voie</option>
            <option value="avenue">avenue</option>
            <option value="chaussée">chaussée</option>
            <option value="artère">artère</option>
          </select>
          que constituait la sharia Mohammed Ali. <br>
          - Et maintenant vous pourriez peut-&ecirc;tre me raconter ce qui est 
          exactement arriv&eacute; et o&ugrave; &ccedil;a s'est pass&eacute;, 
          dit Owen. <br>
          - On a tir&eacute; sur Nouri Pacha, r&eacute;pondit Fakhri. C'&eacute;tait 
          <select name="select3" class="btenvoi">
            <option value="horrible" selected>horrible</option>
            <option value="affreux">affreux</option>
            <option value="effrayant">effrayant</option>
            <option value="terrible">terrible</option>
            <option value="épouvantable">épouvantable</option>
          </select>.
           Je suis vraiment navr&eacute;. C'est un de mes amis, vous savez, ajouta-t-il 
          en jetant un regard en coin sur Owen. <br>
          - Un brave type, d&eacute;clara McPhee avec solidarit&eacute;, mais 
          il est vrai que McPhee qualifiait de braves types des tas de gens qu'Owen 
          savait &ecirc;tre de fieff&eacute;s 
          <select name="select4" class="btenvoi">
            <option value="brigands" selected>brigands</option>
            <option value="gredins">gredins</option>
            <option value="voyous">voyous</option>
            <option value="criminels">criminels</option>
            <option value="scélérats">scélérats</option>
          </select>.
           <br>
          - Et o&ugrave; est-ce que &ccedil;a s'est pass&eacute; ? demanda le 
          mamour zapt.<br>
          - Sur la place de l' 
          <select name="select5" class="btenvoi">
            <option value="Etoile" selected>Etoile</option>
            <option value="Océan">Oc&eacute;an</option>
            <option value="Opera">Op&eacute;ra</option>
            <option value="Indépendance">Ind&eacute;pendance</option>
            <option value="Afrique">Afrique</option>
          </select>,
           pr&eacute;cisa Fakhri, juste devant mes yeux. Je n'arrivais pas &agrave; 
          le croire. Je n'arrivais vraiment pas &agrave; le croire. <br>
          - Vous n'avez pas vu le coup de feu ? poursuivit Owen en mettant l'accent 
          sur le mot &quot; vu &quot; tout en esp&eacute;rant qu'il n'avait pas 
          pris un ton trop 
          <select name="select6" class="btenvoi">
            <option value="blasé" selected>blasé</option>
            <option value="incrédule">incrédule</option>
            <option value="sceptique">sceptique</option>
            <option value="désintéressé">désintéressé</option>
            <option value="indifférent">indifférent</option>
          </select>. 
          <br>
          - Si. Si, je l'ai vu. <br>
          Fakhri h&eacute;sita.<br>
          - Du moins, je crois. J'&eacute;tais s&ucirc;r de l'avoir vu.<br>
          Il coula de nouveau un regard vers Owen. <br>
          - Maintenant je n'en suis plus aussi 
          <select name="select7" class="btenvoi">
            <option value="certain" selected>certain</option>
            <option value="convaincu">convaincu</option>
            <option value="sur">s&ucirc;r</option>
            <option value="formel">formel</option>
            <option value="tranquille">tranquille</option>
          </select>.
          <br>
          - Allons, dit McPhee, compatissant comme toujours. Vous l'avez certainement 
          vu. Vous m'avez tout racont&eacute;. <br>
          - Oui. Je sais bien. Je vous ai racont&eacute; ce que je croyais avoir 
          vu. Mais quand le capitaine Car... (Fakhri 
          <select name="select8" class="btenvoi">
            <option value="grommela" selected>grommela</option>
            <option value="murmura">murmura</option>
            <option value="bafouilla">bafouilla</option>
            <option value="balbutia">balbutia</option>
            <option value="marmonna">marmonna</option>
          </select>
          quelques syllabes inintelligibles) me pose la question &agrave; sa mani&egrave;re 
          incisive et que j'essaie de me rappeler les d&eacute;tails, ce qui semblait 
          clair devient soudain 
          <select name="select9" class="btenvoi">
            <option value="confus" selected>confus</option>
            <option value="embrouillé">embrouillé</option>
            <option value="brumeux">brumeux</option>
            <option value="flou">flou</option>
            <option value="nébuleux">nébuleux</option>
          </select>.
           <br>
          - Bon, c'est d&eacute;j&agrave; un d&eacute;but, lan&ccedil;a Owen, 
          l'air 
          <select name="select10" class="btenvoi">
            <option value="content" selected>content</option>
            <option value="hilare">hilare</option>
            <option value="réjoui">réjoui</option>
            <option value="serein">serein</option>
            <option value="radieux">radieux</option>
          </select>.
           <br>
          La plupart du temps, le probl&egrave;me avec les t&eacute;moins &eacute;gyptiens 
          &eacute;tait, non pas qu'ils ne se souvenaient pas, mais qu'ils se souvenaient 
          trop bien.</p>
        <p align="right"> 
          <input type='hidden' name='verif' value='1'>
          <INPUT NAME="Test" TYPE="submit" class="btenvoi" VALUE="Valider">
        </p>
      </div></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="568" border="0" alt=""></td>
  </tr>
  <tr><!-- row 11 -->
   <td colspan="15"><img name="journal_mai_egypte_jeu_r11_c3" src="images_jeu/journal_mai_egypte_jeu_r11_c3.gif" width="683" height="42" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="42" border="0" alt=""></td>
  </tr>
  <tr><!-- row 12 -->
   <td colspan="15"><img name="journal_mai_egypte_jeu_r12_c2" src="images_jeu/journal_mai_egypte_jeu_r12_c2.gif" width="667" height="25" border="0" alt=""></td>
   <td colspan="2"><img name="journal_mai_egypte_jeu_r12_c17" src="images_jeu/journal_mai_egypte_jeu_r12_c17.gif" width="24" height="25" border="0" alt=""></td>
   <td rowspan="3"><img name="journal_mai_egypte_jeu_r12_c19" src="images_jeu/journal_mai_egypte_jeu_r12_c19.jpg" width="55" height="148" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="25" border="0" alt=""></td>
  </tr>
  <tr><!-- row 13 -->
   <td colspan="16"><img name="journal_mai_egypte_jeu_r13_c2" src="images_jeu/journal_mai_egypte_jeu_r13_c2.gif" width="690" height="69" border="0" alt=""></td>
   <td rowspan="2"><img name="journal_mai_egypte_jeu_r13_c18" src="images_jeu/journal_mai_egypte_jeu_r13_c18.jpg" width="1" height="123" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="69" border="0" alt=""></td>
  </tr>
  <tr><!-- row 14 -->
   <td colspan="16"><img name="journal_mai_egypte_jeu_r14_c2" src="images_jeu/journal_mai_egypte_jeu_r14_c2.jpg" width="690" height="54" border="0" alt=""></td>
   <td><img src="images_jeu/spacer.gif" width="1" height="54" border="0" alt=""></td>
  </tr>
<!--   This table was automatically created with Macromedia Fireworks   -->
<!--   http://www.macromedia.com   -->
</table></form>
</BODY>
</HTML>