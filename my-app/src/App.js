import React from 'react';
import { nanoid } from 'nanoid';
import { v4 as uuid } from 'uuid';

function App() {
  function id() {
    const x = nanoid();
    const y = uuid();
    return [x, y]; // Возвращаем массив с обоими значениями
  }

  const [x, y] = id(); // Деструктурируем массив после вызова функции

  return (
    <div>
      <p>Сгенерированный nanoid: {x}</p>
      <p>Сгенерированный UUID: {y}</p>
    </div>
  );
}

export default App;
