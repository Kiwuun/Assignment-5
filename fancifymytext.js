function bigger() {
	document.getElementById("textArea").style.fontSize = "24pt";
}

function fancify() {
	if (document.getElementById("fancyShmancy").checked) {
		document.getElementById("textArea").style.fontWeight = "bold";
		document.getElementById("textArea").style.color = "blue";
		document.getElementById("textArea").style.textDecoration = "underline";
	} else {
		document.getElementById("textArea").style.fontWeight = "normal";
		document.getElementById("textArea").style.color = "";
		document.getElementById("textArea").style.textDecoration = "none";
	}
}

function moo() {
	var textArea = document.getElementById("textArea");
	var text = textArea.value.toUpperCase();
	var parts = text.split(".");
	for (var i = 0; i < parts.length - 1; i++) {
		var words = parts[i].split(" ");
		for (var j = words.length - 1; j >= 0; j--) {
			if (words[j] !== "") {
				words[j] = words[j] + "-MOO";
				break;
			}
		}
		parts[i] = words.join(" ");
	}
	textArea.value = parts.join(".");
}
