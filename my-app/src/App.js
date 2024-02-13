import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
	const li1 = <div><li>text1</li></div>
	const li2 = <div><li>text2</li></div>
	const li3 = <div><li>text3</li></div> 
	
	return <main>
		{li1}
		{li2}
		{li3}
	</main>;
}

export default App;
