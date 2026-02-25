<?php
session_start();
require_once('Connections/dixhuit.php');
?>
<html>
<head>
<title>::: Grand Jeux 10|18 . Formulaire d'inscription :::</title>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<script language="JavaScript1.2" src="js_roll_over.js"></script>

<Script language="Javascript" src="mailchecker.js"></Script>
<link rel="stylesheet" href="style.css" type="text/css">
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
	 if ( document.form1.pass.value == "") {
	erreur=1;
	alert ("Merci d\'indiquer votre mot de passe");
	window.location.href='#';
	document.form1.pass.focus();
	return;
	}

	if (fieldchecker(document.form1.pass.value, 'mot de passe',0)==false){
	erreur=1;
	window.location.href='#';
	document.form1.pass.focus();
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
<body bgcolor="#933F03" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">
<?php include("bandeau.php"); ?>
<table width="779" border="0" cellpadding="0" cellspacing="0">
    <tr> 
      <td width="227" rowspan="3" valign="top"><img src="img/inscript_illust.gif" width="227" height="415"></td>
      <td width="40"><img src="img/vide.gif" width="40" height="94"></td>
      
    <td colspan="6" valign="middle" class="moyentext"><strong>Bravo !</strong> 
      Vous avez r&eacute;solu l'&eacute;nigme du mois! Voici l'indice : <font color="#FFFF00"><strong>"<?php echo "$indicemois"; ?>"</strong></font>. 
      Pour participer au tirage au sort et peut-&ecirc;tre gagner une ann&eacute;e 
      de lecture, vous devez soit vous identifier, soit vous inscrire.</td>
    </tr>
    <tr> 
      <td colspan="7"><img src="img/grixpix.gif" width="553" height="1"></td>
    </tr>
    <tr> 
      <td valign="top"></td>
      <td width="256" align="center" valign="top"><form method="post" name="formulaire" action="inscription.php">
<table width="237" border="0" cellpadding="0" cellspacing="0">
        <tr> 
          <td width="217"><img src="img/form_inscription.gif" width="180" height="37" border="0"></td>
        </tr>
        <tr valign="baseline" class="formula"> 
          <td align="right" class="formula"><div align="left"><br>
                En vous inscrivant, vous pourrez m&eacute;moriser tous vos indices 
                et participer<br>
                aux tirages au sort : tous les mois, une &quot;ann&eacute;e de 
                lecture&quot; et de nombreux<br>
                livres &agrave; gagner ! A la fin de l'ann&eacute;e, vous pourrez 
                r&eacute;soudre la grande<br>
                &eacute;nigme gr&acirc;ce &agrave; tous vos indices, et peut-&ecirc;tre 
                vous envoler pour<br>
                Saint-P&eacute;tersbourg...</div></td>
        </tr>
        <tr> 
          <td class="formula"><img src="img/vide.gif" width="57" height="10"></td>
        </tr>
        <tr> 
          <td class="formula"><img src="img/vide.gif" width="57" height="93"></td>
        </tr>
        <tr> 
          <td class="formula"><img src="img/vide.gif" width="57" height="10"></td>
        </tr>
        <tr align="right"> 
          <td class="formula"><input name="envoyer2" type="Submit" class="chpd" value="Inscription"></td>
        </tr>
        <tr> 
          <td class="formula"><img src="img/vide.gif" width="57" height="10"> 
          </td>
        </tr>
      </table></form>
    </td>
      <td width="10" valign="top"><img src="img/vide.gif" width="10" height="316"></td>
      <td width="1" valign="top" bgcolor="#818181"><img src="img/vide.gif" width="1" height="50"></td>
      <td width="9" valign="top"><img src="img/vide.gif" width="9" height="50"></td>
      <td width="227" align="center" valign="top"><form method="post" name="form1" action="maj_indice.php">
	  	<table width="227" height="249" border="0" cellpadding="0" cellspacing="0">
          <tr> 
            <td width="214" height="37"><img src="img/form_identifier.gif" width="120" height="37"></td>
          </tr>
          <tr> 
            <td height="78" class="formula"><div align="left"><br>
                En vous identifiant, vous pourrez enregistrer l'indice du mois 
                dans votre<br>
                passeport.</div></td>
          </tr>
          <tr> 
            <td height="10"><img src="img/vide.gif" width="57" height="10"></td>
          </tr>
          <tr> 
            <td height="35" class="formula"><div align="center">Entrez votre pseudo:<br>
                <input name="pseudo" type="text" class="chpc" value="" size="16">
              </div></td>
          </tr>
          <tr> 
            <td height="10" class="formula"><div align="center"><img src="img/vide.gif" width="57" height="10"></div></td>
          </tr>
          <tr> 
            <td height="35" class="formula"><div align="center">Entrez votre mot de passe:<br>
                <input name="pass" type="password" class="chpc" value="" size="16">
              </div></td>
          </tr>
          <tr> 
            <td height="10" class="formula"><div align="center"><img src="img/vide.gif" width="57" height="10"></div></td>
          </tr>
          <tr> 
            <td height="24" align="right" class="formula"><div align="right"> 
                <input name="envoyer22" type="button" class="chpd" onClick="poster()" value="Envoyer">
              </div></td>
          </tr>
          <tr> 
            <td height="10" class="formula"><img src="img/vide.gif" width="57" height="10"></td>
          </tr>
        </table>
      </form>
      <br>
        <input name="envoyer222" type="button" class="chpd" onClick="window.top.location.href='lostpass.php'" value="Mot de passe oublié?">
      </td>
      <td width="9" valign="top"><img src="img/vide.gif" width="9" height="50"></td>
    </tr>
    <tr> 
      <td colspan="8"><img src="img/grixpix.gif" width="780" height="1"></td>
    </tr>
  </table>
  
<img src="img/vide.gif" width="780" height="18"><br>

</body>
</html>