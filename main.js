function recolor(x) {
	var selectedColor = document.querySelector('input[name = "selection"]:checked').value;
	
	switch (selectedColor) {
		case "G":
			document.getElementById(x).style.backgroundColor = "green";
			break;
		case "W":
			document.getElementById(x).style.backgroundColor = "navajowhite";
			break;
		case "O":
			document.getElementById(x).style.backgroundColor = "orange";
			break;
		case "R":
			document.getElementById(x).style.backgroundColor = "red";
			break;
		case "Y":
			document.getElementById(x).style.backgroundColor = "yellow";
			break;
		case "B":
			document.getElementById(x).style.backgroundColor = "dodgerblue";
			break;
		default:
			break;
	}
	
	document.getElementById(x).innerHTML = selectedColor;
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

function calculate() {
	
}