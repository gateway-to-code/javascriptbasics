/*

Create a function that takes a deck of cards in one order and returns the cards is a different order 



Input 										Output
var deck = [1,2,3,4,5,6,7,8,9,10] 			updated deck				
shuffleDeck(deck)                           // []

*/ 

function shuffleDeck(deck) {
	var tempCard, newCard;
	for(var i=cards.length-1; i > 0; i--) {
		newCard = Math.floor(Math.random()*(i + 1));
		tempCard = cards[i];
		cards[i] = cards[newCard];
		cards[newCard] = tempCard;

	}
	return cards;
}