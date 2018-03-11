import { cons } from 'hexlet-pairs';
import { getRandom, makeGameFlow } from '..';

const rules = 'What number is missing in this progression?';

const getProgressionArray = (length = 10) => {
  const start = getRandom(10);
  const step = getRandom(10, 1);

  const iter = (counter, accu) => {
    if (counter > length) {
      return accu;
    }
    const last = [(counter === 0) ? start : accu[counter - 1] + step];
    return iter(counter + 1, accu.concat(last));
  };
  return iter(0, []);
};

const getDataWithSkipped = (array, skipNumber) => {
  const iter = (counter, accu) => {
    if (counter >= array.length) {
      return accu;
    }
    const item = (counter === skipNumber ? '..' : array[counter]);
    return iter(counter + 1, `${accu} ${item}`);
  };
  return iter(0, '');
};

const generateData = () => {
  const array = getProgressionArray();
  const skipPosition = getRandom(9, 1);
  const quest = getDataWithSkipped(array, skipPosition);
  const sol = String(array[skipPosition]);
  return cons(quest, sol);
};

export default () => makeGameFlow(generateData, rules);
