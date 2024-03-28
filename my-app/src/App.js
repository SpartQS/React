import React, { useState } from 'react';

// Функция для генерации уникального id
function id() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

const initNotes = [
    {
        id: id(),
        name: 'name1',
        desc: 'long description 1',
        show: false,
    },
    {
        id: id(),
        name: 'name2',
        desc: 'long description 2',
        show: false,
    },
    {
        id: id(),
        name: 'name3',
        desc: 'long description 3',
        show: false,
    },
];

function App() {
    const [notes, setNotes] = useState(initNotes);

    const toggleDescription = id => {
        setNotes(
            notes.map(note => {
                if (note.id === id) {
                    return { ...note, show: !note.show };
                }
                return note;
            })
        );
    };

    const result = notes.map(note => {
        return (
            <div key={note.id}>
                <p>
                    {note.name}, <i>{note.show ? note.desc : 'Click to show description'}</i>
                </p>
                <button onClick={() => toggleDescription(note.id)}>
                    {note.show ? 'Hide Description' : 'Show Description'}
                </button>
            </div>
        );
    });

    return <div>{result}</div>;
}

export default App;
