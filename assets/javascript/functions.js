function resetGame() {
	// reset all globals
	newGame = true;
	numCorrect = 0;
	numWrong = 0;
	numUnanswered = 0;
	numQs = 0;
	curScore = 0;
	qTimer = 30;
	clockRunning = false;
	qActive = false;

	// empty existing questions from the list
	curQuestions.splice(0, curQuestions.length);

	// select new category
	curCat++;
	if(curCat > numCats) {
		curCat = 1;
	}

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
	$("#title").html('<img src="assets/images/logo.png" class="img img-responsive logoImg" alt="Walt Disney Trivia"/>');
	$("#question").html("<h1>Start Game</h1>");
}

function bkgndDivOn(divNum) {
	if(qActive) {
		$('html,body').css('cursor','pointer');
		$("#option" + divNum).css("background-image", "url(assets/images/bkgndDiv" + divNum + ".png)");
		$("#option" + divNum).css("border", "3px solid #ffffff");
	}
}

function bkgndDivOff(divNum) {
	if(qActive) {
		$('html,body').css('cursor','default');
		$("#option" + divNum).css("background-image", "none");
		$("#option" + divNum).css("border", "0px solid #ffffff");
	}
}

function drawQuestion() {	
	// indicate the game has started
	newGame = false;

	// activate the question
	qActive = true;

	// activate the hovering div backgrounds
	$("#option1").mouseover(function() {
		bkgndDivOn("1");
	});

	$("#option1").mouseleave(function() {
		bkgndDivOff("1");
	});

	$("#option2").mouseover(function() {
		bkgndDivOn("2");
	});

	$("#option2").mouseleave(function() {
		bkgndDivOff("2");
	});

	$("#option3").mouseover(function() {
		bkgndDivOn("3");
	});

	$("#option3").mouseleave(function() {
		bkgndDivOff("3");
	});

	$("#option4").mouseover(function() {
		bkgndDivOn("4");
	});

	$("#option4").mouseleave(function() {
		bkgndDivOff("4");
	});

	// increase the number of questions that have been asked
	numQs++;

	// draw the timer & score labels
	$("#lblTimer").html("Time Left:");
	$("#lblScore").html("Score:");
	$("#score").html(curScore);

	// set curQ to the object of the current question
	curQ = Math.floor(Math.random() * curQuestions.length);

	// setup the question here
	$("#question").html(curQuestions[curQ].q);

	// display the possible answers in random order
	arrangeAnswers();

	// listen for the answers
	answerQuestion();
}

function answerQuestion() {
	// start the 30 second timer
	$("#timer").html("30");
	questionTimer();

	// listen for the player to select an answer
	$(document).on("click", ".option", function() {
		// stop the timer
		clearInterval(timerInterval);
		clockRunning = false;

		// Disable any div backgrounds that might be enabled
		bkgndDivOff("1");
		bkgndDivOff("2");
		bkgndDivOff("3");
		bkgndDivOff("4");

		// Question is no longer active
		qActive = false;

		// if a right answer is clicked
		if($(this).text() == curQuestions[curQ].a1) {
			// change the screen to correct answer
			$("#option1").html('<h2 id="correct">That\'s Right!!!</h2>');
			$("#option2").html('You correctly answered');
			$("#option3").html(curQuestions[curQ].a1);
			$("#option4").html('<img src="../' + curQuestions[curQ].img + '" class="img img-responsive" />');
			// increase right answers
			numCorrect++;
			// add the points
			increaseScore = setInterval(scoreCounter, 50);
		}
		// else
		else {
			// change the screen to wrong answer
			$("#option1").html('<h2 id="wrong">Wrong!!!</h2>');

			// increase wrong answers
			numWrong++;
			wrongAnswer();
		}
		postQuestionHandling();
	});
}

function wrongAnswer() {
	// change the screen to wrong answer
	$("#option2").html("<p>The correct answer was</p>");
	$("#option3").html(curQuestions[curQ].a1);
	$("#option4").html('<img src="../' + curQuestions[curQ].img + '" class="img img-responsive" />');
}

function arrangeAnswers() {
	var i1 = Math.floor(Math.random() * 4 + 1);
	var i2 = Math.floor(Math.random() * 4 + 1);
	while(i2 == i1) {
		var i2 = Math.floor(Math.random() * 4 + 1);
	}
	var i3 = Math.floor(Math.random() * 4 + 1);
	while(i3 == i1 || i3 == i2) {
		var i3 = Math.floor(Math.random() * 4 + 1);
	}
	var i4 = Math.floor(Math.random() * 4 + 1);
	while(i4 == i1 || i4 == i2 || i4 == i3) {
		var i4 = Math.floor(Math.random() * 4 + 1);
	}

	$("#option" + i1).html(curQuestions[curQ].a1);
	$("#option" + i2).html(curQuestions[curQ].a2);
	$("#option" + i3).html(curQuestions[curQ].a3);
	$("#option" + i4).html(curQuestions[curQ].a4);
}

function postQuestionHandling() {
	// disable click event to avoid double handling
	$(document).off("click", ".option");

	// delete the used question from the list of available questions
	curQuestions.splice(curQ, 1);

	if(numQs < totalQs) {
		// create a new question
		setTimeout(drawQuestion, 1000 * 4);
	}
	else {
		setTimeout(drawEnd, 1000 * 4);
	}
}

function questionTimer() {
	qTimer = 30;
	if (!clockRunning) {
		timerInterval = setInterval(countDown, 1000);
		clockRunning = true;
	}
}

function countDown() {
	// if there is still time left
	if(qTimer > 0) {
		// clock counts down
		qTimer--;

		// display the new time
		$("#timer").html(qTimer);
	}
	else {
		// stop the clock
		clearInterval(timerInterval);
		clockRunning = false;

		// change the screen to timeout
		$("#option1").html('<h2 id="wrong">Time\'s Up!!!</h2>');

		// increase number of unanswered questions
		numUnanswered++;
		wrongAnswer();

		postQuestionHandling();
	}
}

function scoreCounter() {
	if(qTimer > 0) {
		qTimer--;
		$("#timer").html(qTimer);
		curScore++;
		$("#score").html(curScore);
	}
	else {
		clearInterval(increaseScore);
	}
}

function drawEnd() {
	$("#question").html("<h1>Play Again?</h1>");
	$("#option1").html("You got " + numCorrect + " correct.");
	$("#option2").html("You got " + numWrong + " wrong.");
	if(numUnanswered > 0) {
		$("#option3").html("You didn't answer " + numUnanswered + " questions.");		
	}
	else {
		$("#option3").html("You didn't skip any questions.");
	}

	$("#option4").html(" ");
	newGame = true;
	playGame();
}