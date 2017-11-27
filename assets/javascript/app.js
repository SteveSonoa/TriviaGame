function playGame() {
	resetGame();
	$(document).on("click", "#question", function() {
		if(newGame) {
			drawQuestion();
		}
	});
}