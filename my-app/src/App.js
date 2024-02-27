import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  const users = [
    { id: 1, name: 'user1', surn: 'surn1', age: 30 },
    { id: 2, name: 'user2', surn: 'surn2', age: 31 },
    { id: 3, name: 'user3', surn: 'surn3', age: 32 },
  ];

  const userList = users.map(function (user) {
    return (
      <li key={user.id}>
        <span>{user.name}</span>:
        <span>{user.surn}</span>,
        <span>{user.age}</span>
      </li>
    );
  });

  return <ul>{userList}</ul>;
}

export default App;
