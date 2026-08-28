import React from "react";

function GuessInput({ checkResults, disabled }) {
  const [guess, setGuess] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    checkResults(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        disabled={disabled}
        required={true}
        minLength={5}
        maxLength={5}
        pattern="^[A-Z]{5}$"
        value={guess}
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
