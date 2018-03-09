import readlineSync from 'readline-sync';
import { welcome, greeting, getName, showGameRules, isEven, getRandom } from '..';

const maxNum = 100;
const maxTries = 3;

const evenGame = () => {
  welcome();
  showGameRules('Answer "yes" if number even otherwise answer "no".');
  const userName = getName();
  greeting(userName);

  let count = 0;
  do {
    const num = getRandom(maxNum, 1);
    const correctAnwer = isEven(num) ? 'yes' : 'no';

    console.log(`Question: ${num}`);
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

export default evenGame;
