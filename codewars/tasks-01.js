/* Messi goals function
Messi is a soccer player with goals in three leagues:
LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.
Note: the input will always be valid.
For example:
5, 10, 2  -->  17 
https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
*/

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

/* Return Negative
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense. 
https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
*/

function makeNegative(num) {
  return num > 0 ? 0 - num : num;
}

/* Terminal game move function
In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
Example:
move(3, 6) should equal 15 
https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
*/

function move(position, roll) {
  return position + roll * 2;
}

/* Personalized Message
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
Use conditionals to return the proper message:
case	            return
name equals owner	'Hello boss'
otherwise	        'Hello guest' 
Message https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
*/

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

/* Keep Hydrated!
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5 
https://www.codewars.com/kata/keep-hydrated-1/train/javascript
*/

function litres(time) {
  return Math.floor(time * 0.5);
}

/* Opposites Attract
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't. 
https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
*/

function lovefunc(flower1, flower2) {
  return Boolean((flower1 + flower2) % 2);
}