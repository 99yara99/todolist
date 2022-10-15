import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import { ADDNOTE, del, UPDATENOTE } from './redux/actions';

function App() {
  const [inputText, setInputText] = useState('');
  const handleChange = (event) => setInputText(event.target.value);
  const dispatch = useDispatch();

  const addNote = (event) => {
    event.preventDefault();
    if (inputText !== '') {
      dispatch({ type: ADDNOTE, payload: inputText });
    }
    setInputText('');
  };

  const note = useSelector((state) => state.todos);

  const deleteNote = (id) => {
    dispatch(del(id));
  };

  const updateNote = (id) => {
    let updateNote = prompt('');

    dispatch({
      type: UPDATENOTE,
      payload: {
        id: id,
        text: updateNote,
      },
    });
  };

  let listOfNotes = note.map((note) => (
    <li key={note.id}>
      {note.text}
      <button
        className="deleteButton"
        type="button"
        onClick={() => deleteNote(note.id)}
      >
        x
      </button>
      <button
        className="updateButton"
        type="button"
        onClick={() => updateNote(note.id)}
      >
        Редагувати
      </button>
    </li>
  ));

  return (
    <>
      <h1>My todolist</h1>
      <Form
        inputText={inputText}
        addNote={addNote}
        handleChange={handleChange}
      />
      <List listOfNotes={listOfNotes} />
    </>
  );
}

export default App;
