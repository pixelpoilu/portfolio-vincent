<?php
session_start();
require_once('Connections/dixhuit.php');
$date_repone =date("YmdGis");
if (!($indicemois)){	header("Location:$rep_actuel");}
?>
<html>
<head>
<title>::: Grand Jeux 10|18 . Formulaire d'inscription :::</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script language="JavaScript1.2" src="js_roll_over.js"></script>

<Script language="Javascript" src="mailchecker.js"></Script>
<link href="style.css" rel="stylesheet" type="text/css">
</HEAD>
<script language="Javascript">

// ---- FONCTION FIELDCHECKER V1.0 ------------------------------
function fieldchecker(valeurchamps, nomchamps, typechamps)
{

/*	Valeur de typechamps : 
	0 : type login / password
	1 : type nom/prénom
*/

var chaineok=true;
var erreurlettre = '';


// Check si chaine vide
	if (valeurchamps!=''){			
// Check de la validité des caractères			
				for (var i=0;i<valeurchamps.length;i++){
					
					if (typechamps == 0) {
						if (valeurchamps.charCodeAt(i)<=44){
							chaineok=false;
							erreurlettre = valeurchamps.charAt(i);
							break;
						}
					}else{
						if (valeurchamps.charCodeAt(i)<=31){
							chaineok=false;
							erreurlettre = valeurchamps.charAt(i);
							break;
						}						
						if (valeurchamps.charCodeAt(i)==33 || valeurchamps.charCodeAt(i)==35 || valeurchamps.charCodeAt(i)==36 || valeurchamps.charCodeAt(i)==37 || valeurchamps.charCodeAt(i)==42 || valeurchamps.charCodeAt(i)==43){
							chaineok=false;
							erreurlettre = valeurchamps.charAt(i);
							break;
						}						

					}

					if (valeurchamps.charCodeAt(i)>=58 && valeurchamps.charCodeAt(i)<=63){
						chaineok=false;
						erreurlettre = valeurchamps.charAt(i);
						break;
					}		

					if (valeurchamps.charCodeAt(i)>=91 && valeurchamps.charCodeAt(i)<=94){
						chaineok=false;
						erreurlettre = valeurchamps.charAt(i);
						break;
					}

					if (valeurchamps.charCodeAt(i)>=123 && valeurchamps.charCodeAt(i)<=128){
						chaineok=false;
						erreurlettre = valeurchamps.charAt(i);
						break;
					}					

					if (valeurchamps.charCodeAt(i)==47 || valeurchamps.charCodeAt(i)==96){
						chaineok=false;
						erreurlettre = valeurchamps.charAt(i);
						break;
					}
					
					if (valeurchamps.charCodeAt(i)>=127){																
						if (valeurchamps.charCodeAt(i)>=192 && valeurchamps.charCodeAt(i)<=255){
							if (valeurchamps.charCodeAt(i)==215 || valeurchamps.charCodeAt(i)==216 || valeurchamps.charCodeAt(i)==240 || valeurchamps.charCodeAt(i)==247 || valeurchamps.charCodeAt(i)==248 || valeurchamps.charCodeAt(i)==254){
								chaineok=false;
								erreurlettre = '\'caractère non affichable\'';
								break;
							}
						}else{
							chaineok=false;
							erreurlettre = '\'caractère non affichable\'';
							break;
						}
					}				
				}				

		if (chaineok==false){
			alert('Votre '+nomchamps+' contient le caractère interdit suivant : '+erreurlettre+'');//\nVeuillez le ressaisir.
			return false;
		}else{
			return true;
		} 			
	}else{
	alert('Merci d\'indiquer votre '+nomchamps);		
	return false;
	}		
}

// ---- FONCTION ENVOYER LE FORM V1.0 ------------------------------
function enoyer()
{
document.form1.submit();
}

// ---- FONCTION VERIFORMULAIRE V1.0 ------------------------------
function poster()
{
	erreur=0;
	
// ETAPE 1 ///

// verif CIVILITE
	 if ( document.form1.civil.selectedIndex == 0) {
	erreur=1;
	alert ('Merci d\'indiquer votre Civilité');
	document.form1.civil.focus();
	return;
	}
	
// verif NOM
	if (fieldchecker(document.form1.nom.value, 'nom',1)==false){
	erreur=1;
	
	document.form1.nom.focus();
	return;		
	}

// verif PRENOM
	if (fieldchecker(document.form1.prenom.value, 'prénom',1)==false){
	erreur=1;	
	
	document.form1.prenom.focus();
	return;	
	}

// verif ADRESSE
	if (fieldchecker(document.form1.rue_domicile.value, 'adresse',1)==false){
	erreur=1;
	
	document.form1.rue_domicile.focus();
	return;
	}

// verif VILLE
	if (fieldchecker(document.form1.ville_domicile.value, 'ville',1)==false){
	erreur=1;
	
	document.form1.ville_domicile.focus();
	return;		
	}

// verif Code postal
	if( document.form1.code_postal_domicile.value == "")
	{
	erreur=1;
	alert("Merci d'indiquer votre code postal");
	document.form1.code_postal_domicile.focus();
	return;		
	}

	if ( isNaN(document.form1.code_postal_domicile.value) == true) {
	erreur=1;
	alert("Votre code postal n\'est pas valide ! \n Saisissez uniquement des chiffres !");
	
	document.form1.code_postal_domicile.focus();		
	return;
	}
	
// verif MAIL V 2.0 : MailChecker
	if (MailChecker(document.form1.email.value)==false){
	erreur=1;
	document.form1.email.focus();				
	return;
	}

// verif TELEPHONE
	numtel = document.form1.telephone_perso.value;
	if ( numtel.length > 0) {
		if ( numtel.length != 10 ) {
		alert ("Votre numéro de téléphone est incomplet.");
		
		document.form1.telephone_perso.focus();	
		return;
		}
		else {
		  if (isNaN(numtel) == true) {
		  alert ("Votre numéro de téléphone n'est pas correct.");
		  
		  document.form1.telephone_perso.focus();	
		  return;
		}
		prefixe = numtel.substr(0,2);
		switch (prefixe) {
				case "01":
				case "02":
				case "03":
				case "04":
				case "05":
				case "06":
					break;
				default:
		alert ("Votre numéro de téléphone ne commence pas par un préfixe connu.");
		
		document.form1.telephone_perso.focus();					
		return;
		}
	   }
	}


// VERIFICATION ANNEE DE NAISSANCE


   if ( document.form1.annee_naissance.value == "") {
		alert ("Merci d'indiquer votre date de naissance");
		
		document.form1.jour_naissance.focus();		
		return;
	}
	
 
  if ( isNaN(document.form1.annee_naissance.value) == true) {
		alert("Votre année de naissance n'est pas valide. \n Saisissez uniquement des chiffres !");
		
		document.form1.annee_naissance.focus();			
		annee_int = 0;
		return;
	}
 else {
	annee_int = parseInt(document.form1.annee_naissance.value);
}
 if ( annee_int < 1850) {
 		alert("Votre année de naissance n'est pas valide !");
		
		document.form1.annee_naissance.focus();			
		return;
	}
 


// Récupère la date du serveur
<? $ancourant = date("Y"); ?> 

 if ( document.form1.annee_naissance.value > "<? echo"$ancourant"; ?>") {
 		alert("Votre année de naissance n'est pas valide !");
		
		document.form1.annee_naissance.focus();			
		return;
	}


 date2 = (<? echo"$ancourant"; ?> - 18)
 if ( document.form1.annee_naissance.value > date2) {
		alert("Vous devez avoir 18 ans pour pouvoir jouer.");
		
		document.form1.annee_naissance.focus();			
		return;
	}
	
 if ( document.form1.annee_naissance.value == date2) {
	mois2 = (1)
	if ( document.form1.mois_naissance.selectedIndex > mois2-1) {
		alert("Vous devez avoir 18 ans pour pouvoir jouer.");
		
		document.form1.mois_naissance.focus();			
		return;
	}
	
    if ( document.form1.mois_naissance.selectedIndex == mois2-1) {
		jour2 = (14)
		if ( document.form1.jour_naissance.selectedIndex > jour2-1) {
			alert("Vous devez avoir 18 ans pour pouvoir jouer.");
			
			document.form1.jour_naissance.focus();				
			return;
		}
	}
}

// ETAPE 2

// verif IDENTIFIANT / LOGIN
	 if ( document.form1.pseudo.value == "") {
	erreur=1;
	alert ("Choisissez votre identifiant");
	
	document.form1.pseudo.focus();			
	return;
	}

	if (fieldchecker(document.form1.pseudo.value, 'login',0)==false){
	erreur=1;
	
	document.form1.pseudo.focus();
	return;
	}

// verif PASSWORD
	 if ( document.form1.pass.value == "") {
	erreur=1;
	alert ("Choisissez votre mot de passe");
	
	document.form1.pass.focus();
	return;
	}

	if (fieldchecker(document.form1.pass.value, 'mot de passe',0)==false){
	erreur=1;
	
	document.form1.pass.focus();
	return;
	}

// verif PASSWORD CONFIRMATION
	 if ( document.form1.pass2.value == "") {
	erreur=1;
	alert ("Merci de confirmer votre mot de passe");
	
	document.form1.pass2.focus();
	return;
	}
	
	if (fieldchecker(document.form1.pass2.value, 'confirmation de mot de passe',0)==false){
	erreur=1;
	
	document.form1.pass.focus();
	return;
	}

	

// verif PASSWORD = PASSWORD_Confirmation
	 if (!(document.form1.pass2.value == document.form1.pass.value)) {
	erreur=1;
	alert ("La confirmation du mot de passe n'est pas valide");
	
	document.form1.pass2.focus();
	return;
	}


// ETAPE 3

// verif PROFESSION
	 if ( document.form1.profession.selectedIndex == 0) {
	erreur=1;
	alert ('Merci d\'indiquer votre Profession');
	document.form1.profession.focus();
	return;
	}

// verif Le nombre de livres par an
	 if ( document.form1.lecturean.selectedIndex == 0) {
	erreur=1;
	alert ('Merci d\'indiquer Le nombre de livres par an');
	document.form1.lecturean.focus();
	return;
	}	
	
// verif Le nombre de poches par an
	 if ( document.form1.livrepoche.selectedIndex == 0) {
	erreur=1;
	alert ('Merci d\'indiquer Le nombre de livres de poche par an');
	document.form1.livrepoche.focus();
	return;
	}	

// Verif Genre
	genrechecked1 = 0;
	genrechecked2 = 0; 
	genrechecked3 = 0; 
	genrechecked4 = 0; 
	genrechecked5 = 0; 
	genrechecked6 = 0; 
	genrechecked7 = 0; 
	genrechecked8 = 0; 
	genrechecked9 = 0; 
	genrechecked10 = 0; 
	genrechecked11 = 0;

	if (document.form1.genre1.checked == "1") genrechecked1 = 1;
	if (document.form1.genre2.checked == "1") genrechecked2 = 1;
	if (document.form1.genre3.checked == "1") genrechecked3 = 1;
	if (document.form1.genre4.checked == "1") genrechecked4 = 1;
	if (document.form1.genre5.checked == "1") genrechecked5 = 1;
	if (document.form1.genre6.checked == "1") genrechecked6 = 1;
	if (document.form1.genre7.checked == "1") genrechecked7 = 1;
	if (document.form1.genre8.checked == "1") genrechecked8 = 1;
	if (document.form1.genre9.checked == "1") genrechecked9 = 1;
	if (document.form1.genre10.checked == "1") genrechecked10 = 1;
	if (document.form1.genre11.checked == "1") genrechecked11 = 1;

	genrecumul = (genrechecked1+genrechecked2+genrechecked3+genrechecked4+genrechecked5+genrechecked6+genrechecked7+genrechecked8+genrechecked9+genrechecked10+genrechecked11);

	if (genrecumul == 0) {
		erreur=1;
		alert ("Merci d\'indiquer les trois principaux genres que vous lisez");
		document.form1.genre1.focus();
		return;
	}
	if (genrecumul > 3) {
	erreur=1;
	alert ("Merci d\'indiquer au maximum trois principaux genres que vous lisez");
	document.form1.genre1.focus();
	return;

	}
	if (genrecumul < 3) {
	erreur=1;
	alert ("Merci d\'indiquer au minimum trois principaux genres que vous lisez");
	document.form1.genre1.focus();
	return;
	}


	
// verif Lieu d'achat
	 if ( document.form1.lieuachat.selectedIndex == 0) {
	erreur=1;
	alert ('Merci d\'indiquer Le lieu de votre achat');
	document.form1.lieuachat.focus();
	return;
	}	
	
// Verif Fréquence	

	POCKET_checked = 0;
	ED1018_checked = 0;
	FLEUVn_checked = 0;
	POCKJ_checked = 0;			
	for(i=0; i<4; i++) {
		if (document.form1.Pocket[i].checked == "1") POCKET_checked = 1;
		if (document.form1.ed1018[i].checked == "1") ED1018_checked = 1;
		if (document.form1.FleuveNoir[i].checked == "1") FLEUVn_checked = 1;	
		if (document.form1.PockJeun[i].checked == "1") POCKJ_checked = 1;	
	}

	if (POCKET_checked == 0) {
		erreur=1;
		alert ("Dites-nous, s'il vous plaît, à quelle fréquence achetez-vous des ouvrages Pocket");
		document.form1.Pocket[0].focus();
		return;
	}	
	
	if (ED1018_checked == 0) {
		erreur=1;
		alert ("Dites-nous, s'il vous plaît, à quelle fréquence achetez-vous des ouvrages 1018");
		document.form1.ed1018[0].focus();
		return;
	}		
	
	if (FLEUVn_checked == 0) {
		erreur=1;
		alert ("Dites-nous, s'il vous plaît, à quelle fréquence achetez-vous des ouvrages FLeuve Noir");
		document.form1.FleuveNoir[0].focus();
		return;
	}	

	if (POCKJ_checked == 0) {
		erreur=1;
		alert ("Dites-nous, s'il vous plaît, à quelle fréquence achetez-vous des ouvrages Pocket Jeunesse");
		document.form1.PockJeun[0].focus();
		return;
	}



// verification Réglement et mail de résultats
	reglement_checked = 0;
	if (document.form1.reglement.checked == "1")
			reglement_checked = 1;
	if (reglement_checked == 0) {
		erreur=1;
		alert ("Attention, pour participer au Jeux 10|18, vous devez accepter le réglement du jeu ainsi que la Charte 10|18 sur le respect de la vie privée !");
		document.form1.reglement.focus();
		return;
	}

// Accord pour diffuser le nom en cas de gain
	reglement2_checked = 0;
	if (document.form1.reglement2.checked == "1")
			reglement2_checked = 1;
	if (reglement2_checked == 0) {
		erreur=1;
		alert ("Attention, pour participer au Jeux 10|18, vous devez accepter les conditions en cas de gain");
		document.form1.reglement2.focus();
		return;
	}


// Toutes les données on été vérifiées	
	if(erreur==0)
	{
		anbirth =document.form1.annee_naissance.value;
		moisbirth=document.form1.jour_naissance.value;
		jourbirth=document.form1.mois_naissance.value;
		document.form1.naissance.value = jourbirth + "/" + moisbirth + "/" + anbirth;
		enoyer();
	}
	
}


//-->
</script>
<body bgcolor="#933F03" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<form method="post" name="form1" action="verif_inscript.php">
<?php include("bandeau.php"); ?>
<table width="779" border="0" cellpadding="0" cellspacing="0">
    <tr> 
      <td width="227" rowspan="3" valign="top"><img src="img/inscript_illust.gif" width="227" height="415"></td>
      <td width="40"><img src="img/vide.gif" width="40" height="94"></td>
      <td colspan="6" valign="middle" class="moyentext"><strong>Bravo !</strong> 
        Vous avez r&eacute;solu l'&eacute;nigme du mois, voici l'indice:<font color="#FFFF00"><strong>"<?php echo $indicemois; ?>"</strong></font>. 
        <br>
        Pour participer au tirage au sort et peut- &ecirc;tre gagner une ann&eacute;e 
        <br>
        de lecture, vous devez r&eacute;pondre aux questions suivantes.</td>
    </tr>
    <tr> 
      <td colspan="7"><img src="img/grixpix.gif" width="553" height="1"></td>
    </tr>
    <tr> 
      <td valign="top"></td>
      <td width="256" valign="top">
<table width="256" border="0" cellpadding="0" cellspacing="0">
          <tr> 
            <td colspan="2"><img src="img/form_step01.gif" width="91" height="37"></td>
          </tr>
          <tr valign="baseline" class="formula"> 
            <td width="83" align="right" nowrap class="formula"><div align="right">Civilit&eacute;:</div></td>
            <td width="173"><select name="civil" class="chpc" id="select7">
                <option value="" selected>Choisissez...</option>
                <option value="Mme">Madame</option>
                <option value="Melle">Mademoiselle</option>
                <option value="Mr">Monsieur</option>
              </select></td>
          </tr>
          <tr valign="baseline" class="formula"> 
            <td colspan="2" align="right" nowrap class="formula"><img src="img/vide.gif" width="57" height="10"></td>
          </tr>
          <tr valign="baseline" class="formula"> 
            <td align="right" nowrap class="formula"><div align="right">Nom:</div></td>
            <td><input name="nom" type="text" class="chpc" value="" size="16"></td>
          </tr>
          <tr> 
            <td colspan="2" class="formula"><img src="img/vide.gif" width="57" height="10"></td>
          </tr>
          <tr valign="baseline" class="formula"> 
            <td align="right" nowrap class="formula"><div align="right">Prenom:</div></td>
            <td><input name="prenom" type="text" class="chpc" value="" size="16"></td>
          </tr>
          <tr> 
            <td colspan="2" class="formula"><img src="img/vide.gif" width="57" height="10"></td>
          </tr>
          <tr valign="baseline" class="formula"> 
            <td align="right" nowrap class="formula"><div align="right">Adresse:</div></td>
            <td><input name="rue_domicile" type="text" class="chpc" value="" size="16"></td>
          </tr>
          <tr> 
            <td colspan="2" class="formula"><img src="img/vide.gif" width="57" height="10"></td>
          </tr>
          <tr valign="baseline" class="formula"> 
            <td align="right" nowrap class="formula"><div align="right">Ville:</div></td>
            <td><input name="ville_domicile" type="text" class="chpc" value="" size="16"></td>
          </tr>
          <tr> 
            <td colspan="2" class="formula"><img src="img/vide.gif" width="57" height="10"></td>
          </tr>
          <tr valign="baseline" class="formula"> 
            <td align="right" nowrap class="formula"><div align="right">Code postal:</div></td>
            <td><input name="code_postal_domicile" type="text" class="chpc" value="" size="8"></td>
          </tr>
          <tr> 
            <td colspan="2" class="formula"><img src="img/vide.gif" width="57" height="10"></td>
          </tr>
          <tr valign="baseline" class="formula"> 
            <td align="right" nowrap class="formula"><div align="right">Email:</div></td>
            <td><input name="email" type="text" class="chpc" value="" size="25"></td>
          </tr>
          <tr> 
            <td colspan="2" class="formula"><img src="img/vide.gif" width="57" height="10"></td>
          </tr>
          <tr valign="baseline" class="formula"> 
            <td align="right" nowrap class="formula"><div align="right">*Tel 
                mobile:</div></td>
            <td><input name="telephone_perso" type="text" class="chpc" value="" size="12"></td>
          </tr>
          <tr> 
            <td colspan="2" class="formula"><img src="img/vide.gif" width="57" height="10"></td>
          </tr>
          <tr valign="baseline" class="formula"> 
            <td align="right" nowrap class="formula"><div align="right">N&eacute;(e) 
                le &nbsp;&nbsp;</div></td>
            <td><select  name="jour_naissance" size="1" class="chpc" style="FONT-SIZE: 10px; FONT-FAMILY: Verdana, Arial, Helvetica, sans-serif">
                <option value="1" >01</option>
                <option value="2" >02</option>
                <option value="3" >03</option>
                <option value="4" >04</option>
                <option value="5" >05</option>
                <option value="6" >06</option>
                <option value="7" >07</option>
                <option value="8" >08</option>
                <option value="9" >09</option>
                <option value="10" >10</option>
                <option value="11" >11</option>
                <option value="12" >12</option>
                <option value="13" >13</option>
                <option value="14" >14</option>
                <option value="15" >15</option>
                <option value="16" >16</option>
                <option value="17" >17</option>
                <option value="18" >18</option>
                <option value="19" >19</option>
                <option value="20" >20</option>
                <option value="21" >21</option>
                <option value="22" >22</option>
                <option value="23" >23</option>
                <option value="24" >24</option>
                <option value="25" >25</option>
                <option value="26" >26</option>
                <option value="27" >27</option>
                <option value="28" >28</option>
                <option value="29" >29</option>
                <option value="30" >30</option>
                <option value="31" >31</option>
              </select>
              / 
              <select name="mois_naissance" size="1" class="chpc" style="FONT-SIZE: 10px; FONT-FAMILY: Verdana, Arial, Helvetica, sans-serif">
                <option value="1" >01</option>
                <option value="2" >02</option>
                <option value="3" >03</option>
                <option value="4" >04</option>
                <option value="5" >05</option>
                <option value="6" >06</option>
                <option value="7" >07</option>
                <option value="8" >08</option>
                <option value="9" >09</option>
                <option value="10" >10</option>
                <option value="11" >11</option>
                <option value="12" >12</option>
              </select>
              / 
              <input name="annee_naissance" type="text" class="chpc" style="FONT-SIZE: 10px; FONT-FAMILY: Verdana, Arial" value="" size="4" maxlength="4"> 
            </td>
          </tr>
        </table></td>
      <td width="10" valign="top"><img src="img/vide.gif" width="10" height="316"></td>
      <td width="1" valign="top" bgcolor="#818181"><img src="img/vide.gif" width="1" height="50"></td>
      <td width="9" valign="top"><img src="img/vide.gif" width="9" height="50"></td>
      <td width="227" valign="top"><table width="227" border="0" cellpadding="0" cellspacing="0">
          <tr> 
            <td width="214"><img src="img/form_step02.gif" width="91" height="37"></td>
          </tr>
          <tr> 
            <td class="formula">Choisissez un identifiant et un mot <br>
              de passe facilement m&eacute;morisables,<br>
              vous pourrez ensuite jouer<br> &agrave; partir de n'importe-quel 
              <br>
              ordinateur connect&eacute; &agrave; Internet.</td>
          </tr>
          <tr> 
            <td><img src="img/vide.gif" width="57" height="10"></td>
          </tr>
          <tr> 
            <td class="formula"><div align="center">Choisissez un pseudo:<br>
                <input name="pseudo" type="text" class="chpc" value="" size="16">
              </div></td>
          </tr>
          <tr> 
            <td class="formula"><div align="center"><img src="img/vide.gif" width="57" height="10"></div></td>
          </tr>
          <tr> 
            <td class="formula"><div align="center">Choisissez un mot de passe:<br>
                <input name="pass" type="password" class="chpc" value="" size="16">
              </div></td>
          </tr>
          <tr> 
            <td class="formula"><div align="center"><img src="img/vide.gif" width="57" height="10"></div></td>
          </tr>
          <tr> 
            <td class="formula"><div align="center">Confirmez votre mot de passe:<br>
                <input name="pass2" type="password" class="chpc" value="" size="16">
              </div></td>
          </tr>
          <tr> 
            <td class="formula">&nbsp;</td>
          </tr>
        </table></td>
      <td width="9" valign="top"><img src="img/vide.gif" width="9" height="50"></td>
    </tr>
    <tr> 
      <td colspan="8"><img src="img/grixpix.gif" width="780" height="1"></td>
    </tr>
  </table>
  <table width="780" border="0" cellpadding="0" cellspacing="0">
    <tr> 
      <td width="226"><img src="img/vide.gif" width="226" height="94"></td>
      <td width="1" bgcolor="#818181"><img src="img/vide.gif" width="1" height="94"></td>
      <td width="40"><img src="img/vide.gif" width="40" height="94"></td>
      <td width="504"><table width="504" border="0" cellpadding="0" cellspacing="0">
          <tr> 
            <td colspan="3"><br>
              <img src="img/form_step03.gif" width="133" height="37"></td>
          </tr>
          <tr> 
            <td width="236" valign="top"><table width="236" border="0" cellpadding="0" cellspacing="0">
                <tr> 
                  <td width="236"><img src="img/vide.gif" width="236" height="3"></td>
                </tr>
                <tr valign="baseline" class="formula"> 
                  <td align="right" nowrap class="formula"><div align="center">1.Quelle 
                      est votre profession ?:                    <br>
                      <select name="profession" size="1" class="chpc">
                        <option value="0" selected>Choisissez...</option>
                        <option value="1" >Etudiants, lycéens, collégiens</option>
                        <option value="2" >ouvriers, employés</option>
                        <option value="3" >Technicien - Agent de maîtrise</option>
                        <option value="4" >Enseignant</option>
                        <option value="5" >Cadre - Prof. lib&eacute;rale</option>
                        <option value="6" >cadres supérieurs</option>
                        <option value="7" >Chef d'entreprise</option>
                        <option value="8" >Agriculteur</option>
                        <option value="9" >Artisan</option>
                        <option value="10" >Commerçant</option>
                        <option value="11" >Homme / Femme au foyer</option>
                        <option value="12" >Retraités, chômeurs, inactifs 
                        <option value="13" >Autres</option>
                      </select>
                    </div></td>
                </tr>
                <tr valign="baseline" class="formula"> 
                  <td align="right" nowrap class="formula"><img src="img/vide.gif" width="57" height="10"></td>
                </tr>
                <tr align="center" valign="baseline" class="formula"> 
                  <td nowrap class="formula"><div align="center">2. Combien de 
                      livres lisez-vous par an ?:<br>
                      <select name="lecturean" size="1" class="chpc" id="select18">
                        <option value="0" selected>Choisissez...</option>
                        <option value="0-5" >Moins de 5</option>
                        <option value="5-10" >Entre 5 et 10</option>
                        <option value="10-20" >Entre 10 et 20</option>
                        <option value="+20" >Plus de 20</option>
                      </select>
                    </div></td>
                </tr>
                <tr align="center" valign="middle" class="formula"> 
                  <td nowrap class="formula"><div align="center"><img src="img/vide.gif" width="57" height="10"></div></td>
                </tr>
                <tr valign="baseline" class="formula"> 
                  <td align="right" nowrap class="formula"><div align="center"> 
                      <p>3. Dont combien de livres de poche ?:<br>
                        <select name="livrepoche" size="1" class="chpc" id="select19">
                          <option value="0" selected>Choisissez...</option>
                          <option value="0-5" >Moins de 5</option>
                          <option value="5-10" >Entre 5 et 10</option>
                          <option value="10-20" >Entre 10 et 20</option>
                          <option value="+20" >Plus de 20</option>
                        </select>
                      </p>
                    </div></td>
                </tr>
                <tr valign="baseline" class="formula"> 
                  <td align="right" nowrap class="formula"><div align="center"><img src="img/vide.gif" width="57" height="10"></div>
                    <div align="center"></div></td>
                </tr>
                <tr align="center" valign="baseline" class="formula"> 
                  <td nowrap class="formula"><div align="center">4.Quels sont 
                      les trois principaux <br>
                      genres que vous lisez ? <br>
                      <table width="208" border="0" cellpadding="0" cellspacing="0" class="formula">
                        <tr> 
                          <td width="21" align="right" valign="top"><div align="right"> 
                              <input name="genre1" type="checkbox"   value="1">
                            </div></td>
                          <td width="187">&nbsp;1.Romans fran&ccedil;ais</td>
                        </tr>
                        <tr> 
                          <td align="right" valign="top"><div align="right"> 
                              <input name="genre2" type="checkbox"   value="1">
                            </div></td>
                          <td>&nbsp;2.Romans &eacute;trangers</td>
                        </tr>
                        <tr> 
                          <td align="right" valign="top"><div align="right"> 
                              <input name="genre3" type="checkbox"   value="1">
                            </div></td>
                          <td>&nbsp;3.Romans historiques</td>
                        </tr>
                        <tr> 
                          <td align="right" valign="top"><div align="right"> 
                              <input name="genre4" type="checkbox"   value="1">
                            </div></td>
                          <td>&nbsp;4.Terroir/Litt&eacute;ratures r&eacute;gionales</td>
                        </tr>
                        <tr> 
                          <td align="right" valign="top"><div align="right"> 
                              <input name="genre5" type="checkbox"   value="1">
                            </div></td>
                          <td>&nbsp;5.Classiques</td>
                        </tr>
                        <tr> 
                          <td align="right" valign="top"><div align="right"> 
                              <input name="genre6" type="checkbox"   value="1">
                            </div></td>
                          <td>&nbsp;6.Thriller</td>
                        </tr>
                        <tr> 
                          <td align="right" valign="top"><div align="right"> 
                              <input name="genre7" type="checkbox"   value="1">
                            </div></td>
                          <td>&nbsp;7.Policier/Noir</td>
                        </tr>
                        <tr> 
                          <td align="right" valign="top"><div align="right"> 
                              <input name="genre8" type="checkbox"   value="1">
                            </div></td>
                          <td>&nbsp;8.Science-fiction/ Fantasy</td>
                        </tr>
                        <tr> 
                          <td align="right" valign="top"><div align="right"> 
                              <input name="genre9" type="checkbox"   value="1">
                            </div></td>
                          <td>&nbsp;9.Terreur/&Eacute;pouvante</td>
                        </tr>
                        <tr> 
                          <td align="right" valign="top"><div align="right"> 
                              <input name="genre10" type="checkbox"   value="1">
                            </div></td>
                          <td>10.Essais</td>
                        </tr>
                        <tr> 
                          <td align="right" valign="top"><div align="right"> 
                              <input name="genre11" type="checkbox"   value="1">
                            </div></td>
                          <td>11.Spiritualit&eacute;</td>
                        </tr>
                      </table>
                    </div></td>
                </tr>
                <tr> 
                  <td class="formula"><img src="img/vide.gif" width="57" height="10"></td>
                </tr>
                <tr> 
                  <td class="formula"><div align="center">5. O&ugrave; achetez-vous 
                      vos livres ?:<br>
                      <select name="lieuachat" size="1" class="chpc" id="select20">
                        <option value="0" selected>Choisissez...</option>
                        <option value="1" >Enseignes spécialisées (Fnac, Virgin)</option>
                        <option value="2" >Librairie</option>
                        <option value="3" >Hyper/Supermarchés</option>
                        <option value="4" >Gares, aéroports</option>
                        <option value="5" >Internet</option>
                        <option value="6" >Autres (VPC, occasion, etc.)</option>
                      </select>
                    </div></td>
                </tr>
                <tr> 
                  <td class="formula"><img src="img/vide.gif" width="57" height="10"></td>
                </tr>
              </table></td>
            <td width="35"><img src="img/vide.gif" width="35" height="94"></td>
            <td width="233" valign="top"><table width="233" border="0" cellpadding="0" cellspacing="0">
                <tr> 
                  <td width="227"><img src="img/vide.gif" width="220" height="3"></td>
                </tr>
                <tr> 
                  <td class="formula"><div align="center">6. A quelle fr&eacute;quence 
                      <br>
                      achetez-vous des <br>
                      ouvrages &eacute;dit&eacute;s par :<br>
                      <strong> <br>
                      </strong> 
                      <table width="200" border="0" cellpadding="0" cellspacing="0" class="formula">
                        <tr> 
                          <td><strong>Pocket</strong></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="Pocket" value="4">
                            Très Souvent</label></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="Pocket" value="3">
                            Souvent</label></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="Pocket" value="2">
                            Rarement</label></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="Pocket" value="1">
                            Jamais</label></td>
                        </tr>
                      </table>
                      <br>
                      <br>
                      <table width="200" border="0" cellpadding="0" cellspacing="0" class="formula">
                        <tr> 
                          <td><strong>10/18 </strong></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="ed1018" value="4">
                            Très Souvent</label></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="ed1018" value="3">
                            Souvent</label></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="ed1018" value="2">
                            Rarement</label></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="ed1018" value="1">
                            Jamais</label></td>
                        </tr>
                      </table>
                      <br>
                      <table width="200" border="0" cellpadding="0" cellspacing="0" class="formula">
                        <tr> 
                          <td><strong>Fleuve Noir </strong></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="FleuveNoir" value="4">
                            Très Souvent</label></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="FleuveNoir" value="3">
                            Souvent</label></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="FleuveNoir" value="2">
                            Rarement</label></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="FleuveNoir" value="1">
                            Jamais</label></td>
                        </tr>
                      </table>
                      <br>
                      <table width="200" border="0" cellpadding="0" cellspacing="0" class="formula">
                        <tr> 
                          <td> <strong>Pocket Jeunesse</strong></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="PockJeun" value="4">
                            Très Souvent</label></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="PockJeun" value="3">
                            Souvent</label></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="PockJeun" value="2">
                            Rarement</label></td>
                        </tr>
                        <tr> 
                          <td><label> 
                            <input type="radio" name="PockJeun" value="1">
                            Jamais</label></td>
                        </tr>
                      </table>
                    </div></td>
                </tr>
                <tr> 
                  <td><img src="img/vide.gif" width="57" height="10"></td>
                </tr>
                <tr> 
                  <td><img src="img/vide.gif" width="57" height="10"> </td>
                </tr>
              </table></td>
          </tr>
        </table></td>
      <td width="9"><img src="img/vide.gif" width="9" height="50"></td>
    </tr>
  </table>
  <table width="780" border="0" cellpadding="0" cellspacing="0">
    <tr> 
      <td width="226"><img src="img/vide.gif" width="226" height="50"></td>
      <td width="1" bgcolor="#818181"><img src="img/vide.gif" width="1" height="50"></td>
      <td width="40"><img src="img/vide.gif" width="40" height="50"></td>
      <td width="504" valign="top"><table width="504" border="0" cellpadding="0" cellspacing="0">
          <tr> 
            <td width="504" class="formula"> <p> *Ces questions sont facultatives 
                <br>
                <br>
                <input type="checkbox" name="reglement" value="1" >
                J&acute;ai lu le <a href="reglement.php" target=_blank>R&egrave;glement</a> 
                et la <a href="charte.php" target=_blank>charte 10|18 </a>sur 
                le respect de la vie priv&eacute;e <br>
                et en accepte les termes.<br>
              </p>
              <p><br>
                <input type="checkbox" name="reglement2" value="1" >
                chaque gagnant autorise 10/18 &agrave; citer son nom, pr&eacute;nom 
                et<br>
                sa ville dans le cadre de la promotion du mini-site 20 ans Grands<br>
                d&eacute;tectives et du jeu concours.<br>
              </p>
              </td>
          </tr>
        </table></td>
      <td width="9"><img src="img/vide.gif" width="9" height="50"></td>
    </tr>
  </table>
  <table border="0" cellpadding="0" cellspacing="0">
    <tr> 
      <td valign="top"><img src="img/vide.gif" width="226" height="50"></td>
      <td bgcolor="#818181"><img src="img/vide.gif" width="1" height="50"></td>
      <td valign="top"><img src="img/vide.gif" width="40" height="50"></td>
      <td valign="top"><img src="img/vide.gif" width="226" height="50"></td>
      <td rowspan="3" valign="middle"><input name="envoyer" type="button" class="chpd" onClick="poster()" value="Envoyer"></td>
      <td rowspan="2" valign="top"><img src="img/vide.gif" width="9" height="51"></td>
    </tr>
    <tr> 
      <td valign="top"><img src="img/vide.gif" width="226" height="1"></td>
      <td bgcolor="#818181"><img src="img/vide.gif" width="1" height="1"></td>
      <td colspan="2" valign="top" bgcolor="#818181"><img src="img/vide.gif" width="246" height="1"></td>
    </tr>
    <tr> 
      <td colspan="4" valign="top"><img src="img/vide.gif" width="336" height="50"></td>
      <td valign="top"><img src="img/vide.gif" width="9" height="50"></td>
    </tr>
  </table>
  <img src="img/vide.gif" width="780" height="18"><br>
  <input type="hidden" name="id" value="">
    <input type="hidden" name="<? echo"$indicenum";?>" value="<? echo"$indicemois";?>">
    <input type="hidden" name="naissance" value="erreur">
    <input type="hidden" name="date_record" value="<? echo"$date_repone";?>">
    <input type="hidden" name="valid" value="1">
    <input type="hidden" name="MM_insert" value="form1">
  </form>
</body>
</html>