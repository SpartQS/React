import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
	const obj = {name: 'john', surname: 'smit'};
	
	return <div>
		<p>
	name:    <span>{obj.name}</span></p>
	<p>
	surname: <span>{obj.surname}</span>
	</p>
	</div>;
}

export default App;
