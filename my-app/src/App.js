import React, { useState } from 'react';

function App() {
  const [age, setAge] = useState(0);

  return (
    <div>
      <p>Возраст: {age}</p>
      <button onClick={() => setAge(age + 1)}>Увеличить возраст</button>
      <button onClick={() => setAge(age - 1)}>Уменьшить возраст</button>
    </div>
  );
}

export default App;
