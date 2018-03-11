import { cons } from 'hexlet-pairs';
import { getRandom, makeGameFlow } from '..';

const rules = 'Answer "yes" if number prime otherwise answer "no".';

export const isPrime = (number) => {
  if (number > 2 && number % 2 === 0) {
    return false;
  }
  const half = Math.ceil(number / 2);
  const iter = (counter) => {
    if (counter > half) {
      return true;
    }
    return number % counter !== 0 && iter(counter + 1);
  };
  return iter(2);
};

const generateData = () => {
  const num = getRandom(100, 2);
  const quest = `Is this number prime? ${num}`;
  const sol = isPrime(num) ? 'yes' : 'no';
  return cons(quest, sol);
};

export default () => makeGameFlow(generateData, rules);
