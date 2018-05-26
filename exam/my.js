var dano = 432250;
var sutki = 86400;
document.write("Дано ", dano, " sec");
document.write("<br>");


function getMinutes (sec) {
	sec = (sec%60);
	return sec;
}
function getDays(sec) {
	return sec%sutki;
}
document.write("Это ", getDays(dano), " дней и", getMinutes(dano), " min");