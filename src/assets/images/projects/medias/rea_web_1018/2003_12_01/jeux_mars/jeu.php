<?
//Code à réutiliser pour chaque mois
if ($verif){
	if (
($select1 == "flamand")
and ($select2 == "vibrer")
and ($select3 == "nerveux")
and ($select4 == "New York")
and ($select5 == "Saint-Sulpice")
and ($select6 == "épatant")
and ($select7 == "enthousiasme")
and ($select8 == "désabusé")
and ($select9 == "Caire")
and ($select10 == "Brusquement")
){
	require_once('../Connections/dixhuit.php');
	session_start();
	
	session_register('indicemois');
	$indicemois = $reponse03;	//A modifier selon le mois
	
	session_register('indicenum');
	$indicenum = "indice_03";	//A modifier selon le mois
	
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
<TITLE>::: 10|18 20 ans de grands détectives Journal de Mars:::</TITLE>
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=iso-8859-1">
<style type="text/css">
<!--
.fond {
	background-attachment: scroll;
	background-image:  url(fond_journal.jpg);
	background-repeat: no-repeat;
	background-position: 0px 0px;
}
.journalcont {
	font-family: "Times New Roman", Times, serif;
	font-size: 16px;
	color: #000000;
}
.titre1 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 18px;
	color: #000000;
	font-weight: bold;
}

.btenvoi {

background-color: #DCDCDC; color: #000000; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 16px; border: 1 solid #333333}

-->
</style>
<style type="text/css">
<!--
.journalcont2 {
	font-family: "Times New Roman", Times, serif;
	font-size: 13px;
	color: #000000;
}
.journalcopyright {
	font-family: "Times New Roman", Times, serif;
	font-size: 12px;
	color: #000000;
}
-->
</style>
<? echo"$rekomencez"; ?> 
<style type="text/css">
<!--
.journaltitre2 {
	font-family: "Times New Roman", Times, serif;
	font-size: 18px;
	color: #000000;
}
.foncel1 {
	font-family: "Times New Roman", Times, serif;
	font-size: 12px;
	color: #000000;
	background-color: #DCDCDC;
}
-->
</style>
</HEAD>

<body bgcolor='#973E06' leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" class="fond">
<table border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td><img name="journal_mars_decoupe_r1_c1" src="vide.gif" width="780" height="12" border="0" alt=""></td>
  </tr>
  <tr>
    <td><img name="journal_mars_decoupe_r2_c2" src="journal_mars_entete.gif" width="753" height="129" border="0" alt=""></td>
  </tr>
</table>
<TABLE width="780" BORDER="0" CELLPADDING="0" CELLSPACING="0">
  <TR> 
    <TD width="30" rowspan="2" VALIGN="TOP"><IMG SRC="vide.gif" WIDTH="30" HEIGHT="20"></TD>
    <TD width="720" ><IMG SRC="vide.gif" WIDTH="720" HEIGHT="8"></TD>
    <TD width="30" rowspan="2" VALIGN="TOP" ><IMG SRC="vide.gif" WIDTH="30" HEIGHT="223"><BR> 
    </TD>
  </TR>
  <TR>
    <TD ><form name="questionnaire" action="">
  <TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="10">
    <TR> 
      <TD class="journaltitre2"  ><div align="center">ENIGME: &quot;Myst&egrave;re 
          rue des Saints-P&egrave;res&quot;<span class="journalcont"> de Claude 
          Izner</span></div></TD>
    </TR>
    <TR> 
      <TD valign="middle"  ><div align="center"><B><IMG SRC="ligne_double.gif" WIDTH="575" HEIGHT="4"></B></div></TD>
    </TR>
    <TR> 
      <TD  ><div align="left"> 
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td><IMG SRC="vide.gif" WIDTH="30" HEIGHT="10"></td>
                    <td>
<p><B><font color="#990000">COMMENT JOUER?</font> : </B><span class="journaltitre2">Compl&eacute;ter 
                        les phrases du paragraphe suivant en choisissant le bon 
                        mot dans chaque menu d&eacute;roulant. Cliquez ensuite 
                        sur &quot;valider&quot; pour d&eacute;couvrir l&#8217;indice 
                        du mois de janvier.</span></p>
                      <p align="center"><a href="chapitre_mars.html" target="_blank"><img src="lire_passage.gif" width="196" height="15" border="0"></a>&nbsp;&nbsp;<a href="chapitre-premier-mars.pdf" target="_blank"><img src="dl_chapter.gif" width="196" height="15" border="0"></a> 
                      </p>
        </td>
                    <td><IMG SRC="vide.gif" WIDTH="30" HEIGHT="10"></td>
                  </tr>
                </table>
          </div></TD>
    </TR>
    <TR> 
      <TD ><div align="center"><IMG SRC="ligne_double.gif" WIDTH="575" HEIGHT="4"></div></TD>
    </TR>
    <TR> 
      <TD  ><div align="center"> 
                <p><span class="titre1">Extrait du premier chapitre, </span><span class="journalcont">Mercredi 
                  22 juin.</span></p>
          </div></TD>
    </TR>
    <TR> 
      <TD class="journalcont"  > <p align="justify" class="journalcont">Adoss&eacute; 
          au grillage du premier &eacute;tage de la tour, Victor Legris guettait 
          le va-et-vient des ascenseurs. Son associ&eacute; lui avait donn&eacute; 
          rendez-vous entre le restaurant 
          <select name="select1" class="foncel1">
            <option value="hongrois">hongrois </option>
            <option value="flamand">flamand </option>
            <option value="russe">russe </option>
            <option value="belge">belge </option>
            <option value="suisse">suisse </option>
          </select>
          et le bar anglo-am&eacute;ricain. La galerie &eacute;tait bond&eacute;e, 
          on sentait 
          <select name="select2" class="foncel1">
            <option value="naître"> naître </option>
            <option value="émerger"> émerger </option>
            <option value="poindre"> poindre </option>
            <option value="frémir"> frémir </option>
            <option value="vibrer"> vibrer </option>
          </select>
          un courant excitant, les femmes poussaient de petits gloussements 
          <select name="select3" class="foncel1">
            <option value="inquiets"> inquiets </option>
            <option value="nerveux"> nerveux </option>
            <option value="soucieux"> soucieux </option>
            <option value="saccadés"> saccadés </option>
            <option value="involontaires"> involontaires </option>
          </select>, les hommes se lan&ccedil;aient dans des discussions anim&eacute;es.<br>
                
          <br>
          Ceux qui revenaient pour la seconde fois affichaient des mines blas&eacute;es. 
          Les ascenseurs s'arr&ecirc;taient, d&eacute;versaient leur cargaison, 
          chargeaient, repartaient. Une procession bigarr&eacute;e s'&eacute;tirait 
          le long des escaliers. Victor desserra le n&#339;ud de sa cravate, d&eacute;boutonna 
          le col de sa chemise. Le soleil tapait dur, il avait soif. Le chapeau 
          &agrave; la main, il se faufila jusqu'&agrave; la boutique de souvenirs. 
          Un ballon bleu fr&ocirc;la son front, une voix aigrelette s'&eacute;cria 
          :<br>
          &#8211; Puisque je vous dis que c'&eacute;tait un cow-boy ! Il a sign&eacute; 
          le Livre d'or derri&egrave;re nous, il vient de 
          <select name="select4" class="foncel1">
            <option value="New York"> New York </option>
            <option value="Chicago"> Chicago </option>
            <option value="Los Angeles"> Los Angeles </option>
            <option value="Washington"> Washington </option>
            <option value="Dallas"> Dallas </option>
          </select>! Victor observa les deux gar&ccedil;ons et la fillette le nez coll&eacute;
           
          &agrave; la vitrine.<br>
          &#8211; Ce que c'est beau ! La broche avec la tour Eiffel dessus, et 
          les &eacute;ventails, et les mouchoirs brod&eacute;s...<br>
          &#8211; Pourquoi ne voulez-vous jamais me croire ? brailla le petit 
          au ballon. Je suis s&ucirc;r qu'il fait partie de la troupe de Buffalo 
          Bill !<br>
          &#8211; La barbe avec Buffalo Bill, admirez plut&ocirc;t.<br>
          L'a&icirc;n&eacute; des gamins pointait le doigt &agrave; l'horizon.<br>
          &#8211; On peut voir Chartres, vous vous rendez compte ! Cent vingt 
          kilom&egrave;tres. L&agrave;, les tours de Notre-Dame, celles de 
          <select name="select5" class="foncel1">
            <option value="Saint-Gervais">Saint-Gervais </option>
            <option value="Saint-Eustache">Saint-Eustache </option>
            <option value="Saint-Germain">Saint-Germain </option>
            <option value="Saint-Sulpice">Saint-Sulpice </option>
            <option value="Saint-Paul">Saint-Paul </option>
          </select>
          . Et puis le d&ocirc;me du Panth&eacute;on, le Val-de-Gr&acirc;ce, c'est 
          <select name="select6" class="foncel1">
            <option value="génial"> génial </option>
            <option value="extraordinaire"> extraordinaire </option>
            <option value="épatant"> épatant </option>
            <option value="merveilleux"> merveilleux </option>
            <option value="formidable"> formidable </option>
          </select>, on est des g&eacute;ants comme dans Gulliver !<br>
          
          &#8211; C'est quoi ces gros &#339;ufs &agrave; la coque ?<br>
          &#8211; L'Observatoire. Au fond, Montmartre o&ugrave; l'on construit 
          la basilique.<br>
          &#8211; On dirait un morceau de pierre ponce, grommela le petit. Dis, 
          Gontran, si je l&acirc;che mon ballon, il ira jusqu'en Am&eacute;rique 
          ?<br>
          &laquo; J'aimerais avoir leur &acirc;ge, leur 
          <select name="select7" class="foncel1">
            <option value="engouement"> engouement </option>
            <option value="fougue"> fougue </option>
            <option value="excitation"> excitation </option>
            <option value="élan"> élan </option>
            <option value="enthousiasme"> enthousiasme </option>
          </select>, pensa Victor. M&ecirc;me s'ils vivent encore cinquante ans ils ne 
          
          conna&icirc;tront jamais plus grande excitation. &raquo;<br>
          Il aper&ccedil;ut son reflet dans la vitrine de la boutique : un homme 
          de taille moyenne, mince, la trentaine, le visage tourment&eacute;, 
          la moustache drue.<br>
          &laquo; C'est moi, &ccedil;a ? Pourquoi ai-je l'air tellement 
          <select name="select8" class="foncel1">
            <option value="découragé"> découragé </option>
            <option value="désabusé"> désabusé </option>
            <option value="dépité"> dépité </option>
            <option value="maussade"> maussade </option>
            <option value="triste"> triste </option>
          </select>
          ? &raquo;<br>
          Il s'approcha du grillage, jeta un coup d'&#339;il en bas sur la fourmili&egrave;re 
          qui s'&eacute;gaillait autour du Palais des beaux-arts, se pressait 
          rue du 
          <select name="select9" class="foncel1">
            <option value="Coq"> Coq </option>
            <option value="Palais"> Palais </option>
            <option value="Temple"> Temple </option>
            <option value="Caire"> Caire </option>
            <option value="Havre"> Havre </option>
          </select>, montait &agrave; l'assaut du petit train Decauville, s'agglutinait 
          
          devant l'immense Palais de l'industrie. 
		  
		            <select name="select10" class="foncel1">
            <option value="soudain"> Soudain </option>
            <option value="toutacoup"> Tout à coup </option>
            <option value="subitement"> Subitement </option>
            <option value="Brusquement"> Brusquement </option>
            <option value="soudainement"> Soudainement </option>
          </select>, il se sentit plong&eacute;
		   
          dans un milieu hostile.</p></TD>
    </TR>
    <TR> 
      <TD  ><DIV ALIGN="RIGHT"> 
          <input type='hidden' name='verif' value='1'>
          <INPUT NAME="Test" TYPE="submit" class="btenvoi" VALUE="Valider">
        </DIV></TD>
    </TR>
  </TABLE>
</form>
</TD>
  </TR>
  <TR align="center" > 
    <TD COLSPAN="3" VALIGN="TOP" class="journalcopyright"><div align="center"><img src="lignenoire.gif" width="753" height="1"></div></TD>
  </TR>
  <TR align="center" valign="middle" > 
    <TD COLSPAN="3" align="center" VALIGN="middle" class="journalcopyright"><div align="center"> 
        <p>&copy; Editions 10/18, D&eacute;partement d'Univers Poche, 2003.<br>
          Toute reproduction, m&ecirc;me partielle, par quelque proc&eacute;d&eacute; 
          que ce soit, est interdite. </p>
      </div></TD>
  </TR>
</TABLE>
</BODY>

</HTML>

