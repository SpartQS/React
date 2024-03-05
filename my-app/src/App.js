import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [age, setAge] = useState(30);

  return <div>
    <span>{firstName}</span>
    <button onClick={() => setFirstName('xxxx')}>btn</button>
    <span>{lastName}</span>
    <button onClick={() => setLastName('xxxx')}>btn</button>
    <span>{age}</span>
    <button onClick={() => setAge('xxxx')}>btn</button>
  </div>;
}

export default App;
