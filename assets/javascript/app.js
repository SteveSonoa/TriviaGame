function playGame() {
	resetGame();
	$(document).on("click", "#timer", function() {
		if(newGame) {
			drawQuestion();
		}
	});
}