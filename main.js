function writeToLog(writeMe) {
	document.getElementById("log").innerHTML += writeMe + " ";
}

function clearLog() {
	document.getElementById("log").innerHTML = "<p>Moves:</p>";
}

function recolor(z) {
	var selectedColor = document.querySelector('input[name = "selection"]:checked').value;
	
	switch (selectedColor) {
		case "G":
			document.getElementById(z).style.backgroundColor = "green";
			break;
		case "W":
			document.getElementById(z).style.backgroundColor = "navajowhite";
			break;
		case "O":
			document.getElementById(z).style.backgroundColor = "orange";
			break;
		case "R":
			document.getElementById(z).style.backgroundColor = "red";
			break;
		case "Y":
			document.getElementById(z).style.backgroundColor = "yellow";
			break;
		case "B":
			document.getElementById(z).style.backgroundColor = "dodgerblue";
			break;
		default:
			break;
	}
	
	document.getElementById(z).innerHTML = selectedColor;
}

function reset() {
	// reset blue face
	document.getElementById("cornerA").style.backgroundColor = "dodgerblue";
	document.getElementById("cornerA").innerHTML = "B";
	document.getElementById("edgeA").style.backgroundColor = "dodgerblue";
	document.getElementById("edgeA").innerHTML = "B";
	document.getElementById("cornerB").style.backgroundColor = "dodgerblue";
	document.getElementById("cornerB").innerHTML = "B";
	document.getElementById("edgeB").style.backgroundColor = "dodgerblue";
	document.getElementById("edgeB").innerHTML = "B";
	document.getElementById("cornerC").style.backgroundColor = "dodgerblue";
	document.getElementById("cornerC").innerHTML = "B";
	document.getElementById("edgeC").style.backgroundColor = "dodgerblue";
	document.getElementById("edgeC").innerHTML = "B";
	document.getElementById("cornerD").style.backgroundColor = "dodgerblue";
	document.getElementById("cornerD").innerHTML = "B";
	document.getElementById("edgeD").style.backgroundColor = "dodgerblue";
	document.getElementById("edgeD").innerHTML = "B";
	document.getElementById("blueCenter").style.backgroundColor = "dodgerblue";
	document.getElementById("blueCenter").innerHTML = "B";
	
	// reset orange face
	document.getElementById("cornerE").style.backgroundColor = "orange";
	document.getElementById("cornerE").innerHTML = "O";
	document.getElementById("edgeE").style.backgroundColor = "orange";
	document.getElementById("edgeE").innerHTML = "O";
	document.getElementById("cornerF").style.backgroundColor = "orange";
	document.getElementById("cornerF").innerHTML = "O";
	document.getElementById("edgeF").style.backgroundColor = "orange";
	document.getElementById("edgeF").innerHTML = "O";
	document.getElementById("cornerG").style.backgroundColor = "orange";
	document.getElementById("cornerG").innerHTML = "O";
	document.getElementById("edgeG").style.backgroundColor = "orange";
	document.getElementById("edgeG").innerHTML = "O";
	document.getElementById("cornerH").style.backgroundColor = "orange";
	document.getElementById("cornerH").innerHTML = "O";
	document.getElementById("edgeH").style.backgroundColor = "orange";
	document.getElementById("edgeH").innerHTML = "O";
	document.getElementById("orangeCenter").style.backgroundColor = "orange";
	document.getElementById("orangeCenter").innerHTML = "O";
	
	// reset white face
	document.getElementById("cornerI").style.backgroundColor = "navajowhite";
	document.getElementById("cornerI").innerHTML = "W";
	document.getElementById("edgeI").style.backgroundColor = "navajowhite";
	document.getElementById("edgeI").innerHTML = "W";
	document.getElementById("cornerJ").style.backgroundColor = "navajowhite";
	document.getElementById("cornerJ").innerHTML = "W";
	document.getElementById("edgeJ").style.backgroundColor = "navajowhite";
	document.getElementById("edgeJ").innerHTML = "W";
	document.getElementById("cornerK").style.backgroundColor = "navajowhite";
	document.getElementById("cornerK").innerHTML = "W";
	document.getElementById("edgeK").style.backgroundColor = "navajowhite";
	document.getElementById("edgeK").innerHTML = "W";
	document.getElementById("cornerL").style.backgroundColor = "navajowhite";
	document.getElementById("cornerL").innerHTML = "W";
	document.getElementById("edgeL").style.backgroundColor = "navajowhite";
	document.getElementById("edgeL").innerHTML = "W";
	document.getElementById("whiteCenter").style.backgroundColor = "navajowhite";
	document.getElementById("whiteCenter").innerHTML = "W";
	
	// reset red face
	document.getElementById("cornerM").style.backgroundColor = "red";
	document.getElementById("cornerM").innerHTML = "R";
	document.getElementById("edgeM").style.backgroundColor = "red";
	document.getElementById("edgeM").innerHTML = "R";
	document.getElementById("cornerN").style.backgroundColor = "red";
	document.getElementById("cornerN").innerHTML = "R";
	document.getElementById("edgeN").style.backgroundColor = "red";
	document.getElementById("edgeN").innerHTML = "R";
	document.getElementById("cornerO").style.backgroundColor = "red";
	document.getElementById("cornerO").innerHTML = "R";
	document.getElementById("edgeO").style.backgroundColor = "red";
	document.getElementById("edgeO").innerHTML = "R";
	document.getElementById("cornerP").style.backgroundColor = "red";
	document.getElementById("cornerP").innerHTML = "R";
	document.getElementById("edgeP").style.backgroundColor = "red";
	document.getElementById("edgeP").innerHTML = "R";
	document.getElementById("redCenter").style.backgroundColor = "red";
	document.getElementById("redCenter").innerHTML = "R";
	
	// reset yellow face
	document.getElementById("cornerQ").style.backgroundColor = "yellow";
	document.getElementById("cornerQ").innerHTML = "Y";
	document.getElementById("edgeQ").style.backgroundColor = "yellow";
	document.getElementById("edgeQ").innerHTML = "Y";
	document.getElementById("cornerR").style.backgroundColor = "yellow";
	document.getElementById("cornerR").innerHTML = "Y";
	document.getElementById("edgeR").style.backgroundColor = "yellow";
	document.getElementById("edgeR").innerHTML = "Y";
	document.getElementById("cornerS").style.backgroundColor = "yellow";
	document.getElementById("cornerS").innerHTML = "Y";
	document.getElementById("edgeS").style.backgroundColor = "yellow";
	document.getElementById("edgeS").innerHTML = "Y";
	document.getElementById("cornerT").style.backgroundColor = "yellow";
	document.getElementById("cornerT").innerHTML = "Y";
	document.getElementById("edgeT").style.backgroundColor = "yellow";
	document.getElementById("edgeT").innerHTML = "Y";
	document.getElementById("yellowCenter").style.backgroundColor = "yellow";
	document.getElementById("yellowCenter").innerHTML = "Y";
	
	// reset green face
	document.getElementById("cornerU").style.backgroundColor = "green";
	document.getElementById("cornerU").innerHTML = "G";
	document.getElementById("edgeU").style.backgroundColor = "green";
	document.getElementById("edgeU").innerHTML = "G";
	document.getElementById("cornerV").style.backgroundColor = "green";
	document.getElementById("cornerV").innerHTML = "G";
	document.getElementById("edgeV").style.backgroundColor = "green";
	document.getElementById("edgeV").innerHTML = "G";
	document.getElementById("cornerW").style.backgroundColor = "green";
	document.getElementById("cornerW").innerHTML = "G";
	document.getElementById("edgeW").style.backgroundColor = "green";
	document.getElementById("edgeW").innerHTML = "G";
	document.getElementById("cornerX").style.backgroundColor = "green";
	document.getElementById("cornerX").innerHTML = "G";
	document.getElementById("edgeX").style.backgroundColor = "green";
	document.getElementById("edgeX").innerHTML = "G";
	document.getElementById("greenCenter").style.backgroundColor = "green";
	document.getElementById("greenCenter").innerHTML = "G";
}

function validate(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
	var greenCount = 0, whiteCount = 0, orangeCount = 0, redCount = 0, yellowCount = 0, blueCount = 0;
	var edgeColors = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x];
	
	for (i=0;i<=23;i++) {
		switch (edgeColors[i]) {
			case "G":
			greenCount++;
			break;
		case "W":
			whiteCount++;
			break;
		case "O":
			orangeCount++;
			break;
		case "R":
			redCount++;
			break;
		case "Y":
			yellowCount++;
			break;
		case "B":
			blueCount++;
			break;
		default:
			break;
		}
	}
	
	if (greenCount == 4) {
		if (whiteCount == 4) {
			if (orangeCount == 4) {
				if (redCount == 4) {
					if (yellowCount == 4) {
						if (blueCount == 4) {
							return true;
						}
					}
				}
			}
		}
	}
	else {return false;}
}

function swapEdge(firstEdge, secondEdge) {
	var edge1 = secondEdge;
	var edge2 = firstEdge;
	return [edge1, edge2];
}

function swapCorner(firstCorner, secondCorner, thirdCorner) {
	// ***Reminder***
}

function checkEdges(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
	var edgeA = a;
	var edgeB = b;
	var edgeC = c;
	var edgeD = d;
	var edgeE = e;
	var edgeF = f;
	var edgeG = g;
	var edgeH = h;
	var edgeI = i;
	var edgeJ = j;
	var edgeK = k;
	var edgeL = l;
	var edgeM = m;
	var edgeN = n;
	var edgeO = o;
	var edgeP = p;
	var edgeQ = q;
	var edgeR = r;
	var edgeS = s;
	var edgeT = t;
	var edgeU = u;
	var edgeV = v;
	var edgeW = w;
	var edgeX = x;
	
	if (edgeA == "B" && edgeB == "B" && edgeC == "B" && edgeD == "B") {
		if (edgeE == "O" && edgeF == "O" && edgeG == "O" && edgeH == "O") {
			if (edgeI == "W" && edgeJ == "W" && edgeK == "W" && edgeL == "W") {
				if (edgeM == "R" && edgeN == "R" && edgeO == "R" && edgeP == "R") {
					if (edgeQ == "Y" && edgeR == "Y" && edgeS == "Y" && edgeT == "Y") {
						if (edgeU == "G" && edgeV == "G" && edgeW == "G" && edgeX == "G") {
							return true;
						}
					}
				}
			}
		}
	}
	else {return false;}
}

function checkCorners(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x) {
	// ***Reminder***
}

function calculateEdges() {
	var temp = "";
	var edgeA = document.getElementById("edgeA").innerHTML;
	var edgeB = document.getElementById("edgeB").innerHTML;
	var edgeC = document.getElementById("edgeC").innerHTML;
	var edgeD = document.getElementById("edgeD").innerHTML;
	var edgeE = document.getElementById("edgeE").innerHTML;
	var edgeF = document.getElementById("edgeF").innerHTML;
	var edgeG = document.getElementById("edgeG").innerHTML;
	var edgeH = document.getElementById("edgeH").innerHTML;
	var edgeI = document.getElementById("edgeI").innerHTML;
	var edgeJ = document.getElementById("edgeJ").innerHTML;
	var edgeK = document.getElementById("edgeK").innerHTML;
	var edgeL = document.getElementById("edgeL").innerHTML;
	var edgeM = document.getElementById("edgeM").innerHTML;
	var edgeN = document.getElementById("edgeN").innerHTML;
	var edgeO = document.getElementById("edgeO").innerHTML;
	var edgeP = document.getElementById("edgeP").innerHTML;
	var edgeQ = document.getElementById("edgeQ").innerHTML;
	var edgeR = document.getElementById("edgeR").innerHTML;
	var edgeS = document.getElementById("edgeS").innerHTML;
	var edgeT = document.getElementById("edgeT").innerHTML;
	var edgeU = document.getElementById("edgeU").innerHTML;
	var edgeV = document.getElementById("edgeV").innerHTML;
	var edgeW = document.getElementById("edgeW").innerHTML;
	var edgeX = document.getElementById("edgeX").innerHTML;
	
	if (validate(edgeA, edgeB, edgeC, edgeD, edgeE, edgeF, edgeG, edgeH, edgeI, edgeJ, edgeK, edgeL, edgeM, edgeN, edgeO, edgeP, edgeQ, edgeR, edgeS, edgeT, edgeU, edgeV, edgeW, edgeX) == true) {
		
		while (checkEdges(edgeA, edgeB, edgeC, edgeD, edgeE, edgeF, edgeG, edgeH, edgeI, edgeJ, edgeK, edgeL, edgeM, edgeN, edgeO, edgeP, edgeQ, edgeR, edgeS, edgeT, edgeU, edgeV, edgeW, edgeX) == false) {
			if (edgeB == "G") {
				if (edgeM == "W") {
					writeToLog("U");

					temp = swapEdge(edgeB, edgeU);
					edgeB = temp[0];
					edgeU = temp[1];

					temp = swapEdge(edgeM, edgeK);
					edgeM = temp[0];
					edgeK = temp[1];
				}
				else if (edgeM == "R") {
					writeToLog("V");

					temp = swapEdge(edgeB, edgeV);
					edgeB = temp[0];
					edgeV = temp[1];

					temp = swapEdge(edgeM, edgeO);
					edgeM = temp[0];
					edgeO = temp[1];
				}
				else if (edgeM == "Y") {
					writeToLog("W");

					temp = swapEdge(edgeB, edgeW);
					edgeB = temp[0];
					edgeW = temp[1];

					temp = swapEdge(edgeM, edgeS);
					edgeM = temp[0];
					edgeS = temp[1];
				}
				else if (edgeM == "O") {
					writeToLog("X");
					
					temp = swapEdge(edgeB, edgeX);
					edgeB = temp[0];
					edgeX = temp[1];

					temp = swapEdge(edgeM, edgeG);
					edgeM = temp[0];
					edgeG = temp[1];
				}
				else if (edgeM == "B") {
					alert("I am in an invalid state!");
					return false;
				}
				else {}
			}
			else if (edgeB == "W") {
				if (edgeM == "B") {
					writeToLog("I");

					temp = swapEdge(edgeB, edgeI);
					edgeB = temp[0];
					edgeI = temp[1];

					temp = swapEdge(edgeM, edgeC);
					edgeM = temp[0];
					edgeC = temp[1];
				}
				else if (edgeM == "R") {
					writeToLog("J");

					temp = swapEdge(edgeB, edgeJ);
					edgeB = temp[0];
					edgeJ = temp[1];

					temp = swapEdge(edgeM, edgeP);
					edgeM = temp[0];
					edgeP = temp[1];
				}
				else if (edgeM == "G") {
					writeToLog("K");

					temp = swapEdge(edgeB, edgeK);
					edgeB = temp[0];
					edgeK = temp[1];

					temp = swapEdge(edgeM, edgeU);
					edgeM = temp[0];
					edgeU = temp[1];
				}
				else if (edgeM == "O") {
					writeToLog("L");
					
					temp = swapEdge(edgeB, edgeL);
					edgeB = temp[0];
					edgeL = temp[1];

					temp = swapEdge(edgeM, edgeF);
					edgeM = temp[0];
					edgeF = temp[1];
				}
				else if (edgeM == "Y") {
					alert("I am in an invalid state!");
					return false;
				}
				else {}
			}
			else if (edgeB == "O") {
				if (edgeM == "W") {
					writeToLog("F");

					temp = swapEdge(edgeB, edgeF);
					edgeB = temp[0];
					edgeF = temp[1];

					temp = swapEdge(edgeM, edgeL);
					edgeM = temp[0];
					edgeL = temp[1];
				}
				else if (edgeM == "Y") {
					writeToLog("H");

					temp = swapEdge(edgeB, edgeH);
					edgeB = temp[0];
					edgeH = temp[1];

					temp = swapEdge(edgeM, edgeR);
					edgeM = temp[0];
					edgeR = temp[1];
				}
				else if (edgeM == "B") {
					writeToLog("E");

					temp = swapEdge(edgeB, edgeE);
					edgeB = temp[0];
					edgeE = temp[1];

					temp = swapEdge(edgeM, edgeD);
					edgeM = temp[0];
					edgeD = temp[1];
				}
				else if (edgeM == "G") {
					writeToLog("G");
					
					temp = swapEdge(edgeB, edgeG);
					edgeB = temp[0];
					edgeG = temp[1];

					temp = swapEdge(edgeM, edgeX);
					edgeM = temp[0];
					edgeX = temp[1];
				}
				else if (edgeM == "R") {
					alert("I am in an invalid state!");
					return false;
				}
				else {}
			}
			else if (edgeB == "R") {
				if (edgeM == "W") {
					writeToLog("P");

					temp = swapEdge(edgeB, edgeP);
					edgeB = temp[0];
					edgeP = temp[1];

					temp = swapEdge(edgeM, edgeJ);
					edgeM = temp[0];
					edgeJ = temp[1];
				}
				else if (edgeM == "Y") {
					writeToLog("N");

					temp = swapEdge(edgeB, edgeN);
					edgeB = temp[0];
					edgeN = temp[1];

					temp = swapEdge(edgeM, edgeT);
					edgeM = temp[0];
					edgeT = temp[1];
				}
				else if (edgeM == "B") { // THIS IS WHERE YOU HAVE TO CYCLE BREAK!!!
					writeToLog("M");

					temp = swapEdge(edgeB, edgeM);
					edgeB = temp[0];
					edgeM = temp[1];

					temp = swapEdge(edgeM, edgeB);
					edgeM = temp[0];
					edgeB = temp[1];
				}
				else if (edgeM == "G") {
					writeToLog("O");
					
					temp = swapEdge(edgeB, edgeO);
					edgeB = temp[0];
					edgeO = temp[1];

					temp = swapEdge(edgeM, edgeV);
					edgeM = temp[0];
					edgeV = temp[1];
				}
				else if (edgeM == "O") {
					alert("I am in an invalid state!");
					return false;
				}
				else {}
			}
			else if (edgeB == "Y") {
				if (edgeM == "R") {
					writeToLog("T");

					temp = swapEdge(edgeB, edgeT);
					edgeB = temp[0];
					edgeT = temp[1];

					temp = swapEdge(edgeM, edgeN);
					edgeM = temp[0];
					edgeN = temp[1];
				}
				else if (edgeM == "B") {
					writeToLog("Q");

					temp = swapEdge(edgeB, edgeQ);
					edgeB = temp[0];
					edgeQ = temp[1];

					temp = swapEdge(edgeM, edgeA);
					edgeM = temp[0];
					edgeA = temp[1];
				}
				else if (edgeM == "O") {
					writeToLog("R");

					temp = swapEdge(edgeB, edgeR);
					edgeB = temp[0];
					edgeR = temp[1];

					temp = swapEdge(edgeM, edgeH);
					edgeM = temp[0];
					edgeH = temp[1];
				}
				else if (edgeM == "G") {
					writeToLog("S");
					
					temp = swapEdge(edgeB, edgeS);
					edgeB = temp[0];
					edgeS = temp[1];

					temp = swapEdge(edgeM, edgeW);
					edgeM = temp[0];
					edgeW = temp[1];
				}
				else if (edgeM == "W") {
					alert("I am in an invalid state!");
					return false;
				}
				else {}
			}
			else if (edgeB == "B") {
				if (edgeM == "W") {
					writeToLog("C");

					temp = swapEdge(edgeB, edgeC);
					edgeB = temp[0];
					edgeC = temp[1];

					temp = swapEdge(edgeM, edgeI);
					edgeM = temp[0];
					edgeI = temp[1];
				}
				else if (edgeM == "R") { // THIS IS WHERE YOU HAVE TO CYCLE BREAK!!!
					writeToLog("Cycle Break: ");
					return false;

					/*temp = swapEdge(edgeB, edge);
					edgeB = temp[0];
					edge = temp[1];

					temp = swapEdge(edgeM, edge);
					edgeM = temp[0];
					edge = temp[1];*/
				}
				else if (edgeM == "Y") {
					writeToLog("A");

					temp = swapEdge(edgeB, edgeA);
					edgeB = temp[0];
					edgeA = temp[1];

					temp = swapEdge(edgeM, edgeQ);
					edgeM = temp[0];
					edgeQ = temp[1];
				}
				else if (edgeM == "O") {
					writeToLog("D");
					
					temp = swapEdge(edgeB, edgeD);
					edgeB = temp[0];
					edgeD = temp[1];

					temp = swapEdge(edgeM, edgeE);
					edgeM = temp[0];
					edgeE = temp[1];
				}
				else if (edgeM == "G") {
					alert("I am in an invalid state!");
					return false;
				}
				else {}
			}
			else {}
			
			// use a variable here to count the number of swaps so that we can handle parity later ***Reminder****
		}
		
		// output "Done with Edges" and tell whether there is parity or not ***Reminder***
	}
	else {alert("I have invalid edges!");}
}

function calculateCorners() {
	
}

function calculate() {
	calculateEdges();
	//calculateCorner(); ***Reminder*** this needs to be uncommented after the funtion is written
}

// functions representing turns
function U() {}
function Ui() {}
function L() {}
function Li() {}
function F() {}
function Fi() {}
function R() {}
function Ri() {}
function B() {}
function Bi() {}
function D() {}
function Di() {}

// functions representing algorithms
function algY() {}
function algT() {}
function algJa() {}
function algJb() {}
// for parity - function algRa() or algRb(), not sure which yet