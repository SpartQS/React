/*import React, { useState } from 'react';

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const squareNumber = index => {
        const copy = [...numbers];
        copy[index] = copy[index] ** 2;
        setNumbers(copy);
    };

    const result = numbers.map((number, index) => {
        return (
            <li key={index} onClick={() => squareNumber(index)}>
                {number}
            </li>
        );
    });

    return (
        <div>
            <ul>{result}</ul>
        </div>
    );
}

export default App;*/

/*import React, { useState } from 'react';

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const squareNumber = index => {
        const copy = [...numbers];
        copy[index] = copy[index] ** 2;
        setNumbers(copy);
    };

    const removeNumber = index => {
        const copy = [...numbers];
        copy.splice(index, 1);
        setNumbers(copy);
    };

    const result = numbers.map((number, index) => {
        return (
            <li key={index} onClick={() => squareNumber(index)}>
                {number}
                <button onClick={() => removeNumber(index)}>Удалить</button>
            </li>
        );
    });

    return (
        <div>
            <ul>{result}</ul>
        </div>
    );
}

export default App;
*/

/*import React, { useState } from 'react';

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [selectedNumber, setSelectedNumber] = useState('');

    const handleChange = event => {
        setSelectedNumber(event.target.textContent);
    };

    const result = numbers.map((number, index) => {
        return (
            <li key={index} onClick={handleChange}>
                {number}
            </li>
        );
    });

    return (
        <div>
            <input type="text" value={selectedNumber} readOnly />
            <ul>{result}</ul>
        </div>
    );
}

export default App;
*/

/*import React, { useState } from 'react';

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [selectedNumber, setSelectedNumber] = useState('');

    const handleChange = event => {
        setSelectedNumber(event.target.textContent);
    };

    const handleBlur = event => {
        const copy = [...numbers];
        const index = copy.indexOf(selectedNumber);
        if (index !== -1) {
            copy[index] = event.target.value;
            setNumbers(copy);
        }
    };

    const result = numbers.map((number, index) => {
        return (
            <li key={index} onClick={handleChange}>
                {number}
            </li>
        );
    });

    return (
        <div>
            <input type="text" value={selectedNumber} onBlur={handleBlur} />
            <ul>{result}</ul>
        </div>
    );
}

export default App;
*/

/*import React, { useState } from 'react';

function App() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const reverseNumbers = () => {
        setNumbers([...numbers].reverse());
    };

    const result = numbers.map((number, index) => {
        return <li key={index}>{number}</li>;
    });

    return (
        <div>
            <ul>{result}</ul>
            <button onClick={reverseNumbers}>Перевернуть порядок</button>
        </div>
    );
}

export default App;
*/