import React, { useState } from 'react';

function App() {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  function handleChangeInput1(event) {
    setText1(event.target.value);
  }

  function handleChangeInput2(event) {
    setText2(event.target.value);
  }

  return (
    <div>
      <label>Input 1: </label>
      <input value={text1} onChange={handleChangeInput1} />
      <p>Text from Input 1: {text1}</p>

      <label>Input 2: </label>
      <input value={text2} onChange={handleChangeInput2} />
      <p>Text from Input 2: {text2}</p>
    </div>
  );
}

export default App;

