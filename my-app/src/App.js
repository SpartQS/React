/*import React, { useState } from 'react';

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [sumResult, setSumResult] = useState(0);
  const [multiplyResult, setMultiplyResult] = useState(0);

  return (
    <div>
      <input value={value1} onChange={event => setValue1(event.target.value)} />
      <input value={value2} onChange={event => setValue2(event.target.value)} />

      <button onClick={() => setSumResult(Number(value1) + Number(value2))}>Sum</button>
      <button onClick={() => setMultiplyResult(Number(value1) * Number(value2))}>Multiply</button>

      <p>Sum Result: {sumResult}</p>
      <p>Multiply Result: {multiplyResult}</p>
    </div>
  );
}

export default App;*/

/*import React, { useState } from 'react';

function App() {
  const currentDate = new Date().toISOString().split('T')[0];
  const [date1, setDate1] = useState(currentDate);
  const [date2, setDate2] = useState(currentDate);
  const [daysDifference, setDaysDifference] = useState(0);

  return (
    <div>
      <input value={date1} onChange={event => setDate1(event.target.value)} />
      <input value={date2} onChange={event => setDate2(event.target.value)} />

      <button onClick={() => setDaysDifference(calculateDaysDifference(date1, date2))}>
        Calculate Days Difference
      </button>

      <p>Days Difference: {daysDifference}</p>
    </div>
  );
}

function calculateDaysDifference(date1, date2) {
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const differenceInMilliseconds = Math.abs(new Date(date1) - new Date(date2));
  return Math.round(differenceInMilliseconds / millisecondsPerDay);
}

export default App;*/

/*import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [sumOfDigits, setSumOfDigits] = useState(0);

  function handleBlur() {
    const digits = number.toString().split('').map(Number);
    const sum = digits.reduce((acc, digit) => acc + digit, 0);
    setSumOfDigits(sum);
  }

  return (
    <div>
      <input value={number} onChange={event => setNumber(event.target.value)} onBlur={handleBlur} />
      <p>Sum of Digits: {sumOfDigits}</p>
    </div>
  );
}

export default App;*/

import React, { useState } from 'react';

function App() {
  const [number, setNumber] = useState('');
  const [productOfDivisors, setProductOfDivisors] = useState(1);

  function handleBlur() {
    const parsedNumber = parseInt(number, 10);
    if (!isNaN(parsedNumber) && parsedNumber !== 0) {
      const divisors = getDivisors(parsedNumber);
      const product = divisors.reduce((acc, divisor) => acc * divisor, 1);
      setProductOfDivisors(product);
    } else {
      setProductOfDivisors(0);
    }
  }

  function getDivisors(n) {
    const divisors = [];
    for (let i = 1; i <= n; i++) {
      if (n % i === 0) {
        divisors.push(i);
      }
    }
    return divisors;
  }

  return (
    <div>
      <input value={number} onChange={event => setNumber(event.target.value)} onBlur={handleBlur} />
      <p>Product of Divisors: {productOfDivisors}</p>
    </div>
  );
}

export default App;

