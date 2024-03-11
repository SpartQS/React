import React, { useState } from 'react';

function App() {
  const [ageGroup, setAgeGroup] = useState('');

  return (
    <div>
      <select value={ageGroup} onChange={(event) => setAgeGroup(event.target.value)}>
        <option value="">Выберите возрастную группу</option>
        <option value="0-12">От 0 до 12 лет</option>
        <option value="13-17">От 13 до 17 лет</option>
        <option value="18-25">От 18 до 25 лет</option>
        <option value="25+">Старше 25 лет</option>
      </select>
      <p>
        {ageGroup === '0-12' && 'Вы выбрали возрастную группу от 0 до 12 лет'}
        {ageGroup === '13-17' && 'Вы выбрали возрастную группу от 13 до 17 лет'}
        {ageGroup === '18-25' && 'Вы выбрали возрастную группу от 18 до 25 лет'}
        {ageGroup === '25+' && 'Вы выбрали возрастную группу старше 25 лет'}
      </p>
    </div>
  );
}

export default App;
