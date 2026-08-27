import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guess from '../Guess';
import Guesses from '../Guesses/Guesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const checkResults = (guess) => {
    setGuesses(
      prevGuesses => [...prevGuesses, {guess, id: crypto.randomUUID()}]
    )
  }

  return <div>
    <Guesses guesses={guesses}/>
    <Guess checkResults={checkResults}/>
  </div>;
}

export default Game;
