import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!\n');
const iterCount = 3;
const playGame = (description, getData) => {
  const name = readlineSync.question('May I have your name?:');
  console.log(`Hello, ${name} !`);
  console.log(description);
  for (let i = 0; i < iterCount; i += 1) {
    const [question, correctAnswer] = getData();
    console.log('Question:', question);
    const answer = readlineSync.question('Your answer:');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}.`);
};
export default playGame;
