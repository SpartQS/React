import logo from './logo.svg';
import './App.css';

import React from 'react';

/*function App() {
  function func(arg, event) {
    console.log(arg, event);
  }
  
  return (
    <div>
      <button onClick={(event) => func('eee', event)}>act</button>
    </div>
  );
  }*/

  function App() {
    function func(event, arg) {
      console.log(event, arg);
    }
    
    return (
      <div>
        <button onClick={(event) => func(event, 'eee')}>act</button>
      </div>
    );
  }

export default App;
