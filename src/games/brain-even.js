import { cons } from 'hexlet-pairs';
import { getRandom, makeGameFlow } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const generateData = () => {
  const maxNum = 100;
  const quest = getRandom(maxNum, 1);
  const sol = isEven(quest) ? 'yes' : 'no';
  return cons(quest, sol);
};

export default () => makeGameFlow(generateData, rules);
