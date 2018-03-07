
import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name?: ');

export const welcome = (name = null) => {
  name = name || getName();

  console.log(`Hello, ${name}!`);
};
