function resetGame() {
	// reset all globals
	newGame = true;
	numCats = 1;
	numCorrect = 0;
	numWrong = 0;
	numUnanswered = 0;
	numQs = 0;
	curScore = 0;
	curCat = 1;
	curQ = q1;

	// empty existing questions from the list
	curQuestions.splice(0, curQuestions.length);

	// select new category
	curCat = Math.floor(Math.random() * numCats + 1);

	// run through all of the available questions
	for (var i = 0; i < allQuestions.length; i++) {
		// filter the questions that belong in the current category
		if(allQuestions[i].cat === curCat) {
			// if the current question belongs in the category, add it to the curQuestions array
			curQuestions.push(allQuestions[i]);
		}
	}
}

function drawStart() {
	$("#title").html("<h1>Disney Trivia</h1>");
	$("#timer").html("<h2>Start Game</h2>");
}

function drawQuestion() {
	// indicate the game has started
	newGame = false;
	for (numQs = 0; numQs < 5; numQs++) {
		// set the timeout for 60 seconds

		// set curQ to the object of the current question
		curQ = Math.floor(Math.random() * curQuestions.length);
		// setup the question here
		$("#question").html(curQuestions[curQ].q);
		$("#option1").html(curQuestions[curQ].a1);
		$("#option2").html(curQuestions[curQ].a2);
		$("#option3").html(curQuestions[curQ].a3);
		$("#option4").html(curQuestions[curQ].a4);

		// start the 30 second timer
		$("#timer").html("Timer goes here");

		// delete the used question from the list of available questions
		curQuestions.splice(curQ, 1);
		$(document).on("click", ".option", function() {
			// if a right answer is clicked
				// change the screen to correct answer
				// add the points
				// set a 3 second timer
				// cancel the 60 second timer
				// go again
			// else
				// change the screen to wrong answer
				// set a 3 second timer
				// cancel the 60 second timer
				// go again
		});
	}
	drawEnd();
}

function drawEnd() {
	$("#question").html("<h1>Game Over!");
	$("#timer").html("<h2>Play Again?</h2>");
	newGame = true;
	playGame();
}