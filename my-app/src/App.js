import React, { useState } from 'react';

function App() {
  const [date, setDate] = useState({
      year: 2025,
      month: 12,
      day: 31
  });

  // Функция для изменения даты
  function handleChange(prop, event) {
      const newValue = parseInt(event.target.value);
      if (!isNaN(newValue)) {
          setDate(prevDate => ({
              ...prevDate,
              [prop]: newValue
          }));
      }
  }

  // Функция для получения дня недели
  function getDayOfWeek(year, month, day) {
      const date = new Date(year, month - 1, day);
      const options = { weekday: 'long' };
      return new Intl.DateTimeFormat('en-US', options).format(date);
  }

  const { year, month, day } = date;
  const dayOfWeek = getDayOfWeek(year, month, day);

  return (
      <div>
          <input
              type="number"
              value={year}
              onChange={event => handleChange('year', event)}
          />
          <input
              type="number"
              value={month}
              onChange={event => handleChange('month', event)}
          />
          <input
              type="number"
              value={day}
              onChange={event => handleChange('day', event)}
          />
          <p>Day of the week: {dayOfWeek}</p>
      </div>
  );
}

export default App;