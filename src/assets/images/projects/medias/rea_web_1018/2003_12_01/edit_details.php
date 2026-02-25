<?php require_once('Connections/dixhuit.php');
//session_start();
//setcookie("newcount","$newcount",time()+2592000);
//$date_repone =date("YmdGis");
// On récupère les données de l'enregistrement	
	$reqtest = "SELECT * FROM $tbl_concours where email =\"$Mailuser\" ";
  	mysql_select_db($database_dixhuit, $dixhuit);
	$reqEmail = mysql_query($reqtest, $dixhuit) or die(mysql_error());
	$totalResult1 = mysql_num_rows($reqEmail);
     	while ($Uzr_id = mysql_fetch_array($reqEmail))
     	{
?>

<html>
<head>
<title>::: Grand Jeux 10|18 . Formulaire d'inscription :::</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<link href="style.css" rel="stylesheet" type="text/css">
<Script language="Javascript" src="mailchecker.js"></Script>
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
// ---- FONCTION ENVOYER LE FORM V1.0 ------------------------------
function Suppcomp()
{
if(confirm('Etes-vous sû(e) de supprimer votre compte?'))
	{
	document.form2.submit();
	}
}


// ---- FONCTION VERIFORMULAIRE V1.0 ------------------------------
function poster()
{

	erreur=0;
	
// verif NOM
	if (fieldchecker(document.form1.nom.value, 'nom',1)==false){
	erreur=1;
	window.location.href='#';
	document.form1.nom.focus();
	return;		
	}

// verif PRENOM
	if (fieldchecker(document.form1.prenom.value, 'prénom',1)==false){
	erreur=1;	
	window.location.href='#';
	document.form1.prenom.focus();
	return;	
	}

// verif ADRESSE
	if (fieldchecker(document.form1.rue_domicile.value, 'adresse',1)==false){
	erreur=1;
	window.location.href='#';
	document.form1.rue_domicile.focus();
	return;
	}

// verif VILLE
	if (fieldchecker(document.form1.ville_domicile.value, 'ville',1)==false){
	erreur=1;
	window.location.href='#';
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
	window.location.href='#';
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
		window.location.href='#';
		document.form1.telephone_perso.focus();	
		return;
		}
		else {
		  if (isNaN(numtel) == true) {
		  alert ("Votre numéro de téléphone n'est pas correct.");
		  window.location.href='#';
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
		window.location.href='#';
		document.form1.telephone_perso.focus();					
		return;
		}
	   }
	}


// verif IDENTIFIANT / LOGIN
	 if ( document.form1.pseudo.value == "") {
	erreur=1;
	alert ("Choisissez votre identifiant");
	window.location.href='#';
	document.form1.pseudo.focus();			
	return;
	}

	if (fieldchecker(document.form1.pseudo.value, 'login',0)==false){
	erreur=1;
	window.location.href='#';
	document.form1.pseudo.focus();
	return;
	}

// verif PASSWORD
/*	 if ( document.form1.pass.value == "") {
	erreur=1;
	alert ("Choisissez votre mot de passe");
	window.location.href='#';
	document.form1.pass.focus();
	return;
	}
*/
	if (fieldchecker(document.form1.pass.value, 'mot de passe',0)==false){
	erreur=1;
	window.location.href='#';
	document.form1.pass.focus();
	return;
	}

// verif PASSWORD CONFIRMATION
	 if ( document.form1.pass2.value == "") {
	erreur=1;
	alert ("Merci de confirmer votre mot de passe");
	window.location.href='#';
	document.form1.pass2.focus();
	return;
	}
	
	if (fieldchecker(document.form1.pass2.value, 'confirmation de mot de passe',0)==false){
	erreur=1;
	window.location.href='#';
	document.form1.pass.focus();
	return;
	}

	

// verif PASSWORD = PASSWORD_Confirmation
	 if (!(document.form1.pass2.value == document.form1.pass.value)) {
	erreur=1;
	alert ("La confirmation du mot de passe n'est pas valide");
	window.location.href='#';
	document.form1.pass2.focus();
	return;
	}


// Toutes les données on été vérifiées	
	if(erreur==0)
	{
		enoyer();
	}
	
}


//-->
</script>
<script language="JavaScript1.2" src="js_roll_over.js"></script>
</HEAD>
<body bgcolor="#933F03" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<?php include("bandeau.php"); ?>
<table width="778" border="0" cellpadding="0" cellspacing="0">
  <tr> 
    <td width="227" rowspan="4" valign="top"><img src="img/vosinfos_illust.gif" width="227" height="416"></td>
    <td width="40"><img src="img/vide.gif" width="40" height="11"></td>
    <td width="502" valign="middle"><img src="img/vide.gif" width="502" height="11"></td>
    <td width="9" valign="middle" class="moyentext"><img src="img/vide.gif" width="9" height="11"></td>
  </tr>
  <tr> 
    <td><img src="img/vide.gif" width="40" height="94"></td>
    <td align="center" valign="top"> <table border="0" cellspacing="0" cellpadding="0">
        <tr> 
          <td><form method="post" name="form1" action="modif_inscript.php">
              <table width="368" border="0" align="center" cellpadding="0" cellspacing="5">
                <tr valign="baseline"> 
                  <td width="192"><select name="civil" class="chpc" id="select2">
                      <option value="<?php echo"$Uzr_id[civil]"; ?>" selected><?php echo"$Uzr_id[civil]"; ?></option>
                      <option value="Mme">Madame</option>
                      <option value="Melle">Mademoiselle</option>
                      <option value="Mr">Monsieur</option>
                    </select></td>
                  <td width="161" align="right" nowrap class="formula"><div align="left">Civilit&eacute;</div></td>
                </tr>
                <tr valign="baseline"> 
                  <td><input name="nom" type="text" class="chpc" value="<?php echo"$Uzr_id[nom]"; ?>" size="32"></td>
                  <td align="right" nowrap class="formula"><div align="left">Nom</div></td>
                </tr>
                <tr valign="baseline"> 
                  <td><input name="prenom" type="text" class="chpc" value="<?php echo"$Uzr_id[prenom]"; ?>" size="32"></td>
                  <td align="right" nowrap class="formula"><div align="left">Prenom</div></td>
                </tr>
                <tr valign="baseline"> 
                  <td><input name="rue_domicile" type="text" class="chpc" value="<?php echo"$Uzr_id[rue_domicile]"; ?>" size="32"></td>
                  <td align="right" nowrap class="formula"><div align="left">Adresse</div></td>
                </tr>
                <tr valign="baseline"> 
                  <td><input name="ville_domicile" type="text" class="chpc" value="<?php echo"$Uzr_id[ville_domicile]"; ?>" size="32"></td>
                  <td align="right" nowrap class="formula"><div align="left">Ville</div></td>
                </tr>
                <tr valign="baseline"> 
                  <td><input name="code_postal_domicile" type="text" class="chpc" value="<?php echo"$Uzr_id[code_postal_domicile]"; ?>" size="32"></td>
                  <td align="right" nowrap class="formula"><div align="left">Code 
                      postal</div></td>
                </tr>
                <tr valign="baseline"> 
                  <td><input name="email" type="text" class="chpc" value="<?php echo"$Uzr_id[email]"; ?>" size="32"></td>
                  <td align="right" nowrap class="formula"><div align="left">Email</div></td>
                </tr>
                <tr valign="baseline"> 
                  <td><input name="telephone_perso" type="text" class="chpc" value="<?php echo"$Uzr_id[telephone_perso]"; ?>" size="32"></td>
                  <td align="right" nowrap class="formula"><div align="left">Telephone</div></td>
                </tr>
                <tr valign="baseline"> 
                  <td colspan="2"><img src="img/vide.gif" width="40" height="27"></td>
                </tr>
                <tr valign="baseline"> 
                  <td><input name="pseudo" type="text" class="chpc" value="<?php echo"$Uzr_id[pseudo]"; ?>" size="32"></td>
                  <td class="formula"><div align="left">Votre pseudo</div></td>
                </tr>
                <tr valign="baseline" class="formula"> 
                  <td colspan="2" align="right"><img src="img/vide.gif" width="40" height="27"></td>
                </tr>
                <tr valign="baseline" class="formula"> 
                  <td colspan="2" align="right">Pour modifier votre mot de passe, 
                    effacez <br>
                    les deux champs suivants avant de tapez<br>
                    le nouveau mot de passe</td>
                </tr>
                <tr valign="baseline"> 
                  <td><input name="pass" type="password" class="chpc" size="32"  value="<?php echo"$Uzr_id[pass]"; ?>"></td>
                  <td class="formula"><div align="left">Mot de passe</div></td>
                </tr>
                <tr valign="baseline"> 
                  <td><input name="pass2" type="password" class="chpc" value="<?php echo"$Uzr_id[pass]"; ?>" size="32"></td>
                  <td class="formula"><div align="left">Retapez votre mot de passe</div></td>
                </tr>
                <tr valign="baseline"> 
                  <input type="hidden" name="IDuser" value="<?php echo"$Uzr_id[id]"; ?>">
                  <td> <input type="hidden" name="MM_insert" value="form1"></td>
                  <td> <div align="right"> 
                      <input name="envoyer" type="button" class="chpa" onClick="poster()" value="&gt;&gt; Modifier">
                    </div></td>
                </tr>
              </table>
            </form></td>
        </tr>
      </table>
    </td>
    <td valign="middle" class="moyentext">&nbsp;</td>
  </tr>
  <tr> 
    <td><img src="img/vide.gif" width="40" height="23"></td>
    <td align="center" valign="bottom"><img src="img/grixpix.gif" width="368" height="1"></td>
    <td valign="middle" class="moyentext"><img src="img/vide.gif" width="9" height="11"></td>
  </tr>
  <tr> 
    <td><img src="img/vide.gif" width="40" height="10"></td>
    <td valign="middle"><div align="center"><table border="0" cellpadding="5" cellspacing="5">
        <tr > 
          <td width="181" align="center" valign="middle" nowrap><form method="post" name="form2" action="suppr_user.php">
                <div align="center"><br>
                  <input type="hidden" name="IDuser" value="<?php echo"$Uzr_id[id]"; ?>">
                  <input name="Bouton2" type="button" class="chpb" id="Bouton2" onClick="Suppcomp()" value=":::Supprimer mon compte:::">
                </div>
              </form></td>
        </tr>
      </table></div>
      </td>
    <td valign="middle" class="moyentext"><img src="img/vide.gif" width="9" height="11"></td>
  </tr>
</table>
  <? } ?>
</body>
</html>