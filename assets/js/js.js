function startButton(){
	const MENU = document.querySelector("#inicio");
	MENU.addEventListener("click", start);
}

startButton();

function start(){
	$("#inicio").hide();
	
	$("#fundoGame").append("<div id='jogador'></div>");
	$("#fundoGame").append("<div id='inimigo1'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='amigo'></div>");
}