const newGameButton = document.getElementById('newGameButton');
const enterButton = document.getElementById('enterButton');
const progressBar = document.getElementById('progressBar');
const percentage = document.getElementById('percentage');
const wordsOutOfTotal = document.getElementById('wordsOutOfTotal');
const row1 = document.getElementById('row1');
const row2 = document.getElementById('row2');
const row3 = document.getElementById('row3');
const row4 = document.getElementById('row4');
const row5 = document.getElementById('row5');
let points = 0;
let progress = 0;
let possiblePoints = 0;
let possibleWords = 0;
let numberOfWordLists = 3;
let numberOfPangrams = 0;
let listIndex = 0;

/* initialize game:  */
newGameButton.addEventListener('click', function (){
	if (listIndex < numberOfWordLists) {
	points = 0;
	progress = 0;
	setLetters(listIndex);
	calculateNumberOfPangrams(listIndex);
	calculatePossiblePoints(listIndex);
	calculatePossibleWords(listIndex);
	wordsOutOfTotal.innerHTML = '(0/' + possibleWords + ', ' + 'Pangrams: ' + numberOfPangrams + ')';
	listIndex++;
	} else {
		window.alert('No more words today!');
		listIndex = 0;
	}
})

function setLetters(argListIndex) {
		row1.innerHTML = '		' + letters[argListIndex][1];
		row2.innerHTML = '	' + letters[argListIndex][2] + '		' + letters[argListIndex][3];
		row3.innerHTML = '		' + letters[argListIndex][0];
		row4.innerHTML = '	' + letters[argListIndex][4] + '		' + letters[argListIndex][5];
		row5.innerHTML = '		' + letters[argListIndex][6];
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
	let temp = words[argListIndex];
	let temp2 = pangrams[argListIndex];
	possibleWords = temp.length + temp2.length;
	return possibleWords;
}

function calculateNumberOfPangrams(argListIndex) {
	let temp = pangrams[argListIndex];
	numberOfPangrams = temp.length;
	return numberOfPangrams;
}

/* enter button: enters player's word attempt from wordGuess text input; */
enterButton.addEventListener('click', function (){
		progressUpdate(points, possiblePoints);
		progressBarUpdate(progress);

	})
	
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
	
