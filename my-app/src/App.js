/*import React, { useState } from 'react';

function App() {
    const [notes, setNotes] = useState(initNotes);

    const addNote = () => {
        const newNote = {
            id: Math.random().toString(36).substr(2, 9), // Генерируем случайный id
            prop1: 'NewValue1',
            prop2: 'NewValue2',
            prop3: 'NewValue3',
        };
        setNotes([...notes, newNote]);
    };

    const result = notes.map(note => {
        return (
            <li key={note.id}>
                <span>{note.prop1}</span>
                <span>{note.prop2}</span>
                <span>{note.prop3}</span>
            </li>
        );
    });

    return (
        <div>
            <ul>{result}</ul>
            <button onClick={addNote}>Добавить элемент</button>
        </div>
    );
}

export default App;
*/

import React, { useState } from 'react';

function App() {
    const [notes, setNotes] = useState(initNotes);
    const [prop1, setProp1] = useState('');
    const [prop2, setProp2] = useState('');
    const [prop3, setProp3] = useState('');

    const addNoteFromInputs = () => {
        const newNote = {
            id: Math.random().toString(36).substr(2, 9),
            prop1: prop1,
            prop2: prop2,
            prop3: prop3,
        };
        setNotes([...notes, newNote]);
        setProp1('');
        setProp2('');
        setProp3('');
    };

    return (
        <div>
            <input
                type="text"
                value={prop1}
                onChange={e => setProp1(e.target.value)}
                placeholder="prop1"
            />
            <input
                type="text"
                value={prop2}
                onChange={e => setProp2(e.target.value)}
                placeholder="prop2"
            />
            <input
                type="text"
                value={prop3}
                onChange={e => setProp3(e.target.value)}
                placeholder="prop3"
            />
            <button onClick={addNoteFromInputs}>Добавить элемент из инпутов</button>

            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        <span>{note.prop1}</span>
                        <span>{note.prop2}</span>
                        <span>{note.prop3}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
