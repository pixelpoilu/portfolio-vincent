// ---- FONCTION MAILCHECKER V1.0 ------------------------------

function MailChecker(leMail){
/************************************************
* Fonction MailChecker V1.0 par Chi-Fay TRAN 	*
*************************************************
*						*
*         Légende des codes erreur		*
*						*
* -1 : adresse valide				*
* 0	 : aucune valeur d'adresse saisie	*
* 1	 : @ et . non présent			*
* 2	 : registre invalide			*
* 3  : @ au début, pas de compte		*
* 4  : plusieurs @ présent			* 
* 5  : présence d'éléments de la table error 	*
* 6-7: contient des caractères invalide      	*
* 8  : ip contenant des caractères invalide  	*
* 9  : ip incorrecte				*
* 10 : contient des caractères [ ou ] hors ip	*
************************************************/

var code_erreur='';
var mailvalue=leMail.toUpperCase();
var comptevalue, dnsvalue, ipvalue;
var nbpointdns=0;
var regok=0; // variable true/false du mail

TabRegistre= new Array ('.AERO','.BIZ','.COM','.COOP','.INFO','.MUSEUM','.NAME','.COM','.EDU','.GOV','.INT','.MIL','.NET','.ORG','.AC','.AD','.AE','.AF','.AG','.AI','.AL','.AM','.AN','.AO','.AQ','.AR','.AS','.AT','.AU','.AW','.AZ','.BA','.BB','.BD','.BE','.BF','.BG','.BH','.BI','.BJ','.BM','.BN','.BO','.BR','.BS','.BT','.BV','.BW','.BY','.BZ','.CA','.CC','.CD','.CF','.CG','.CH','.CI','.CK','.CL','.CM','.CN','.CO','.CR','.CS','.CU','.CV','.CX','.CY','.CZ','.DE','.DJ','.DK','.DM','.DO','.DZ','.EC','.EE','.EG','.EH','.ER','.ES','.ET','.FI','.FJ','.FK','.FM','.FO','.FR','.GA','.GB','.GD','.GE','.GF','.GG','.GH','.GI','.GL','.GM','.GN','.GP','.GQ','.GR','.GS','.GT','.GU','.GW','.GY','.HK','.HM','.HN','.HR','.HT','.HU','.ID','.IE','.IL','.IM','.IN','.IO','.IQ','.IR','.IS','.IT','.JE','.JM','.JO','.JP','.KE','.KG','.KH','.KI','.KM','.KN','.KP','.KR','.KW','.KY','.KZ','.LA','.LB','.LC','.LI','.LK','.LR','.LS','.LT','.LU','.LV','.LY','.MA','.MC','.MD','.MG','.MH','.MK','.ML','.MM','.MN','.MO','.MP','.MQ','.MR','.MS','.MT','.MU','.MV','.MW','.MX','.MY','.MZ','.NA','.NC','.NE','.NF','.NG','.NI','.NL','.NO','.NP','.NR','.NU','.NZ','.OM','.PA','.PE','.PF','.PG','.PH','.PK','.PL','.PM','.PN','.PR','.PS','.PT','.PW','.PY','.QA','.RE','.RO','.RU','.RW','.SA','.SB','.SC','.SD','.SE','.SG','.SH','.SI','.SJ','.SK','.SL','.SM','.SN','.SO','.SR','.ST','.SU','.SV','.SY','.SZ','.TC','.TD','.TF','.TG','.TH','.TJ','.TK','.TM','.TN','.TO','.TP','.TR','.TT','.TV','.TW','.TZ','.UA','.UG','.UK','.UM','.US','.UY','.UZ','.VA','.VC','.VE','.VG','.VI','.VN','.VU','.WF','.WS','.YE','.YT','.YU','.ZA','.ZM','.ZR','.ZW');
TabError = new Array('.@','.@.','@.',' ','/','\\','..');

// check du mail vide
	if (mailvalue==''){
		regok=0;	
code_erreur='0';
	}else{	
// check de la présence de @ et de .
		if (mailvalue.indexOf('@')==-1 || mailvalue.indexOf('.')==-1){		
			regok=0;
code_erreur='1';			
		}else{
// check de la validité du registre			
			if 	(mailvalue.charAt(mailvalue.length-1)!=']'){
				for (var i=0;i<TabRegistre.length;i++){				
					if (mailvalue.substr(mailvalue.length-TabRegistre[i].length,TabRegistre[i].length)==TabRegistre[i]){
					regok=1;
code_erreur='-1';							
					break;
					}else{
code_erreur='2';				
					}				
				}
			}else{
			regok=1;			
			}

// check pour un @ au debut
			if (regok==1){
				if (mailvalue.indexOf('@')==0){
					regok=0;
code_erreur='3';			
				}				
			}						
// check pour un @ unique			
			if (regok==1){
				if (mailvalue.indexOf('@')!=mailvalue.lastIndexOf('@')){
					regok=0;
code_erreur='4';			
				}				
			}			
// check en fonction de la table error			
			if (regok==1){
				for(var i=0;i<=TabError.length;i++){				
					if (mailvalue.indexOf(TabError[i])!=-1){
						regok=0;
code_erreur='5';	
						break;
					}									
				}
			}		
// Check de la validité des caractères			
			if (regok==1){
				for (var i=0;i<mailvalue.length;i++){
					if (mailvalue.charCodeAt(i)<=44 || mailvalue.charCodeAt(i)>=96){
						regok=0;
code_erreur='6';
						break;
					}
					if (mailvalue.charCodeAt(i)>=58 && mailvalue.charCodeAt(i)<=63){
						regok=0;
code_erreur='6';
						break;
					}										
					if (mailvalue.charCodeAt(i)==47 || mailvalue.charCodeAt(i)==92 || mailvalue.charCodeAt(i)==94){
						regok=0;
code_erreur='6';			
						break;
					}					
/*					if (mailvalue.charCodeAt(i)<=44){					
					
					if ((mailvalue.charAt(i)>=44 && mailvalue.charAt(i)<58)&&mailvalue.charAt(i)!=47){
					regok=1;}
					if (regok=1){
					}	
					 ||(mailvalue.charAt(i)>=64 && mailvalue.charAt(i)<92)||mailvalue.charAt(i)==) 
*/
				}
			}	
// check du dns sous la forme d'ip			
			if (regok==1){
				comptevalue=mailvalue.substr(0,mailvalue.indexOf('@'));
				if (comptevalue.indexOf('[')!=-1 || comptevalue.indexOf(']')!=-1){
					regok=0;
code_erreur='7';							
				}
			}
// check de la spésence de [X] pour format ip			
			if (regok==1){
				dnsvalue=mailvalue.substr(mailvalue.indexOf('@')+1,mailvalue.length-mailvalue.indexOf('@'));								
				if (dnsvalue.charAt(0)=='[' && dnsvalue.charAt(dnsvalue.length-1)==']'){
// check de la syntaxe sous la forme [xxx]		
					ipvalue=dnsvalue.substring(1,dnsvalue.length-1);
					nbpointdns=0;
					for (var i=0;i<ipvalue.length;i++){
// check de la syntaxe de l'ip
						if (ipvalue.charAt(i)=='.'){												
							nbpointdns++;							
						}
						if (ipvalue.charCodeAt(i)<46 || ipvalue.charCodeAt(i)>=58 || ipvalue.charCodeAt(i)==47){
							regok=0;							
							break;
						}												
					}					
					domainvalue = ipvalue.split('.');
					for (var i=0;i<domainvalue.length;i++){
						if (domainvalue[i].length>3){
							regok=0;
							break;
						}
					}										
					if (regok==0 || nbpointdns!=3){
					regok=0;
code_erreur='9';					
					}else{ 
					regok=-1;
code_erreur='-1';					
					}								
				}else if (dnsvalue.indexOf('[')!=-1 || dnsvalue.indexOf(']')!=-1){
					regok=0;
code_erreur='10';					
				}else{
					regok=1;					
code_erreur='-1';					
				}				
			}							
		} 		
	}	

	if (regok==0){
		switch (code_erreur){
		case '0':
			alert('Merci d\'indiquer votre E-mail !');
			break;
/*		case '1':
			alert('Votre E-mail ne contient pas les éléments de syntaxe courants (\'@\' et \'.\') !');			
			break;	
		case '2':
			alert('Le nom du registre que vous avez saisi pour votre E-mail n\'existe pas !');
			break;
		case '3':
			alert('Vous n\'avez pas saisi de compte à votre E-mail !');
			break;						
		case '4':
			alert('Votre E-mail contient plusieurs \'@\' !');
			break;		
*/		case '5':
			alert('Votre E-mail n\'est pas valide !');
			break;
		case '6':
			alert('Votre E-mail contient des caractères invalides !');
			break;
		case '7':
			alert('Votre E-mail contient des caractères invalides !');
			break;
/*		case '8':
			alert('L\'IP de votre E-mail contient des caractères invalides !');
			break;
		case '9':
			alert('L\'IP de votre E-mail n\'est pas valide !');
			break;
*/		case '10':
			alert('Votre E-mail contient des caractères invalides !');			
			break;													
		default :
			alert('Votre E-mail n\'est pas valide !');						
		}
		return false;
	}else{
		return true;
	}

}	