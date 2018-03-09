import readlineSync from 'readline-sync';
import { welcome, greeting, getName, showGameRules, getRandom } from '..';

const maxNum = 10;
const maxTries = 3;

const calc = (a, b, action) => {
  let res = 0;
  switch (action) {
    case '+':
      res = a + b;
      break;
    case '-':
      res = a - b;
      break;
    case '*':
      res = a * b;
      break;
    default:
      break;
  }
  return res;
};

const getAction = () => {
  const actions = ['+', '-', '*'];
  return actions[getRandom(actions.length)];
};

const calcGame = () => {
  welcome();
  showGameRules('What is the result of the expression?');
  const userName = getName();
  greeting(userName);
  let count = 0;

  do {
    const num1 = getRandom(maxNum);
    const num2 = getRandom(maxNum);
    const action = getAction();
    const correctAnwer = String(calc(num1, num2, action));

    console.log(`Question: ${num1} ${action} ${num2}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnwer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnwer}'.\nLet's try again, ${userName}!`);
      return;
    }
  } while (count < maxTries);

  console.log(`Congratulations, ${userName}!`);
};

export default calcGame;
