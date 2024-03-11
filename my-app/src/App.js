import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');

  function handleChange(event) {
    const inputValue = event.target.value;
    setInputText(inputValue);
  }

  return (
    <div>
      <label>Input: </label>
      <input value={inputText} onChange={handleChange} />
      <p>Number of characters: {inputText.length}</p>
    </div>
  );
}

export default App;
