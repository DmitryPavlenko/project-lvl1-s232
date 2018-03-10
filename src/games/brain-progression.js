import { cons } from 'hexlet-pairs';
import { getRandom, makeGameFlow } from '..';

const rules = 'What number is missing in this progression?';

const gameLogic = () => {
  const rowLength = 10;
  const step = getRandom(10, 1);
  const startNum = getRandom(10);
  const skipPosition = getRandom(9, 1);
  let skipped;
  let row = String(startNum);
  let acc = startNum;
  for (let i = 1; i < rowLength; i += 1) {
    acc += step;
    if (i === skipPosition) {
      skipped = acc;
      row += ' ..';
    } else {
      row += ` ${acc}`;
    }
  }
  const quest = row;
  const sol = String(skipped);
  return cons(quest, sol);
};

export default () => makeGameFlow(gameLogic, rules);
