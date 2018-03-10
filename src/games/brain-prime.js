import { cons } from 'hexlet-pairs';
import { isPrime, getRandom, makeGameFlow } from '..';

const rules = 'Answer "yes" if number prime otherwise answer "no".';

const generateData = () => {
  const num = getRandom(100, 2);
  const quest = `Is this number prime? ${num}`;
  const sol = isPrime(num) ? 'yes' : 'no';
  return cons(quest, sol);
};

export default () => makeGameFlow(generateData, rules);
