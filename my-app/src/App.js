import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  const isAuth = false;

  return (
    <div>
      {!isAuth && <p>пожалуйста, авторизуйтесь</p>}
    </div>
  );
}



export default App;
