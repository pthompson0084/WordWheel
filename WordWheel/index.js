
/* Initial JS: 
	1. Pick 4 or 5 unique consonants and 2 or 3 unique vowels at random for a total of 7 letters. If 'Q' picked then 'U' is one of the vowels. Select 1 letter as the "special letter" (but not	'Q', 'Z', 'X', or 'J').
	2. From words.csv, make a list of all words >= 4 letters in length with only the selected letters 	and >= 1 special letter. 	
	3. If there is not a "pangram" in the list or there is an insufficient number of words, start over.
	4. Assign each word in the list a point value. 4 letter words = 1 point. Longer words = 1 point per letter. A "pangram" gets a 7 point bonus.
	5. Determine "genius" level number of points (80% of 4, 5, 6, etc letter words and their corresponding points added together).
	6. Display the letters in a wheel shape, with the special letter in the center. */
	
	
	

const enterButton = document.getElementById('enterButton');
const progressBar = document.getElementById('progressBar');
const percentage = document.getElementById('percentage');
let yourWords = false; <!-- sentinel value for showing word list -->
let points = 0;
let totalPoints = 100;
let progress = 0;

/* initialize game: find an eligible word and create valid word list from csv file, calculate and set totalPoints (project requirement part 1 of: "[1]Read and parse an external file (such as JSON or CSV) into your application and [2] display some data from that in your app") */


/* yourWords list: display of successful word attempts (create a JS array and put into HTML list (project requirement part 2 of: "[1]Read and parse an external file (such as JSON or CSV) into your application and [2] display some data from that in your app") */


/* enter button: enters player's word attempt from wordGuess text input; */
enterButton.addEventListener('click', function (){
		progressUpdate(points, totalPoints);
		progressBarUpdate(progress);

	})
	
/* 	progress update (project requirement: "Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value" */
	function progressUpdate(argPoints, argTotalPoints) {
		progress = argPoints / argTotalPoints;
		return progress;
	}
	
/* 	progress bar update function, and percentage update (project requirement: "Visualize data in a graph, chart, or other visual representation of data") */
	function progressBarUpdate(argProgress) {
		progressBar.value = Math.floor(100 * argProgress);
		percentage.innerHTML = progressBar.value + '%';
	}
	
