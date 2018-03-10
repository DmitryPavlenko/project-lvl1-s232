import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getName = () => readlineSync.question('May I have your name?: ');

export const welcome = () => console.log('Welcome to the Brain Games!');

export const greeting = name => console.log(`Hello, ${name || getName()}!`);

export const showGameRules = rules => console.log(`${rules}`);

export const isEven = num => num % 2 === 0;

export const getRandom = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;

const question = round => car(round);
const solution = round => cdr(round);

export const makeGameFlow = (gameLogic, gameRules, maxTries = 3) => {
  welcome();
  console.log(gameRules);
  const userName = getName();
  greeting(userName);
  let count = 0;

  do {
    const gameRound = gameLogic();
    const sol = solution(gameRound);
    const quest = question(gameRound);
    console.log(`Question: ${quest}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === sol) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${sol}'.\nLet's try again, ${userName}!`);
      return;
    }
  } while (count < maxTries);

  console.log(`Congratulations, ${userName}!`);
};
