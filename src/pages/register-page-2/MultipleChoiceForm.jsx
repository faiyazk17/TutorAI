import React, { useState } from "react";

function MultipleChoiceForm({ question, options }) {
  const [selectedOption, setSelectedOption] = useState("");

  function handleOptionChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <form>
      <h2>{question}</h2>
      {options.map((option) => (
        <label key={option.id}>
          <input
            type="radio"
            value={option.id}
            checked={selectedOption === option.id}
            onChange={handleOptionChange}
          />
          {option.value}
        </label>
      ))}
    </form>
  );
}

export default MultipleChoiceForm;