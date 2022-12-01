var bgCol;
var textCol;
var textSiz;

var textColEls = ["h1","label","legend","li"];
var textSizEls = ["label","legend","li"];

function setStyle()
{
	document.body.style.background=bgCol;
	
	for (var x=0; x<textColEls.length; x++)
	{
		for (var i=0; i<document.getElementsByTagName(textColEls[x]).length; i++)
		{
			document.getElementsByTagName(textColEls[x])[i].style.color=textCol;
		}
	}

	for (var x=0; x<textSizEls.length; x++)
	{
		for (var i=0; i<document.getElementsByTagName(textSizEls[x]).length; i++)
		{
			document.getElementsByTagName(textSizEls[x])[i].style.fontSize=textSiz;
		}
	}
}

function updateSettings()
{
	bgCol = document.getElementById("background_color").value;
	textCol = document.getElementById("text_color").value;
	textSiz = document.getElementById("text_size").value;

	setCookie("bgCol", bgCol, 2);
	setCookie("textCol", textCol, 2);
	setCookie("textSiz", textSiz, 2);
	
	setStyle();
}

function loadSettings()
{
	bgCol = getCookie("bgCol");
	textCol = getCookie("textCol");
	textSiz = getCookie("textSiz");

	if (bgCol == null) {bgCol = "#ffffff"};
	if (textCol == null) {textCol = "#000000"};
	if (textSiz == null) {textSiz = "small"};
	
	document.getElementById("background_color").value = bgCol;
	document.getElementById("text_color").value = textCol;
	document.getElementById("text_size").value = textSiz;

	setStyle();
}
