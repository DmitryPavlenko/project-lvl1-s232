import { cons } from 'hexlet-pairs';
import { isEven, getRandom, makeGameFlow } from '..';

const rules = 'Answer "yes" if number even otherwise answer "no".';

const gameLogic = () => {
  const maxNum = 100;
  const quest = getRandom(maxNum, 1);
  const sol = isEven(quest) ? 'yes' : 'no';
  return cons(quest, sol);
};

export default () => makeGameFlow(gameLogic, rules);
