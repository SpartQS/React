import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  const isAdult = false;

  return (
    <div>
      {isAdult ? (
        <p>Добро пожаловать на сайт для взрослых</p>
      ) : (
        <p>Извините, доступ запрещен для несовершеннолетних</p>
      )}
    </div>
  );
}



export default App;
