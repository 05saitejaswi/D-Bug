/*
    Program to shuffle the deck of cards.

    Difficulty Level : EASY
*/

let suits = ["Spades", "Diamonds", "Club", "Heart"];
let values = [
    "Ace",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
];

let deck = [];

for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
        let card = { Value: values[], Suit: suits[i] };
        deck.push(card);
    }
}

for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[i];
    deck[j] = temp;
}

console.log('The first five cards are:');

for (let i = 0; i < 5; i++) {
    console.log(`${deck[i].Value} of ${deck[i].Suit}`)
}
