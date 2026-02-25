<?php
//Définition des indices et jeux

$reponse01 = "traces";
$reponse02 = "doigts";
$reponse03 = "suspect";
$reponse04 = "livres";
$reponse05 = "bibliothèque";
$reponse06 = "décembre";
$reponse07 = "Vingt";
$reponse08 = "personnes";
$reponse09 = "services";
$reponse10 = "Grâce";
$reponse11 = "empreintes";
$reponse12 = "coupable";


$rep_actuel = "jeux_decembre";
$jeu_actuel = "12";
$jeu_ID = "jeux12";

//Définition des boutons de navigation
$BT_close = "<input name=\"envoyer\" type=\"button\" class=\"chpa\" onClick=\"window.close()\" value=\"X Fermer\" size=\"16\">";
$BT_retry = "<input name=\"envoyer\" type=\"button\" class=\"chpd\" onClick=\"history.back()\" value=\"&lt;&lt; Rééssayer\">";
$BT_revenir = "<input name=\"envoyer\" type=\"button\" class=\"chpa\" onClick=\"history.back()\" value=\"&lt;&lt; Revenir\">";
$BT_oublipass = "<input type=\"button\" class=\"chpd\" onClick=\"window.top.location.href='lostpass.php'\" value=\"Mot de passe oublié?\">";
$BT_inscript = "<input name=\"envoyer\" type=\"button\" class=\"chpa\" onClick=\"window.location.href='inscription.php';\" value=\"Inscription\">";
$TutPassport = "<object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0\" width=\"500\" height=\"300\"><param name=\"movie\" value=\"img/tutoriel_passport.swf\"><param name=\"quality\" value=\"high\"><embed src=\"img/tutoriel_passport.swf\" quality=\"high\" pluginspage=\"http://www.macromedia.com/go/getflashplayer\" type=\"application/x-shockwave-flash\" width=\"500\" height=\"300\"></embed></object>";
//Table d'inscription
$tbl_concours = "concours_contact";
//$tbl_concours = "concours_test";

//VARIABLES DE CONNEXION
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
/*

	//Locales
$hostname_dixhuit = "localhost";
$database_dixhuit = "dixhuit";
$username_dixhuit = "root";
$password_dixhuit = "";
*/
	//Distantes Neuronnexion
$hostname_dixhuit = "vincentltiperso.mysql.db";
$database_dixhuit = "vincentltiperso";
$username_dixhuit = "vincentltiperso";
$password_dixhuit = "jQ3BTJqvryMZ";




$dixhuit = mysql_pconnect($hostname_dixhuit, $username_dixhuit, $password_dixhuit) or die(mysql_error());
?>