<?
//Code à réutiliser pour chaque mois
if ($verif){
	if ( ($select1 == "Féofilaktovitch") and ($select2 == "raffiné") and ($select3 == "égorgé") and ($select4 == "vert") and ($select5 == "appétissante") and ($select6 == "procès-verbal") and ($select7 == "violon") and ($select8 == "infaillible") and ($select9 == "Fandorine") and ($select10 == "ivrogne")){

//	if ( $select1 == "Féofilaktovitch"){
	require_once('../Connections/dixhuit.php');
	session_start();
	
	session_register('indicemois');
	$indicemois = $reponse01;	//A modifier selon le mois
	
	session_register('indicenum');
	$indicenum = "indice_01";	//A modifier selon le mois
	
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

<TITLE>::: 10|18 20 ans de grands détectives Journal de Janvier:::</TITLE>
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

<? echo"$rekomencez"; ?>

</HEAD>

<BODY BGCOLOR="#933f03" TEXT="#000000" marginwidth="0" marginheight="0" topmargin="0" leftmargin="0" LINK="#FFFFFF" VLINK="#FFFFFF" ALINK="#FFFFFF">

<TABLE WIDTH="780" BORDER="0" CELLSPACING="0" CELLPADDING="0"><TR><TD VALIGN="TOP" BGCOLOR="BDAEA5"><IMG SRC="a.gif" WIDTH="86" HEIGHT="36"></TD><TD BGCOLOR="BDAEA5"><IMG SRC="b.gif" WIDTH="596" HEIGHT="36"></TD><TD BGCOLOR="BDAEA5" VALIGN="TOP"><IMG SRC="c.gif"></TD></TR><TR><TD VALIGN="TOP" background="l_1.gif" BGCOLOR="BDAEA5"><IMG SRC="a3.gif" WIDTH="86" HEIGHT="42"><BR><IMG SRC="a4.gif" WIDTH="86" HEIGHT="14"><BR><IMG SRC="a5.gif" WIDTH="86" HEIGHT="227"><BR><IMG SRC="barre_g.gif" WIDTH="86" HEIGHT="223"><BR><IMG SRC="l_1.gif" WIDTH="86" HEIGHT="20"></TD><TD BGCOLOR="BDAEA5"><form name="questionnaire" action=""><TABLE WIDTH="100%" BORDER="0" CELLSPACING="0" CELLPADDING="10"><TR><TD CLASS="text4" BGCOLOR="BDAEA5"><DIV ALIGN="CENTER"><B CLASS="text5">ENIGME: 

&quot;AZAZEL&quot; de BORIS AKOUNINE</B></DIV></TD></TR><TR><TD CLASS="text1" BGCOLOR="BDAEA5"><B><IMG SRC="ligne_double.gif" WIDTH="575" HEIGHT="4"></B></TD></TR><TR>
            <TD BGCOLOR="BDAEA5" class="text6"><div align="left">
                <p><span class="text7"><B><font color="#990000">COMMENT JOUER?</font> 
                  : </B>Compl&eacute;ter les phrases du paragraphe suivant en 
                  choisissant le bon mot dans chaque menu d&eacute;roulant. Cliquez 
                  ensuite sur &quot;valider&quot; pour d&eacute;couvrir l&#8217;indice 
                  du mois de janvier.</span></p>
                <p align="center"> <a href="chapitre_janv.html" target="_blank"><img src="lire_passage.gif" width="196" height="15" border="0"></a> 
                  <a href="chapitre-premier-azazel.pdf" target="_blank"><img src="dl_chapter.gif" width="196" height="15" border="0"></a> 
                </p>
              </div></TD>
          </TR><TR><TD CLASS="text1" BGCOLOR="BDAEA5"><B><IMG SRC="ligne_double.gif" WIDTH="575" HEIGHT="4"></B></TD></TR><TR>
            <TD BGCOLOR="BDAEA5" class="text6">Extrait 
              du premier chapitre, <BR>
              o&ugrave; il est question d'une cynique extravagance.</FONT></TD>
          </TR><TR><TD CLASS="text1" BGCOLOR="BDAEA5"><DIV ALIGN="justify">Cela 

ferait bientôt trois semaines que le jeune monsieur Fandorine avait pris ses fonctions 

à la police judiciaire, mais Ksavéri <select name="select1"> <option value="Néglinnaïa"> 

Néglinnaïa </option> <option value="Grouchine"> Grouchine </option> <option value="Sémionovitch"> 

Sémionovitch </option> <option value="Golopousov"> Golopousov </option> <option value="Vartanov"> 

Vartanov </option> <option value="Féofilaktovitch"> Féofilaktovitch </option></select>, 

limier expérimenté et rusé matois, avait déjà acquis la ferme conviction qu'il 

n'y avait pas grand-chose à attendre du garçon. Bien trop sensible, bien trop 

<select name="select2"> <option value="compliqué"> compliqué </option> <option value="précieux"> 

précieux </option> <option value="riche"> riche </option> <option value="raffiné"> 

raffiné </option> <option value="soigné"> soigné </option> <option value="sophistiqué"> 

sophistiqué </option></select>. Une fois, au cours de sa première semaine, Grouchine 

l'avait emmené sur les lieux d'un crime (c'était lorsqu'on avait <select name="select3"> 

<option value="assassiné"> assassiné </option> <option value="étranglé"> étranglé 

</option> <option value="poignardé"> poignardé </option> <option value="tué"> 

tué </option> <option value="abattu"> abattu </option> <option value="égorgé"> 

égorgé </option> </select> Kroupnova, une femme de marchand). <BR><BR>Fandorine 

avait regardé la morte, puis il était devenu tout <select name="select4"> <option value="pâle"> 

pâle </option> <option value="blanc"> blanc </option> <option value="gris"> gris 

</option> <option value="livide"> livide </option> <option value="vert"> vert 

</option> <option value="blême"> blême </option></select> et avait dû sortir en 

se tenant aux murs. Il fallait reconnaître que la vue de la femme n'était guère 

<select name="select5"> <option value="agréable"> agréable </option> <option value="appétissante"> 

appétissante </option> <option value="attirante"> attirante </option> <option value="séduisante"> 

séduisante </option> <option value="gracieuse"> gracieuse </option> <option value="engageante"> 

engageante </option> </select> - gorge tranchée d'une oreille à l'autre, langue 

pendante, yeux exorbités, tout cela, naturellement, au milieu d'une mare de sang. 

Résultat : Ksavéri Féofilaktovitch avait dû lui-même mener l'enquête et dresser 

le <select name="select6"> <option value="constat"> constat </option> <option value="protocole"> 

protocole </option> <option value="procès-verbal"> procès-verbal </option> <option value="rapport"> 

rapport </option> <option value="compte-rendu"> compte-rendu </option> <option value="bulletin"> 

bulletin </option></select>. A vrai dire, l'affaire s'était révélée assez simple. 

Le portier Kousykine avait des petits yeux tellement fuyants que Ksavéri Féofilaktovitch 

avait immédiatement ordonné au sergent de ville d'attraper l'homme par le collet 

et de le flanquer au <select name="select7">
<option value="cachot"> cachot </option> 
<option value="violon"> violon </option>
<option value="trou"> trou </option>
<option value="coin"> coin </option>
<option value="cabanon"> cabanon </option> </select>


. Kousykine était sous les verrous 

depuis deux semaines. <BR><BR>Il niait, mais peu importait, il finirait par reconnaître 

les faits ; nul autre que lui n'avait intérêt à assassiner la marchande - en trente 

ans de service, le commissaire s'était forgé un flair <select name="select8"> 

<option value="certain"> certain </option> <option value="efficace"> efficace 

</option> <option value="infaillible"> infaillible </option> <option value="manifeste"> 

manifeste </option> <option value="précis"> précis </option> <option value="irrécusable"> 

irrécusable </option> </select>. Quant à <select name="select9"> <option value="Grouchine"> 

Grouchine </option> <option value="Fandorine"> Fandorine </option> <option value="Ksavéri"> 

Ksavéri </option> <option value="Esther"> Esther </option> <option value="Fiodor"> 

Fiodor </option></select>, il serait très utile dans un bureau. Il était consciencieux, 

écrivait sans fautes, connaissait les langues, était intelligent et d'un commerce 

agréable - pas comme ce fieffé <select name="select10"> <option value="alcoolique"> 

alcoolique </option> <option value="suppôt de Bacchus"> suppôt de Bacchus </option> 

<option value="buveur"> buveur </option> <option value="soiffard"> soiffard </option> 

<option value="ivrogne"> ivrogne </option></select> de Trofimov, passé le mois 

dernier de secrétaire à second assistant du commissaire de police de Khitrovka. 

Qu'il continue à se soûler là-bas et à répondre avec impertinence à ses chefs.</DIV></TD></TR><TR><TD CLASS="text1" BGCOLOR="BDAEA5"><DIV ALIGN="RIGHT"><input type='hidden' name='verif' value='1'><INPUT TYPE="submit" NAME="Test" VALUE="Valider"></DIV></TD></TR></TABLE></form></TD><TD VALIGN="TOP" background="l2.gif" BGCOLOR="BDAEA5"><IMG SRC="c3.gif" WIDTH="98" HEIGHT="42"><BR><IMG SRC="c4.gif" WIDTH="98" HEIGHT="14"><BR><IMG SRC="c5.gif" WIDTH="98" HEIGHT="227"><BR><IMG SRC="barre_d.gif" WIDTH="98" HEIGHT="223"><BR>
      <img src="l2.gif" width="98" height="20"></TD>
  </TR><TR BGCOLOR="BDAEA5"><TD VALIGN="TOP" COLSPAN="3"><IMG SRC="bas.gif" WIDTH="780" HEIGHT="67"></TD></TR></TABLE> 

</BODY>

</HTML>

