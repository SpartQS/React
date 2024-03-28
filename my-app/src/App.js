import React, { useState } from 'react';

function App() {
    const [notes, setNotes] = useState(initNotes);

    const doSmth = id => {
        setNotes(
            notes.map(note => {
                if (note.id === id) {
                    // Изменяем свойства объекта
                    note.prop1 += '!';
                    note.prop2 += '!';
                    note.prop3 += '!';
                }
                return note;
            })
        );
    };

    const result = notes.map(note => {
        return (
            <li key={note.id}>
                <span>{note.prop1}</span>
                <span>{note.prop2}</span>
                <span>{note.prop3}</span>
                <button onClick={() => doSmth(note.id)}>btn</button>
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

/*
import React, { useState } from 'react';

function App() {
    const [notes, setNotes] = useState(initNotes);

    const removeNote = id => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const result = notes.map(note => {
        return (
            <li key={note.id}>
                <span>{note.prop1}</span>
                <span>{note.prop2}</span>
                <span>{note.prop3}</span>
                <button onClick={() => removeNote(note.id)}>Удалить</button>
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

/*
import React, { useState } from 'react';

function App() {
    const [notes, setNotes] = useState(initNotes);
    const [selectedNote, setSelectedNote] = useState(null);

    const handleInputChange = (id, prop, value) => {
        setNotes(
            notes.map(note => {
                if (note.id === id) {
                    note[prop] = value;
                }
                return note;
            })
        );
    };

    const copyNoteToInputs = id => {
        const selected = notes.find(note => note.id === id);
        setSelectedNote(selected);
    };

    const result = notes.map(note => {
        return (
            <li key={note.id}>
                <span>{note.prop1}</span>
                <span>{note.prop2}</span>
                <span>{note.prop3}</span>
                <button onClick={() => copyNoteToInputs(note.id)}>Копировать в инпуты</button>
            </li>
        );
    });

    return (
        <div>
            <ul>{result}</ul>
            {selectedNote && (
                <div>
                    <input
                        type="text"
                        value={selectedNote.prop1}
                        onChange={e => handleInputChange(selectedNote.id, 'prop1', e.target.value)}
                    />
                    <input
                        type="text"
                        value={selectedNote.prop2}
                        onChange={e => handleInputChange(selectedNote.id, 'prop2', e.target.value)}
                    />
                    <input
                        type="text"
                        value={selectedNote.prop3}
                        onChange={e => handleInputChange(selectedNote.id, 'prop3', e.target.value)}
                    />
                </div>
            )}
        </div>
    );
}

export default App;
*/