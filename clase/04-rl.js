const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const randomNumber = Math.round(Math.random() * 100);

console.log(randomNumber);

rl.setPrompt("Guess the magic number");
rl.prompt();

rl.on("line", (guessNumber) => {
  if (guessNumber > randomNumber) {
    console.log("your guess number is bigger than random number");
  }
  if (guessNumber < randomNumber) {
    console.log("your guess number is smaller than random number");
  }
  if (guessNumber == randomNumber) {
    console.log("Congratulation your won!");
    rl.close();
  }
});
