<?php
//  require('includes/application_top.php');
// PARAM DE CONNECTION
	$dbhost        = 'localhost';
	$dbuser        = 'jhtour66';
	$dbpass        = 'pv_TOUR_jh_66';
	$dbname        = 'jhtour66';
	
$conn = mysql_connect($dbhost, $dbuser, $dbpass) or die  ('Error connecting to mysql');
mysql_select_db($dbname);
?>
<?php
// CONTROLE DU FAN
if (array_key_exists("coderetour", $_POST))
{
  if ((int)$_POST["coderetour"] == "3")
  {
    $nom_post = strtoupper($_POST["nom"]);
    $num_post = $_POST["adherent"];
    
    // VERIF NUMERO
    //echo "<br>select numero, nom from adherent where numero = '".$num_post."'";
    $verif_num_query = mysql_query("select numero, nom from adherent where numero = '".$num_post."'") or  die ('Error de requete mysql');

    if (mysql_num_rows($verif_num_query) < 1 )
    {
		//echo "<br>Numéro d'adherent inconnu";
		//tep_redirect('http://www.tour66.fr/index_direct.php?error=4');
		header("Location: http://www.tour66.fr/v3/index_direct.php?error=4");
		// >> Retour index_direct.php?error=4;
	}
    else
    {
      $rst_adherent = mysql_fetch_array($verif_num_query);
      $nom_record = strtoupper($rst_adherent['nom']);
      if ($nom_record == $nom_post)
      {
        //echo "<br>Acces validé";
        //tep_redirect('http://www.tour66.fr/index.php');
        header("Location: http://www.tour66.fr/index.php");
      }
      else
      {
	  	//echo "<br>Le nom ne correspond pas au numéro d'adherent";
		  // >> Retour index_direct.php?error=5;
		  //tep_redirect('http://www.tour66.fr/index_direct.php?error=5');
		  header("Location: http://www.tour66.fr/v3/index_direct.php?error=5");
	  }
    }
  }
  else
  {
  	//echo "<br>Le code retour n'est pas egal à 3";
  	//tep_redirect('http://www.tour66.fr/index_direct.php?error=4');
  	header("Location: http://www.tour66.fr/v3/index_direct.php?error=4");
	// >> Retour index_direct.php?error=4;
	}
}
else
{
	//echo "<br>Pas de code retour en post";
  //tep_redirect('http://www.tour66.fr/index_direct.php?error=4');
  header("Location: http://www.tour66.fr/v3/index_direct.php?error=4");
	// >> Retour index_direct.php?error=4;
}
mysql_close();
?>

