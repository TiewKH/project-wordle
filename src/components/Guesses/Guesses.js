import React from "react";

function Guesses({ guesses }) {
  console.log(guesses)
  return (
    <div className="guess-results">
      {guesses.map(({ guess, id: guessId }) => {
        return (
          <p className="guess" key={guessId}>
            {[...guess].map(({ letter, status, id: letterId }) => (
              <span className={`cell ${status}`} key={letterId}>
                {letter}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}

export default Guesses;
