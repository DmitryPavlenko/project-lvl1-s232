import { cons } from 'hexlet-pairs';
import { getRandom, makeGameFlow } from '..';

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

const rules = 'What is the result of the expression?';

const generateData = () => {
  const maxNum = 10;
  const num1 = getRandom(maxNum);
  const num2 = getRandom(maxNum);
  const action = getAction();

  const quest = `${num1} ${action} ${num2}`;
  const sol = String(calc(num1, num2, action));
  return cons(quest, sol);
};

export default () => makeGameFlow(generateData, rules);
