import { cons } from 'hexlet-pairs';
import { getRandom, makeGameFlow } from '..';

const rules = 'Answer "yes" if number prime otherwise answer "no".';

const gameLogic = () => {
  const num = getRandom(100, 2);
  const quest = `Is this number prime? ${num}`;
  let i = 2;
  while (i <= num && num % i !== 0) {
    i += 1;
  }
  const sol = i === num ? 'yes' : 'no';
  return cons(quest, sol);
};

export default () => makeGameFlow(gameLogic, rules);
