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
	
}

function clear() {
	
}

function calculate() {
	
}