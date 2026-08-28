import React from "react";
import Guess from "../Guess/Guess";

function Guesses({ guesses }) {
  console.log(guesses);
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess key={guess.id} guess={guess.guess} />
      ))}
    </div>
  );
}

export default Guesses;
