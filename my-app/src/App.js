/*import React, { useState } from 'react';

function App() {
  const [isBanned, setBanned] = useState(false);

  return (
    <div>
      <span>{isBanned ? 'Пользователь забанен' : 'Пользователь не забанен'}</span>
      <button onClick={() => setBanned(true)}>Забанить пользователя</button>
      <button onClick={() => setBanned(false)}>Разбанить пользователя</button>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';

function App() {
  const [isBanned, setBanned] = useState(false);

  return (
    <div>
      <span>{isBanned ? 'Пользователь забанен' : 'Пользователь не забанен'}</span>
      {isBanned ? (
        <button onClick={() => setBanned(false)}>Разбанить пользователя</button>
      ) : (
        <button onClick={() => setBanned(true)}>Забанить пользователя</button>
      )}
    </div>
  );
}

export default App;
