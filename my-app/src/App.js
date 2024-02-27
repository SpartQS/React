import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  function handleClick(event) {
    console.log(event);
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
  }



export default App;
