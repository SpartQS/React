/*import React, { useState } from 'react';

function App() {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

    const addNote = () => {
        // Создаем новый массив, добавляя новый элемент в конец
        const newNote = notes.concat(notes.length + 1);
        // Обновляем состояние массива
        setNotes(newNote);
    };

    const result = notes.map((note, index) => {
        return <li key={index}>{note}</li>;
    });

    return (
        <div>
            <ul>{result}</ul>
            <button onClick={addNote}>Добавить элемент</button>
        </div>
    );
}

export default App;*/

import React, { useState } from 'react';

function App() {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
    const [newNoteText, setNewNoteText] = useState('');

    const addNote = () => {
        if (newNoteText.trim() !== '') { // Проверяем, что текст не пустой
            // Создаем новый массив, добавляя новый элемент в конец
            const newNote = notes.concat(newNoteText);
            // Обновляем состояние массива
            setNotes(newNote);
            // Очищаем текстовое поле
            setNewNoteText('');
        }
    };

    const handleChange = event => {
        // Обновляем состояние текста новой заметки
        setNewNoteText(event.target.value);
    };

    const result = notes.map((note, index) => {
        return <li key={index}>{note}</li>;
    });

    return (
        <div>
            <ul>{result}</ul>
            <input
                type="text"
                value={newNoteText}
                onChange={handleChange}
                placeholder="Введите текст заметки"
            />
            <button onClick={addNote}>Добавить элемент</button>
        </div>
    );
}

export default App;
