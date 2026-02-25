<?php
require_once('Connections/dixhuit.php');
?>
<HTML>
<HEAD>
<meta http-equiv=Content-Type content="text/html;  charset=ISO-8859-1">
<TITLE>::: 10|18 20 ans de grands détectives :::</TITLE>
<script language="JavaScript1.2" src="liste_jeux.js"></script>
<script language="JavaScript" type="text/JavaScript">

function finanim()
{
onclick=window.top.close();
}

function jeudumois()

{
	var xMax = screen.width, yMax = screen.height;
	var xOffset = xMax-(xMax/6), yOffset = yMax-(yMax/6);
	window.open("jeux_decembre/index.html","map","left=0,top=0,width=797,height=700,directories=yes,location=no,status=yes,scrollbars=yes,resizable=yes,menubar=no,toolbar=no");
}

function lostpass()

{
	var xMax = screen.width, yMax = screen.height;
	var xOffset = xMax-(xMax/6), yOffset = yMax-(yMax/6);
	window.open("lostpass.php","fenetre","left=0,top=0,width=790,height=600,directories=no,location=no,status=yes,scrollbars=yes,resizable=yes,menubar=no,toolbar=no");
}
function inscript()

{
	var xMax = screen.width, yMax = screen.height;
	var xOffset = xMax-(xMax/6), yOffset = yMax-(yMax/6);
	window.open("inscription2.php","fenetre","left=0,top=0,width=790,height=600,directories=no,location=no,status=yes,scrollbars=yes,resizable=yes,menubar=no,toolbar=no");
}
</script>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
</head>
<body bgcolor="#630800" text="#630800" link="#FFFF99" vlink="#FFCC33" alink="#FFFF00"  leftmargin="0" topmargin="0" marginwidth="0" marginheight="0"><OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"	codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0"	WIDTH="100%"	HEIGHT="100%"	id="interface"	ALIGN="CENTER">
<PARAM NAME=movie VALUE="interface_decembre.swf">
<PARAM NAME=quality VALUE=high>
<PARAM NAME=bgcolor VALUE=#630800>
<EMBED src="interface_decembre.swf" quality=high bgcolor=#630800 WIDTH="100%" HEIGHT="100%" NAME="interface" ALIGN="CENTER" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer">
</EMBED>
</OBJECT>
</BODY>
</HTML>
<?
echo "&jeu_ID=".$jeu_ID; 
echo "&jeu_actuel=".$jeu_actuel; 
?>