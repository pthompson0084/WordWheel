
/* Initial JS: 
	1. Pick 4 or 5 unique consonants and 2 or 3 unique vowels at random for a total of 7 letters. If 'Q' picked then 'U' is one of the vowels. Select 1 letter as the "special letter" (but not	'Q', 'Z', 'X', or 'J').
	2. From words.csv, make a list of all words >= 4 letters in length with only the selected letters 	and >= 1 special letter. 	
	3. If there is not a "pangram" in the list or there is an insufficient number of words, start over.
	4. Assign each word in the list a point value. 4 letter words = 1 point. Longer words = 1 point per letter. A "pangram" gets a 7 point bonus.
	5. Determine "genius" level number of points (80% of 4, 5, 6, etc letter words and their corresponding points added together).
	6. Display the letters in a wheel shape, with the special letter in the center. */

function init() {
	window.alert("loaded");
}

function randomLetters() {
	
}



window.onload = init;