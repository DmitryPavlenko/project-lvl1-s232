import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const welcome = () => console.log('Welcome to the Brain Games!');

const greeting = name => console.log(`Hello, ${name}!\n`);

const question = round => car(round);
const solution = round => cdr(round);

export const getRandom = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;

export const makeGameFlow = (gameData, gameRules, maxTries = 3) => {
  welcome();
  const userName = readlineSync.question('May I have your name?: ');
  greeting(userName);
  console.log(gameRules);
  if (!gameData && !gameRules) {
    return;
  }

  let count = 0;
  do {
    const gameRound = gameData();
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
