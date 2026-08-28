import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses/Guesses";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(() =>
    Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () => ({
      guess: Array.from({ length: 5 }, () => ({
        letter: "",
        status: null,
        id: crypto.randomUUID(),
      })),
      id: crypto.randomUUID(),
    }))
  );
  const [numGuesses, setNumGuesses] = React.useState(0);
  const [answerIsCorrect, setAnswerIsCorrect] = React.useState(false);
  const inputIsDisabled = numGuesses > 5 || answerIsCorrect;
  const gameHasEnded = numGuesses > 5 && !answerIsCorrect;

  const checkResults = (guess) => {
    const guessResults = checkGuess(guess, answer);
    let nextGuesses = [...guesses];
    nextGuesses[numGuesses] = {
      guess: nextGuesses[numGuesses]["guess"].map((guessEntry, index) => ({
        letter: guessResults[index].letter,
        status: guessResults[index].status,
        id: guessEntry.id,
      })),
      id: nextGuesses[numGuesses]["id"],
    };
    setGuesses(nextGuesses);
    setNumGuesses(numGuesses + 1);
    if (guess === answer) {
      setAnswerIsCorrect(true)
    }
  };

  return (
    <div>
      <Guesses guesses={guesses} />
      <GuessInput checkResults={checkResults} disabled={inputIsDisabled}/>
      {
        answerIsCorrect && <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {numGuesses} guesses</strong>.
          </p>
        </div>
      }
      {gameHasEnded && <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>
      }
    </div>
  );
}

export default Game;
