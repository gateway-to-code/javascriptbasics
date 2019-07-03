/*

Create a function that takes a deck of cards in one order and returns the cards is a different order 



Input 										Output
var deck = [1,2,3,4,5,6,7,8,9,10] 			updated deck				
shuffleDeck(deck)                           // [1, 10, 9, 7, 4, 6, 3, 8, 2, 5]

Hint : 

Random numbers in javascript
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

https://www.w3schools.com/js/js_random.asp

Length of an array 
https://www.w3schools.com/jsref/jsref_length_array.asp


You can save a value in a temporary place by creating a new variable to hold the temporary value.

*/ 

//develop a random number from num = 0; num <= array.length
// what ever random number i find i will take the first array position and switch with that 
//position number




function shuffleDeck(cards) {
	var placeholder;
	var newposition;

	for (var i=0; i<= cards.length; i++){
		placeholder = cards[i];
		newposition = Math.floor(Math.random()*(i + 1));
		cards[i] = cards[newposition];
		cards[newposition] = placeholder;
	} 
	return cards;
}

