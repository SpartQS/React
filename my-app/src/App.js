import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  function handleChange(event) {
    setText(event.target.value);
  }

  function transliterate(text) {
    const transliterationMap = {
      а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i',
      й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't',
      у: 'u', ф: 'f', х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch', ы: 'y', э: 'e',
      ю: 'yu', я: 'ya', А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D', Е: 'E', Ё: 'E', Ж: 'Zh',
      З: 'Z', И: 'I', Й: 'Y', К: 'K', Л: 'L', М: 'M', Н: 'N', О: 'O', П: 'P', Р: 'R',
      С: 'S', Т: 'T', У: 'U', Ф: 'F', Х: 'Kh', Ц: 'Ts', Ч: 'Ch', Ш: 'Sh', Щ: 'Sch',
      Ы: 'Y', Э: 'E', Ю: 'Yu', Я: 'Ya'
    };

    return text.split('').map(char => transliterationMap[char] || char).join('');
  }

  const transliteratedText = transliterate(text);

  return (
    <div>
      <textarea value={text} onChange={handleChange} />
      <p>Transliteration: {transliteratedText}</p>
    </div>
  );
}

export default App;

/*import React, { useState } from 'react';

function App() {
  const [numbers, setNumbers] = useState('');

  function handleChange(event) {
    setNumbers(event.target.value);
  }

  function calculateSum() {
    const sum = numbers.split('\n').reduce((acc, line) => {
      const currentNumber = parseFloat(line);
      return isNaN(currentNumber) ? acc : acc + currentNumber;
    }, 0);

    return sum;
  }

  return (
    <div>
      <textarea value={numbers} onChange={handleChange} />
      <p>Sum of Numbers: {calculateSum()}</p>
    </div>
  );
}

export default App;*/

