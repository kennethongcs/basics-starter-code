// global variables
let lastRoll = 0;
let win = 0;
let loss = 0;
let plays = 0;
let roll1 = 0;
let roll2 = 0;
let roll3 = 0;
let roll4 = 0;
let roll5 = 0;
let roll6 = 0;
let points = 0;
///////

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's anumber from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var main = function (input) {
  plays += 1;
  input = Number(input);
  var randomDiceNumber = rollDice();
  let getLastRollInfo = lastRollInfo(); // draws lastRoll info before it gets updated
  lastRoll = randomDiceNumber;
  // increases dice rolled counter for each number
  increaseDiceRolled(randomDiceNumber);
  // gets the most rolled number
  let getMostRolledInfo = diceRolledtheMost();

  var myOutputValue = 'You lose';

  // add points if guess is correct or guess is +1/-1
  guessingBasic(randomDiceNumber, input);

  if (randomDiceNumber === input) {
    win += 1;
    myOutputValue = 'You win';
  } else {
    loss += 1;
  }
  let winPercent = winPercentage();
  let lossPercent = lossPercentage();

  return `${getLastRollInfo}. You just rolled a ${randomDiceNumber}. You guessed ${input}. ${myOutputValue}!<br>
  You won ${winPercent}% of the time, while losing ${lossPercent}% of the time.<br>
  You rolled ${getMostRolledInfo}<br>
  You current have ${points} points.`;
};

const lastRollInfo = function () {
  if (lastRoll === 0) {
    return 'This was your first roll';
  } else {
    return `Your last roll was ${lastRoll}`;
  }
};

const winPercentage = function () {
  return Math.floor((win / plays) * 100);
};
const lossPercentage = function () {
  return Math.floor((loss / plays) * 100);
};

const guessingBasic = function (rollDice, userGuess) {
  if (rollDice === userGuess) {
    console.log(`rolldice: ${rollDice}, userGuess = ${userGuess}`);
    points += 2;
  } else if (rollDice === userGuess - 1 || rollDice === userGuess + 1) {
    console.log(`rolldice: ${rollDice}, userGuess = ${userGuess}`);
    points += 1;
  }
};

const increaseDiceRolled = function (lastRoll) {
  if (lastRoll === 1) {
    roll1++;
  } else if (lastRoll === 2) {
    roll2++;
  } else if (lastRoll === 3) {
    roll3++;
  } else if (lastRoll === 4) {
    roll4++;
  } else if (lastRoll === 5) {
    roll5++;
  } else if (lastRoll === 6) {
    roll6++;
  }
};

const diceRolledtheMost = function () {
  if (
    roll1 > roll2 &&
    roll1 > roll3 &&
    roll1 > roll4 &&
    roll1 > roll5 &&
    roll1 > roll6
  ) {
    return `You rolled 1 the most!`;
  } else if (
    roll2 > roll1 &&
    roll2 > roll3 &&
    roll2 > roll4 &&
    roll2 > roll5 &&
    roll2 > roll6
  ) {
    return `You rolled 2 the most!`;
  } else if (
    roll3 > roll1 &&
    roll3 > roll2 &&
    roll3 > roll4 &&
    roll3 > roll5 &&
    roll3 > roll6
  ) {
    return `You rolled 3 the most!`;
  } else if (
    roll4 > roll1 &&
    roll4 > roll3 &&
    roll4 > roll2 &&
    roll4 > roll5 &&
    roll4 > roll6
  ) {
    return `You rolled 4 the most!`;
  } else if (
    roll5 > roll1 &&
    roll5 > roll3 &&
    roll5 > roll4 &&
    roll5 > roll2 &&
    roll5 > roll6
  ) {
    return `You rolled 5 the most!`;
  } else if (
    roll6 > roll1 &&
    roll6 > roll3 &&
    roll6 > roll4 &&
    roll6 > roll5 &&
    roll6 > roll2
  ) {
    return `You rolled 6 the most!`;
  }
  return `You don't have a most rolled dice..`;
};
