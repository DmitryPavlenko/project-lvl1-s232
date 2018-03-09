import { cons } from 'hexlet-pairs';
import { isEven, getRandom, makeGame } from '..';

const evenGame = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';

  const gameFunc = () => {
    const maxNum = 100;
    const quest = getRandom(maxNum, 1);
    const sol = isEven(quest) ? 'yes' : 'no';
    return cons(quest, sol);
  };

  return makeGame(gameFunc, rules);
};

export default evenGame;
