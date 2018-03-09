import { cons } from 'hexlet-pairs';
import { getRandom, makeGame } from '..';

const gcd = (n1, n2) => {
  let a = n1;
  let b = n2;
  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const rules = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const maxNum = 100;
  const num1 = getRandom(maxNum, 1);
  const num2 = getRandom(maxNum, 1);

  const quest = `${num1} ${num2}`;
  const sol = String(gcd(num1, num2));
  return cons(quest, sol);
};

export default () => makeGame(game, rules);
