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
.btenvoi {
background-color: #DCDCDC; color: #000000; font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 16px; border: 1 solid #333333}

.journalcopyright {
	font-family: "Times New Roman", Times, serif;
	font-size: 12px;
	color: #000000;
}

-->
</style>
<? echo"$rekomencez"; ?> 
</HEAD>
<body bgcolor='#973E06' leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
</BODY>
</HTML>

