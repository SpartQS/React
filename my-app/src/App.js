/*import React, { useState } from 'react';

function App() {
  const [isChecked, setChecked] = useState(false);

  function handleClick() {
    alert(isChecked ? 'Привет, пользователь!' : 'До свидания!');
  }

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={() => setChecked(!isChecked)} />
      <button onClick={handleClick}>Показать приветствие/прощание</button>
      <p>Состояние: {isChecked ? 'отмечен' : 'не отмечен'}</p>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';

function App() {
  const [htmlChecked, setHtmlChecked] = useState(false);
  const [cssChecked, setCssChecked] = useState(false);
  const [jsChecked, setJsChecked] = useState(false);

  return (
    <div>
      <label>
        <input type="checkbox" checked={htmlChecked} onChange={() => setHtmlChecked(!htmlChecked)} />
        HTML
      </label>
      <p>HTML: {htmlChecked ? 'знает' : 'не знает'}</p>

      <label>
        <input type="checkbox" checked={cssChecked} onChange={() => setCssChecked(!cssChecked)} />
        CSS
      </label>
      <p>CSS: {cssChecked ? 'знает' : 'не знает'}</p>

      <label>
        <input type="checkbox" checked={jsChecked} onChange={() => setJsChecked(!jsChecked)} />
        JavaScript
      </label>
      <p>JavaScript: {jsChecked ? 'знает' : 'не знает'}</p>
    </div>
  );
}

export default App;
