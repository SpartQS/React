import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [age, setAge] = useState(30);

  return (
    <div>
      <div>
        <label>Имя: </label>
        <span>{firstName}</span>
      </div>
      <div>
        <label>Фамилия: </label>
        <span>{lastName}</span>
      </div>
      <div>
        <label>Возраст: </label>
        <span>{age}</span>
      </div>
    </div>
  );
}

export default App;
