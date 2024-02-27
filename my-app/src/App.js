import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  const users = [
    { name: 'user1', surn: 'surn1', age: 30 },
    { name: 'user2', surn: 'surn2', age: 31 },
    { name: 'user3', surn: 'surn3', age: 32 },
  ];

  const userList = users.map(function (user, index) {
    return (
      <li key={index}>
        <span>{user.name}</span>:
        <span>{user.surn}</span>,
        <span>{user.age}</span>
      </li>
    );
  });

  return <ul>{userList}</ul>;
}





export default App;
