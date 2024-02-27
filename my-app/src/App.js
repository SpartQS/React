import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  function getDigitsSum(num) {
    // Функция для нахождения суммы цифр числа
    let sum = 0;

    while (num > 0) {
      sum += num % 10; // Получение последней цифры числа
      num = Math.floor(num / 10); // Удаление последней цифры числа
    }

    return sum;
  }

  const sumOfDigits = getDigitsSum(123);

  return (
    <div>
      <p>{sumOfDigits}</p>
    </div>
  );
}



export default App;
