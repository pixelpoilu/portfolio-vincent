function highlight ()
 {
 movepossible = 0;
if (Number(starty) == Number(endy)) {
	// draw hline
	if (Number(startx)>Number(endx)) {
		setProperty("hline", _x, Number(endx*18)+6);
		setProperty("hline", _y, Number(endy*18)+6);
		linelength = Number((startx-endx))+1;
		tellTarget ("hline") {
			gotoAndStop(_parent.:linelength);
		}
		direction = "w";
	} else {
		setProperty("hline", _x, Number(startx*18)+6);
		setProperty("hline", _y, Number(starty*18)+6);
		linelength = Number((endx-startx))+1;
		tellTarget ("hline") {
			gotoAndStop(_parent.:linelength);
		}
		direction = "e";
	}
	setProperty("hline", _visible, 1);
	setProperty("vline", _visible, 0);
	setProperty("dlineup", _visible, 0);
	setProperty("dlinedown", _visible, 0);
	movepossible = 1;
} else {
	if (Number(startx) == Number(endx)) {
		// draw vline
		if (Number(starty)>Number(endy)) {
			setProperty("vline", _x, Number(endx*18)+6);
			setProperty("vline", _y, Number(endy*18)+6);
			linelength = Number((starty-endy))+1;
			tellTarget ("vline") {
				gotoAndStop(_parent.:linelength);
			}
			direction = "n";
		} else {
			setProperty("vline", _x, Number(startx*18)+6);
			setProperty("vline", _y, Number(starty*18)+6);
			linelength = Number((endy-starty))+1;
			tellTarget ("vline") {
				gotoAndStop(_parent.:linelength);
			}
			direction = "s";
		}
		setProperty("hline", _visible, 0);
		setProperty("vline", _visible, 1);
		setProperty("dlineup", _visible, 0);
		setProperty("dlinedown", _visible, 0);
		movepossible = 1;
	} else {
		if (Number((endy-starty)/(endx-startx)) == 1) {
			// draw dlineup
			if (Number(starty)>Number(endy)) {
				setProperty("dlineup", _x, Number(endx*18)+6);
				setProperty("dlineup", _y, Number(endy*18)+6);
				linelength = Number((starty-endy))+1;
				tellTarget ("dlineup") {
					gotoAndStop(_parent.:linelength);
				}
				direction = "nw";
			} else {
				setProperty("dlineup", _x, Number(startx*18)+6);
				setProperty("dlineup", _y, Number(starty*18)+6);
				linelength = Number((endy-starty))+1;
				tellTarget ("dlineup") {
					gotoAndStop(_parent.:linelength);
				}
				direction = "se";
			}
			setProperty("hline", _visible, 0);
			setProperty("vline", _visible, 0);
			setProperty("dlineup", _visible, 1);
			setProperty("dlinedown", _visible, 0);
			movepossible = 1;
		} else {
			if (Number((endy-starty)/(endx-startx)) == Number(-1)) {
				// draw dlinedown
				if (Number(starty)>Number(endy)) {
					setProperty("dlinedown", _x, Number(startx*18)+6);
					setProperty("dlinedown", _y, Number(starty*18)+6);
					linelength = Number((starty-endy))+1;
					tellTarget ("dlinedown") {
						gotoAndStop(_parent.:linelength);
					}
					direction = "ne";
				} else {
					setProperty("dlinedown", _x, Number(endx*18)+6);
					setProperty("dlinedown", _y, Number(endy*18)+6);
					linelength = Number((endy-starty))+1;
					tellTarget ("dlinedown") {
						gotoAndStop(_parent.:linelength);
					}
					direction = "sw";
				}
				setProperty("hline", _visible, 0);
				setProperty("vline", _visible, 0);
				setProperty("dlineup", _visible, 0);
				setProperty("dlinedown", _visible, 1);
				movepossible = 1;
			} else {
				setProperty("hline", _visible, 0);
				setProperty("vline", _visible, 0);
				setProperty("dlineup", _visible, 0);
				setProperty("dlinedown", _visible, 0);
			}
		}
	}
}

 }
 
function getword ()
 {
			 // get selected word
			// "ltr"&y&"-"&x&":letter"
			ltrword = "";
			if (direction eq "e") {
				yltr = starty;
				xltrcur = startx;
				xltrend = endx;
				while (Number(xltrcur)<=Number(xltrend)) {
					ltrword = ltrword add eval("ltr" add yltr add "-" add xltrcur add ":letter");
					xltrcur = Number(xltrcur)+1;
				}
			}
			if (direction eq "w") {
				yltr = starty;
				xltrcur = endx;
				xltrend = startx;
				while (Number(xltrcur)<=Number(xltrend)) {
					ltrword = ltrword add eval("ltr" add yltr add "-" add xltrcur add ":letter");
					xltrcur = Number(xltrcur)+1;
				}
			}
			if (direction eq "n") {
				xltr = startx;
				yltrcur = endy;
				yltrend = starty;
				while (Number(yltrcur)<=Number(yltrend)) {
					ltrword = ltrword add eval("ltr" add yltrcur add "-" add xltr add ":letter");
					yltrcur = Number(yltrcur)+1;
				}
			}
			if (direction eq "s") {
				xltr = startx;
				yltrcur = starty;
				yltrend = endy;
				while (Number(yltrcur)<=Number(yltrend)) {
					ltrword = ltrword add eval("ltr" add yltrcur add "-" add xltr add ":letter");
					yltrcur = Number(yltrcur)+1;
				}
			}
			if (direction eq "ne") {
				yltrcur = starty;
				xltrcur = startx;
				xltrend = endx;
				while (Number(xltrcur)<=Number(xltrend)) {
					ltrword = ltrword add eval("ltr" add yltrcur add "-" add xltrcur add ":letter");
					xltrcur = Number(xltrcur)+1;
					yltrcur = yltrcur-1;
				}
			}
			if (direction eq "se") {
				yltrcur = starty;
				xltrcur = startx;
				xltrend = endx;
				while (Number(xltrcur)<=Number(xltrend)) {
					ltrword = ltrword add eval("ltr" add yltrcur add "-" add xltrcur add ":letter");
					xltrcur = Number(xltrcur)+1;
					yltrcur = Number(yltrcur)+1;
				}
			}
			if (direction eq "nw") {
				yltrcur = endy;
				xltrcur = endx;
				xltrend = startx;
				while (Number(xltrcur)<=Number(xltrend)) {
					ltrword = ltrword add eval("ltr" add yltrcur add "-" add xltrcur add ":letter");
					xltrcur = Number(xltrcur)+1;
					yltrcur = Number(yltrcur)+1;
				}
			}
			if (direction eq "sw") {
				yltrcur = endy;
				xltrcur = endx;
				xltrend = startx;
				while (Number(xltrcur)<=Number(xltrend)) {
					ltrword = ltrword add eval("ltr" add yltrcur add "-" add xltrcur add ":letter");
					xltrcur = Number(xltrcur)+1;
					yltrcur = yltrcur-1;
				}
			}

 }
 
function comparewords ()
 {
		 // ltrword
		foundword = 0;
		bwlen = length(ltrword);
		bwcur = bwlen;
		drowrtl = "";
		while (Number(bwcur)>0) {
			drowrtl = drowrtl add substring(ltrword,bwcur,1);
			bwcur = bwcur-1;
		}
		curword = 1;
		while (Number(curword)<=Number(numwords)) {
			if (eval("wordfound" add curword) == 0) {
				if ((ltrword eq eval("word" add curword)) or (drowrtl eq eval("word" add curword))) {
					foundword = curword;
				}
			}
			curword = Number(curword)+1;
		}

 }
 
function foundaword ()
 {
		 set("wordfound" add foundword, 1);
		tellTarget ("cross" add foundword) {
			gotoAndStop(2);
		}
		setProperty("wordmov" add foundword, _alpha, 100);
		tellTarget ("wordmov" add foundword) {
			gotoAndStop(10);
		}
		numfoundwords = Number(numfoundwords)+1;
		if (direction eq "e") {
			yltr = starty;
			xltrcur = startx;
			xltrend = endx;
			while (Number(xltrcur)<=Number(xltrend)) {
				tellTarget ("ltr" add yltr add "-" add xltrcur) {
					gotoAndStop(2);
				}
				xltrcur = Number(xltrcur)+1;
			}
		}
		if (direction eq "w") {
			yltr = starty;
			xltrcur = endx;
			xltrend = startx;
			while (Number(xltrcur)<=Number(xltrend)) {
				tellTarget ("ltr" add yltr add "-" add xltrcur) {
					gotoAndStop(2);
				}
				xltrcur = Number(xltrcur)+1;
			}
		}
		if (direction eq "n") {
			xltr = startx;
			yltrcur = endy;
			yltrend = starty;
			while (Number(yltrcur)<=Number(yltrend)) {
				tellTarget ("ltr" add yltrcur add "-" add xltr) {
					gotoAndStop(2);
				}
				yltrcur = Number(yltrcur)+1;
			}
		}
		if (direction eq "s") {
			xltr = startx;
			yltrcur = starty;
			yltrend = endy;
			while (Number(yltrcur)<=Number(yltrend)) {
				tellTarget ("ltr" add yltrcur add "-" add xltr) {
					gotoAndStop(2);
				}
				yltrcur = Number(yltrcur)+1;
			}
		}
		if (direction eq "ne") {
			yltrcur = starty;
			xltrcur = startx;
			xltrend = endx;
			while (Number(xltrcur)<=Number(xltrend)) {
				tellTarget ("ltr" add yltrcur add "-" add xltrcur) {
					gotoAndStop(2);
				}
				xltrcur = Number(xltrcur)+1;
				yltrcur = yltrcur-1;
			}
		}
		if (direction eq "se") {
			yltrcur = starty;
			xltrcur = startx;
			xltrend = endx;
			while (Number(xltrcur)<=Number(xltrend)) {
				tellTarget ("ltr" add yltrcur add "-" add xltrcur) {
					gotoAndStop(2);
				}
				xltrcur = Number(xltrcur)+1;
				yltrcur = Number(yltrcur)+1;
			}
		}
		if (direction eq "nw") {
			yltrcur = endy;
			xltrcur = endx;
			xltrend = startx;
			while (Number(xltrcur)<=Number(xltrend)) {
				tellTarget ("ltr" add yltrcur add "-" add xltrcur) {
					gotoAndStop(2);
				}
				xltrcur = Number(xltrcur)+1;
				yltrcur = Number(yltrcur)+1;
			}
		}
		if (direction eq "sw") {
			yltrcur = endy;
			xltrcur = endx;
			xltrend = startx;
			while (Number(xltrcur)<=Number(xltrend)) {
				tellTarget ("ltr" add yltrcur add "-" add xltrcur) {
					gotoAndStop(2);
				}
				xltrcur = Number(xltrcur)+1;
				yltrcur = yltrcur-1;
			}
		}

 } 
 
 
function parser ()
 {
	 puzlength = length(puzzledata);
	puzchr = "";
	puzvar = "";
	puzval = "";
	varval = 1;
	parsecur = 1;
	while (Number(parsecur)<=Number(puzlength)) {
		puzchr = substring(puzzledata, parsecur, 1);
		if (puzchr eq "&") {
			varval = 1;
			set(puzvar, puzval);
			puzvar = "";
			puzval = "";
		} else {
			if (puzchr eq "=") {
				varval = 2;
			} else {
				if (Number(varval) == 1) {
					puzvar = puzvar add puzchr;
				} else {
					puzval = puzval add puzchr;
				}
			}
		}
		parsecur = Number(parsecur)+1;
	}
 } 
  