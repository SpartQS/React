import React, { useState } from 'react';

function AverageArray() {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    // Функция обработчик изменения элемента массива
    function handleChange(index, event) {
        const newValue = parseInt(event.target.value);
        if (!isNaN(newValue)) { // Проверка, является ли ввод числом
            setNumbers(prevNumbers => [
                ...prevNumbers.slice(0, index),
                newValue,
                ...prevNumbers.slice(index + 1)
            ]);
        }
    }

    // Вычисление среднего арифметического
    const average = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

    // Генерация компонентов инпутов для редактирования элементов массива
    const inputs = numbers.map((number, index) => (
        <input
            key={index}
            type="number"
            value={number}
            onChange={event => handleChange(index, event)}
        />
    ));

    return (
        <div>
            {inputs}
            <p>Average: {average}</p>
        </div>
    );
}

export default AverageArray;
