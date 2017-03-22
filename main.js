function PlayingCards (suit, value){
  'use strict';
//come back, add if else statements
//if 'this.suit' is not heart, etc then throw error OR made it a Hearts
//else 'this.suit = suit'
//then repeat for the value.
  this.suit = suit;
  this.value = value;

  console.log(this);
}
var card = new PlayingCards('Hearts', 3);

//Dice constructor

function Die(current){
  'use strict';
  // if (current > 6){
  //   throw 'This die only has 6 sides, choose a number 1-6'
  // } else {
  //   this.current = current
  // }
  // this.current = current;
  this.rollDie = function(){
    var randomRoll = Math.ceil(Math.random() * 6);
    this.roll = randomRoll;
    return this.roll;
  };
  console.log(this.rollDie());
  console.log(this);
}

var die = new Die (6);

//*******************************************************************************//

//probabilities function
//* Create a function called getProbabilities (it does NOT live on the constructor) that will simulate rolling two dice 1000 times.
//The function should return an array that shows the number of times the sum of the two die added up to 2, 3, 4, ... 12.

//construct an object with property values of results sum and value of how many times that sum has been rolled. 
var probsSums = [];

function getProbabilities(rolls){
  var total = [];

  var firstRoll = Math.ceil(Math.random() * 6);
  var secondRoll = Math.ceil(Math.random() * 6);
  var sumOfRoll = firstRoll + secondRoll

  console.log(sumOfRoll);

  n.forEach(function(item, i, arr){

  })
  //

  //simulate two dice rolling 1000 times
  //return an array that shows the number of times the two dice added up
};

getProbabilities(1000);
