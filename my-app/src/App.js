import React from 'react';
import { nanoid } from 'nanoid';

function App() {
  function id() {
    return nanoid();
  }

  const users = [
    { id: id(), name: 'User1', age: 25 },
    { id: id(), name: 'User2', age: 30 },
    { id: id(), name: 'User3', age: 22 },
  ];

  return (
    <div>
      <h2>Информация о пользователях:</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
