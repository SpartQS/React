import React, { useState } from 'react';

function App() {
  const cities = ['Москва', 'Лондон', 'Нью-Йорк', 'Токио'];
  const [selectedCity, setSelectedCity] = useState('');

  const cityOptions = cities.map((city, index) => {
    return <option key={index}>{city}</option>;
  });

  return (
    <div>
      <select value={selectedCity} onChange={(event) => setSelectedCity(event.target.value)}>
        <option value="">Выберите город</option>
        {cityOptions}
      </select>
      <p>Ваш выбор: {selectedCity || 'не выбран'}</p>
    </div>
  );
}

export default App;
