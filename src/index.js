import readlineSync from 'readline-sync';

export const getName = () => readlineSync.question('May I have your name?: ');

export const welcome = () => console.log('Welcome to the Brain Games!');

export const greeting = name => console.log(`Hello, ${name || getName()}!`);

export const isEven = (num) => num % 2 === 0 ? 'yes' : 'no';

export const evenGame = () => {
  const userName = getName();
  let count = 0
  do {
    let num = Math.ceil(Math.random()*100);

    console.log(`Question: ${num}`);
    let answer = readlineSync.question('Your answer: ');
    
    if(answer === isEven(num)) {
      console.log('Correct!');
      count += 1;
    } else { 
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(num)}'. \nLet's try again, ${userName}!`);
      return;
    }
   } while (count < 3);

  console.log(`Congratulations, ${userName}!`);
};