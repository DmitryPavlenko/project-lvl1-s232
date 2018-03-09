import readlineSync from 'readline-sync';
import evenGame from './games/brain-even';
import calcGame from './games/brain-calc';

export const getName = () => readlineSync.question('May I have your name?: ');

export const welcome = () => console.log('Welcome to the Brain Games!');

export const greeting = name => console.log(`Hello, ${name || getName()}!`);

export const showGameRules = rules => console.log(`${rules}`);

export const isEven = num => num % 2 === 0;

export const getRandom = (max, min = 0) => Math.floor(Math.random() * (max - min)) + min;


export { evenGame, calcGame };
