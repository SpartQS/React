import React, { useState } from 'react';

function App() {
  const [isOver18, setIsOver18] = useState(false);

  let content;
  if (isOver18) {
    content = (
      <div>
        <h2>Ура, вам уже есть 18</h2>
        <p>здесь расположен контент только для взрослых</p>
      </div>
    );
  } else {
    content = (
      <div>
        <p>увы, вам еще нет 18 лет:(</p>
      </div>
    );
  }

  return (
    <div>
      <input type="checkbox" checked={isOver18} onChange={() => setIsOver18(!isOver18)} />
      {content}
    </div>
  );
}

export default App;

/*import React, { useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <input type="checkbox" checked={isVisible} onChange={() => setIsVisible(!isVisible)} />
      {isVisible && <p>Этот абзац видимый</p>}
    </div>
  );
}

export default App;*/