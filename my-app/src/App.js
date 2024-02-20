import logo from './logo.svg';
import './App.css';

import React from 'react';

function App() {
  const isAdmin = true;

	return (
		<div>
			{isAdmin && (
				<div>
					<p>Этот пользователь админ!</p>
					<p>Дополнительная информация для админа.</p>
				</div>
			)}
		</div>
	);
}



export default App;
