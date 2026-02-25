<?php
// PARAM DE CONNECTION
	$dbhost        = 'localhost';
	$dbuser        = 'jhtour66';
	$dbpass        = 'pv_TOUR_jh_66';
	$dbname        = 'jhtour66';
	$tableName     = 'email_fan';
	
$conn = mysql_connect($dbhost, $dbuser, $dbpass) or die  ('Error connecting to mysql');
mysql_select_db($dbname);


// fonction Parse Pour Parser Les données PHP <> Flash >> Obligatoire
function Parse($variable,$valeur) {
//echo $variable."=".utf8_encode(urlencode($valeur));
echo $variable."=".$valeur;
}
// fonction Parse]

// [fonction emailOk pour vérif du mail >> Facultatif
function emailOk($m){
         list ($m1, $m2, $m3) = split('[@.]',$m) ;
         if (($m1!="") && ($m2!="") && ($m3!=""))
         {return true ;}
         else
         {return false;}
}
// fonction emailOk]

// [fonction purge pour nettoyer les données >> Facultatif
function purge ($arg_1){ 
         $shark=chr(13);
         $slash=chr(47);
         $tmp1 = eregi_replace( "$shark","",$arg_1 );
         $tmp2 = eregi_replace( "\n"," ",$tmp1 );
         $tmp1 =  eregi_replace( "<","&lt;",$tmp2 );
         $tmp2 =  eregi_replace( ">","&gt;",$tmp1 );
         $tmp2 = stripslashes ($tmp2);
         $tmp1 =  eregi_replace( '"'," ",$tmp2 );
        return $tmp2;
}
// fonction purge]

//[fonction ajout_first_line pour enregistrer les données dans un fichier texte >> Facultatif
function ajout_first_line ($nom_fichier, $line){
        if ( $fichier=fopen($nom_fichier,'r') ){
            $i=1;
            while ( !feof($fichier) ) {
                  $ligne = fgets($fichier, 4096);
                  $tmp[$i]=$ligne;
                  $i++;
            }
            fclose ($fichier);
            $fichier=fopen($nom_fichier,'w');
            fputs ($fichier , $line );
            for ($index=1; $index <= count($tmp) ; $index++)
               fputs ($fichier , $tmp[$index]);
            fclose ($fichier);
            return true;
         }
         else return false;
}
// fonction ajout_first_line]

$clientemail = $_POST['email'];
//echo "email : ".$clientemail."<br>";

// VERIFS - ENREGISTREMENTS
if (emailoK($clientemail)) {
	// nettoyage de l'email >> Facultatif
	$clientemail=purge($clientemail);

  $doublon_query = mysql_query("select email from email_fan where email = '".$clientemail."'") or die ('Error connecting to mysql');
	
	//Si l'email est Correct - Lancement de ta requête de doublon
	if (mysql_num_rows($doublon_query) > 0 ){
		// S'il y a doublon >> Retour de la variable 2 : Email déjà présent
		Parse ("coderetour","2");
	} else {
	  $erreur_insert = "0";
	
	  $insert_query = "insert into email_fan (id_email_fan, email, date_added) values ('NULL', '".$clientemail."', now())";
	  //echo $insert_query."<br>";
	  mysql_query($insert_query) or ($erreur_insert = '1');
	  //echo "erreur_insert : ".$erreur_insert."<br>"; 
    if ($erreur_insert == '1') {
		//if (ajout_first_line ("liste.txt","$clientemail;\n" ) ){
			// Tentative d'enregistrement réussie >> Retour de la variable 3 : Email Enregistré
			Parse ("coderetour","3");
		} else {
			// Tentative d'enregistrement échouée >> Retour de la variable 0 : Trop de connexions, merci de rééssayer plus tard.
			Parse ("coderetour","0");
		}
	}
} else {
	// Si l'Email n'est pas correct >> Retour de la variable 1 : Email mal formé
	Parse ("coderetour","1");
}
mysql_close();
?> 
