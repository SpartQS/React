import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  const age = 19;

  return (
    <div>
      {age > 18 ? (
        <p>Пользователь старше 18 лет.</p>
      ) : (
        <p>Пользователь младше или равен 18 годам.</p>
      )}
    </div>
  );
}



export default App;
