
import readlineSync from 'readline-sync';

const getName = () => readlineSync.question('May I have your name?: ');

const welcome = () => {
  const name = getName();

  console.log(`Hello, ${name}!`);
};

export default welcome;
