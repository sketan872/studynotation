import React, { useState } from 'react';
import "./adminPage.css"
const GuessTheNumber = () => {
  const [number, setNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
  }

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    setAttempts(attempts + 1);

    if (guessNumber < number) {
      setMessage('Too low! Try again.');
    } else if (guessNumber > number) {
      setMessage('Too high! Try again.');
    } else {
      setMessage(`Congratulations! You've guessed the number in ${attempts + 1} attempts.`);
    }

    setGuess('');
  };

  const handleRestart = () => {
    setNumber(generateRandomNumber());
    setAttempts(0);
    setMessage('');
    setGuess('');
  };

  return (
    <div style={styles.container}>
      <h1>Guess the Number Game!</h1>
      <p>Guess a number between 1 and 100:</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleGuess} style={styles.button}>
        Submit Guess
      </button>
      <button onClick={handleRestart} style={styles.button}>
        Restart Game
      </button>
      <p>{message}</p>
      <p>Attempts: {attempts}</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  input: {
    padding: '10px',
    margin: '10px',
    width: '200px',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  
};

export default GuessTheNumber;
