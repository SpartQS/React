import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
	const name = 'user';
	const age  = '30';
	
	return <div>
		<p>name: {name}</p>
		<p>age:  {age}</p>
	</div>;
}

export default App;
