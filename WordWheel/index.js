const newGameButton = document.getElementById('newGameButton');
const enterButton = document.getElementById('enterButton');
const directionsButton = document.getElementById('directionsButton');
const quitButton = document.getElementById('quitButton');
const progressBar = document.getElementById('progressBar');
const percentage = document.getElementById('percentage');
const wordsOutOfTotal = document.getElementById('wordsOutOfTotal');
const wordGuessInput = document.getElementById('wordGuessInput');
const designation = document.getElementById('designation');
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const row3 = document.getElementById('row3');
const row4 = document.getElementById('row4');
const row5 = document.getElementById('row5');
const wordList = document.getElementById('wordList');
let points = 0;
let progress = 0;
let possiblePoints = 0;
let possibleWords = 0;
let numberOfWordLists = 4;
let numberOfPangrams = 0;
let listIndex = 0;
let currentWords = [];
let currentPangrams = [];
let yourWords = 0;
let yourPangrams = 0;
let designationPct = 0;
progressBar.value = 0;

enterButton.disabled = true;

/* initialize game:  */
newGameButton.addEventListener('click', function (){
	if (listIndex < numberOfWordLists) {
	points = 0;
	progress = 0;
	yourWords = 0;
	yourPangrams = 0;
	setLetters(listIndex);
	calculateNumberOfPangrams(listIndex);
	calculatePossiblePoints(listIndex);
	calculatePossibleWords(listIndex);
	wordsOutOfTotal.innerHTML = '(' + yourWords + '/' + possibleWords + ', ' + '*Pangrams: ' + yourPangrams + '/' + numberOfPangrams + ')';
	wordList.innerHTML = "";
	enterButton.disabled = false;
	missedWordsHere.innerHTML = "";
	listIndex++;
	} else {
		window.alert('No more words today!');
		listIndex = 0;
	}
})

function setLetters(argListIndex) {
		row1.innerHTML = letters[argListIndex][1];
		row2.innerHTML = letters[argListIndex][2] + '             ' + letters[argListIndex][3];
		row3.innerHTML = letters[argListIndex][0];
		row4.innerHTML = letters[argListIndex][4] + '             ' + letters[argListIndex][5];
		row5.innerHTML = letters[argListIndex][6];
}

function calculatePossiblePoints(argListIndex) {
	// let temp1 = pangrams[argListIndex];
	let temp2 = words[argListIndex];
	let pangramPoints = 4 * numberOfPangrams;
	let wordPoints = temp2.length;
	possiblePoints = pangramPoints + wordPoints;
	progressBarUpdate(progress);
	return possiblePoints;
}

function calculatePossibleWords(argListIndex) {
	currentWords = words[argListIndex];
	let temp2 = pangrams[argListIndex];
	possibleWords = currentWords.length + temp2.length;
	return possibleWords;
}

function calculateNumberOfPangrams(argListIndex) {
	currentPangrams = pangrams[argListIndex];
	numberOfPangrams = currentPangrams.length;
	return numberOfPangrams;
}

/* enter button: enters player's word attempt from wordGuess text input; */
enterButton.addEventListener('click', function (){
		for (let x=0; x<numberOfPangrams; x++) {
			//currentPangrams[x].toLowerCase();
			if (wordGuessInput.value == currentPangrams[x]) {
				points = points + 4;
				yourWords++;
				yourPangrams++;
				wordsOutOfTotal.innerHTML = '(' + yourWords + '/' + possibleWords + ', ' + '*Pangrams: ' + yourPangrams + '/' + numberOfPangrams + ')';
				let listWord = currentPangrams.splice(x, 1);
				wordList.innerHTML += "<li>*" + listWord + "</li>";
				//changeDesignation(points, possiblePoints);
			}
		}
		for (let x=0; x<currentWords.length; x++) {
			//currentWords[x].value.toLowerCase();
			if (wordGuessInput.value == currentWords[x]) {
				points++;
				yourWords++;
				wordsOutOfTotal.innerHTML = '(' + yourWords + '/' + possibleWords + ', ' + '*Pangrams: ' + yourPangrams + '/' + numberOfPangrams + ')';
				let listWord = currentWords.splice(x, 1);
				wordList.innerHTML += "<li>" + listWord + "</li>";
				//changeDesignation(points, possiblePoints);
			}
		}	
		progressUpdate(points, possiblePoints);
		progressBarUpdate(progress);
		changeDesignation(progress);
		wordGuessInput.value = '';
	})
	
function changeDesignation(argProgress) {
	designationPct = Math.floor(100 * (argProgress));
	if (designationPct >= 30 && designationPct < 50) {
		designation.innerHTML = 'Doing Very Well!';
	} else if (designationPct >= 50 && designationPct < 70) {
		designation.innerHTML = 'Great!!';
	} else if (designationPct >= 70 && designationPct < 85) {
		designation.innerHTML = 'Amazing!!';
	} else if (designationPct >= 85 && designationPct < 99) {
		designation.innerHTML = 'Genius!!!';
	} else if (designation >= 99) {
		designation.innerHTML = 'PERFECTION';
	} 
}
	
/* 	progress update (project requirement: "Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value" */
function progressUpdate(argPoints, argPossiblePoints) {
	progress = argPoints / argPossiblePoints;
	return progress;
}
	
/* 	progress bar update function, and percentage update (project requirement: "Visualize data in a graph, chart, or other visual representation of data") */
function progressBarUpdate(argProgress) {
	progressBar.value = Math.floor(100 * argProgress);
	percentage.innerHTML = '[' + points + '/' + possiblePoints + 'points] ' + progressBar.value + '%';
}
	
quitButton.addEventListener('click', function (){
	enterButton.disabled = true;
	let missedWordsList = "";
	let missedPangrams = "";
	let missedWords = "";
	let x, y;
	for (x = 0; x < currentPangrams.length; x++) {
		missedPangrams += "<li>" + "*" + currentPangrams[x] + "</li>";
	}
	for (y = 0; y < currentWords.length; y++) {
		missedWords += "<li>" + currentWords[y] + "</li>";
	}
	missedWordsHere.innerHTML = missedPangrams + missedWords; 
})
	
directionsButton.addEventListener('click', function (){
	window.alert('Find and enter words from the given 7 letters. WORDS MUST BE AT LEAST 4 LETTERS LONG and CONTAIN THE CENTER LETTER. You can use each letter as many times as necessary or not at all. One point for each word, plus a bonus of three points if your word uses all 7 letters (a pangram). There is at least 1 pangram in each game.');
})

