import React, { useState } from 'react';

export function App() {
  const [value, setValue] = useState('1');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  function changeHandler(event) {
    const language = event.target.value;
    setValue(language);
    setSelectedLanguage(language === 'JavaScript' ? 'You have great taste!' : '');
  }

  return (
    <div>
      <input
        type="radio"
        name="radio"
        value="JavaScript"
        checked={value === 'JavaScript' ? true : false}
        onChange={changeHandler}
      />
      <input
        type="radio"
        name="radio"
        value="Python"
        checked={value === 'Python' ? true : false}
        onChange={changeHandler}
      />
      <input
        type="radio"
        name="radio"
        value="Java"
        checked={value === 'Java' ? true : false}
        onChange={changeHandler}
      />
      <p>Your favorite programming language is: {selectedLanguage || value}</p>
    </div>
  );
}

export default App;