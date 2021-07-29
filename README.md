# WordWheel
Letter unscrambling game. Open wordwheel.html in browser to play. Directions:

"Find and enter words from the given 7 letters. WORDS MUST BE AT LEAST 4 LETTERS LONG and CONTAIN THE CENTER LETTER. You can use each letter as many times as necessary or not at all. One point for each word, plus a bonus of three points if your word uses all 7 letters (a pangram). There is at least 1 pangram in each game."

Upon a new game, 7 new letters are presented. Track is kept (onscreen) of successful words, including successful pangrams, and total words, pangrams, and points. A percentage is kept of one's points (relative to the maximum potential points), which is also represented in a bar graph. Upon quitting, a list of words not found by the player is presented.

Project requirements met:

1. "Create an array, dictionary or list, populate it with multiple values, retrieve at least one
value, and use or display it in your application"

    There are a number of arrays (arrays of arrays) from which values are displayed. letters[], words[], pangrams[], currentWords[], currentPangrams[]. These are used to retrieve the letters, words, and pangrams, and to list successful words and, finally, missed words.

2. "Create and use a function that accepts two or more values (parameters), calculates or
determines a new value based on those inputs, and returns a new value"

    The function progressUpdate(argPoints, argPossiblePoints) receives a player's current number of points and divides that by the maximum number of possible points (which changes with each new game), returning that in the variable progress, which is used to update the progress bar, percentage indicator, and progress designation ("beginner", "great", etc).

3. "Visualize data in a graph, chart, or other visual representation of data"

    As referred to in 2., progress is passed to a progress bar, which graphically shows how far a player has progressed toward the maximum number of possible points.

4. "Analyze text and display information about it (ex: how many words in a paragraph)"

    (I'm not sure this actually qualifies, but include it just in case...) 

    Arrays of words are dynamically analyzed throughout the game to show how many words are possible, how many have been discovered, how many points those things represent, and the associated game progress. 

(And anything else you might see) 

