var body, html, nav;
body = document.body;
html = document.documentElement;
nav = document.getElementById('down');
window.onscroll = function () {scrollFunction()};
function scrollFunction() {
	if (html.scrollTop > 25 || body.scrollTop > 25) {
		nav.style.marginTop = "0px";
	} else {
		nav.style.marginTop = "-300px";
	}
}
function openTab(evt, curent) {
	var i, tablinks, tabcontents;
	tabcontents = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontents.length; i++) {
		tabcontents[i].style.display = "none";
	}
	document.getElementById(curent).style.display = "block";
	tablinks = document.getElementsByClassName('tablink');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" actively", "")
	}
	evt.currentTarget.className += " actively";
}
document.getElementsByClassName('tablink')[0].click();
var con = document.getElementById('con');
function getCon() {
	if (con.style.display === "block") {
		con.style.display = "none";
	} else {
		con.style.display = "block";
	}
}
/*var dot = document.querySelectorAll("#owl-demo > div:last-child div");
for (var i = 0; i < dot.length; i++) {

dot[i].style.backgroundColor = "#999";
}
let items = document.getElementsByClassName('item');
var lastItem = items[-1];
var dots = lastItem.nextSiblingElement;

contentIndex = 1;
showContent(contentIndex);
dots.addEventListener("click", function (n) {

showContent(contentIndex = n)
});*/