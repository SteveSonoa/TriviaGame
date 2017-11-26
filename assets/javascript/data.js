// CATEGORIES ("cat")
// 1: Disney Animated Features
// 2: Disneyland Trivia
// 3: Disney Cartoons

var q1 = {
	"q": "Q1 - What animal is Mickey?",
	"a1": "Mouse",
	"a2": "Dragon",
	"a3": "Lion",
	"a4": "Ape",
	"cat": 1
};

var q2 = {
	"q": "What color are Mickey's ears?",
	"a1": "Black",
	"a2": "Yellow",
	"a3": "Red",
	"a4": "White",
	"cat": 1
};

var q3 = {
	"q": "Who is Mickey's wife?",
	"a1": "Minnie",
	"a2": "Daisy",
	"a3": "Wendy",
	"a4": "Mary",
	"cat": 1
};

var q4 = {
	"q": "How many fingers does Mickey have on each hand?",
	"a1": "Three",
	"a2": "Four",
	"a3": "Five",
	"a4": "Two",
	"cat": 1
};

var q5 = {
	"q": "Q5 - Who was the original voice of Mickey Mouse?",
	"a1": "Walt Disney",
	"a2": "Jimmy MacDonald",
	"a3": "Clarence Nash",
	"a4": "Donald Wilson",
	"cat": 1
};

var newGame = true;
var numCats = 1;
var numCorrect = 0;
var numWrong = 0;
var numUnanswered = 0;
var numQs = 0;
var curScore = 0;
var curCat = 1;
var allQuestions = [q1, q2, q3, q4, q5];
var curQuestions = [];
var curQ = q1;