import React, { useState } from 'react';

function App() {
  const [selectedCity, setSelectedCity] = useState('');

  function handleChange(event) {
    setSelectedCity(event.target.value);
  }

  return (
    <div>
      <select value={selectedCity} onChange={handleChange}>
        <option value="">Выберите город</option>
        <option value="moscow">Москва</option>
        <option value="london">Лондон</option>
        <option value="new-york">Нью-Йорк</option>
        <option value="tokyo">Токио</option>
      </select>
      <p>Ваш выбор: {selectedCity || 'не выбран'}</p>
    </div>
  );
}

export default App;
