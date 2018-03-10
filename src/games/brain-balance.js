import { cons } from 'hexlet-pairs';
import { getRandom, makeGameFlow } from '..';

const balance = (num) => {
  const digits = String(num).split('').sort((a, b) => a - b);
  const length = digits.length - 1;
  const first = Number(digits[0]);
  const last = Number(digits[length]);
  if (last - first <= 1) {
    return digits.join('');
  }

  const result = (first + 1) + digits.join('').substr(1, length - 1) + (last - 1);
  return balance(result);
};

const rules = 'Balance the given number.';

const gameLogic = () => {
  const maxNum = 10000;
  const num = getRandom(maxNum, 1);
  const quest = num;
  const sol = balance(num);
  return cons(quest, sol);
};

export default () => makeGameFlow(gameLogic, rules);
