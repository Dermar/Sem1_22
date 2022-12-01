//Allow the user to customise their memos (adapted from Module 6 'customise' problem answer)

var cookies = document.cookie
.split(';')
.map(cookie => cookie.split('='))
.reduce((accumulator, [key, value]) => ({ ...accumulator, [key.trim()]: decodeURIComponent(value) }), {});

var bgCol;
var textCol;
var textSiz;

function setStyle()
{
	document.getElementById('display_box').style.background=bgCol;
	document.getElementById('display_box').style.color=textCol;
	document.getElementById('display_box').style.fontSize=textSiz;
}

function updateSettings()
{
	bgCol = document.getElementById("background_color").value;
	textCol = document.getElementById("text_color").value;
	textSiz = document.getElementById("text_size").value;

	document.cookie = "bgCol=" + bgCol + `; max-age=${60 * 60 * 24 * 14}; path=/;`;
	document.cookie = "textCol=" + textCol + `; max-age=${60 * 60 * 24 * 14}; path=/;`;
	document.cookie = "textSiz=" + textSiz + `; max-age=${60 * 60 * 24 * 14}; path=/;`;
	
	setStyle();
}

function loadSettings()
{
	bgCol = cookies.bgCol;
	textCol = cookies.textCol;
	textSiz = cookies.textSiz;

	if (bgCol == null) {bgCol = "#ffffff";}
	if (textCol == null) {textCol = "#000000";}
	if (textSiz == null) {textSiz = "medium";}
	
	document.getElementById("background_color").value = bgCol;
	document.getElementById("text_color").value = textCol;
	document.getElementById("text_size").value = textSiz;

	setStyle();
}


