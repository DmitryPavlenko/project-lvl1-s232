import readlineSync from 'readline-sync';

const maxNum = 100;
const maxTries = 3;

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }

  return 'no';
};

const getName = () => readlineSync.question('May I have your name?: ');

const welcome = () => console.log('Welcome to the Brain Games!');

const greeting = name => console.log(`Hello, ${name || getName()}!`);

const evenGame = () => {
  const userName = getName();
  let count = 0;

  do {
    const num = Math.ceil(Math.random() * maxNum) + 1;
    console.log(`Question: ${num}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === isEven(num)) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(num)}'.\nLet's try again, ${userName}!`);
      return;
    }
  } while (count < maxTries);

  console.log(`Congratulations, ${userName}!`);
};

export { welcome, greeting, evenGame };
