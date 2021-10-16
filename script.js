let lastRoll = 0;
let win = 0;
let loss = 0;
let plays = 0;

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's anumber from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
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

var main = function (input) {
  plays += 1;
  var randomDiceNumber = rollDice();
  let getLastRollInfo = lastRollInfo(); // draws lastRoll infor before it gets updated
  lastRoll = randomDiceNumber;
  var myOutputValue = 'You lose';

  if (randomDiceNumber == input) {
    win += 1;
    myOutputValue = 'You win';
  } else {
    loss += 1;
  }
  let winPercent = winPercentage();
  let lossPercent = lossPercentage();
  console.log(winPercent);
  return `${getLastRollInfo}. You just rolled a ${randomDiceNumber}. You guessed ${input}. ${myOutputValue}!<br>
  You win ${winPercent}% of the time, while losing ${lossPercent}% of the time.`;
};
