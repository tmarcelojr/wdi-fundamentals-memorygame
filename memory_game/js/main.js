console.log("Up and running!");

var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push("cardOne");
console.log("User flipped " + cardOne);

var cardTwo = cards [3];
cardsInPlay.push("cardTwo");
console.log("User flipped " + cardTwo);

if (cardsInPlay[0] === cardsInPlay[3]) {
    alert("You found a match!);
} else {
    alert("Sorry, try again.");
}


// console.log("User flipped " + cardThree);
