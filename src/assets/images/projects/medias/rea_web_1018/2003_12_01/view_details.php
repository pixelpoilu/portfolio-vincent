<?
require_once('Connections/dixhuit.php');

	$req = "SELECT * FROM $tbl_concours where pseudo=\"$voirlogin\" and pass=\"$voirpass\" ";
	mysql_select_db($database_dixhuit, $dixhuit);
	$reqindice = mysql_query($req, $dixhuit) or die(mysql_error());
	$totalResult = mysql_num_rows($reqindice);

  if (!($totalResult == '0'))
  {
	//$num_rep = mysql_num_rows($reqindice);
		while ($detailsuser = mysql_fetch_array($reqindice))
		{
			$user_valid = 1;
			$user_comm = "Bienvenue $detailsuser[pseudo]!";
			$user_ID="$detailsuser[id]";
			$user_pseudo="$detailsuser[pseudo]";
			$user_pass="$detailsuser[pass]";
			$user_nom="$detailsuser[nom]";
			$user_prenom="$detailsuser[prenom]";
			$user_rue_domicile="$detailsuser[rue_domicile]";
			$user_ville_domicile="$detailsuser[ville_domicile]";
			$user_code_postal_domicile="$detailsuser[code_postal_domicile]";
			$user_email="$detailsuser[email]";
			$user_indice_01="$detailsuser[indice_01]";
			$user_indice_02="$detailsuser[indice_02]";
			$user_indice_03="$detailsuser[indice_03]";
			$user_indice_04="$detailsuser[indice_04]";
			$user_indice_05="$detailsuser[indice_05]";
			$user_indice_06="$detailsuser[indice_06]";
			$user_indice_07="$detailsuser[indice_07]";
			$user_indice_08="$detailsuser[indice_08]";
			$user_indice_09="$detailsuser[indice_09]";
			$user_indice_10="$detailsuser[indice_10]";
			$user_indice_11="$detailsuser[indice_11]";
			$user_indice_12="$detailsuser[indice_12]";
			$user_indice_13="$detailsuser[indice_13]";

		}
  }
	else {
			$user_valid = 0;
			$user_comm = "Impossible de trouver votre login";
			$user_pseudo="";
			$user_pass="";
			$user_nom="";
			$user_prenom="";
			$user_rue_domicile="";
			$user_ville_domicile="";
			$user_code_postal_domicile="";
			$user_email="";
			$user_indice_01="";
			$user_indice_02="";
			$user_indice_03="";
			$user_indice_04="";
			$user_indice_05="";
			$user_indice_06="";
			$user_indice_07="";
			$user_indice_08="";
			$user_indice_09="";
			$user_indice_10="";
			$user_indice_11="";
			$user_indice_12="";
			$user_indice_13="";

	}


echo "&user_ID=".$user_ID;
echo "&user_valid=".$user_valid;
echo "&user_comm=".$user_comm;
echo "&jeu_encours=".$jeu_actuel;
echo "&user_pseudo=".$user_pseudo;
echo "&user_pass=".$user_pass;
echo "&user_nom=".$user_nom;
echo "&user_prenom=".$user_prenom;
echo "&user_rue_domicile=".$user_rue_domicile;
echo "&user_ville_domicile=".$user_ville_domicile;
echo "&user_code_postal_domicile=".$user_code_postal_domicile;
echo "&user_email=".$user_email;
echo "&user_indice_01=".$user_indice_01;
echo "&user_indice_02=".$user_indice_02;
echo "&user_indice_03=".$user_indice_03;
echo "&user_indice_04=".$user_indice_04;
echo "&user_indice_05=".$user_indice_05;
echo "&user_indice_06=".$user_indice_06;
echo "&user_indice_07=".$user_indice_07;
echo "&user_indice_08=".$user_indice_08;
echo "&user_indice_09=".$user_indice_09;
echo "&user_indice_10=".$user_indice_10;
echo "&user_indice_11=".$user_indice_11;
echo "&user_indice_12=".$user_indice_12;
echo "&user_indice_13=".$user_indice_13;
echo "&coupable=17";

?>