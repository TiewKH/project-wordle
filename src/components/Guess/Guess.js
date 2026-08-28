import React from "react";

function Guess(guess) {
  return (
    <p className="guess" key={guess.id}>
      {guess.guess.map(({ letter, status, id: letterId }) => (
        <span className={`cell ${status}`} key={letterId}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
