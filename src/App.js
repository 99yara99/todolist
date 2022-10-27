import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import './App.css';
import './Modal.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import {
  addNoteAction,
  deleteNoteAction,
  updateNoteAction,
} from './redux/actions';

function App() {
  const [inputText, setInputText] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const handleChange = (event) => setInputText(event.target.value);
  const note = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  // ADDNOTE

  const addNote = (event) => {
    event.preventDefault();
    if (inputText !== '') {
      dispatch(addNoteAction(inputText));
    }
    setInputText('');
  };

  // DELETENOTE

  const deleteNote = (id) => dispatch(deleteNoteAction(id));

  // UPDATENOTE

  const handleChangeModal = (event) => {
    setEditNote({
      ...editNote,
      text: event.target.value,
    });
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const updateNote = (note) => {
    setEditNote(note);
    openModal();
  };

  const onEditNote = (event) => {
    event.preventDefault();
    dispatch(updateNoteAction(editNote));
    closeModal();
    // setEditNote(null);
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
        onClick={() => updateNote(note)}
      >
        Редагувати
      </button>
    </li>
  ));

  return (
    <>
      <h1>My todolist</h1>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="modalWindow"
      >
        <form className="todoFormModal" onSubmit={onEditNote}>
          <input
            type="text"
            value={editNote?.text}
            onChange={handleChangeModal}
          />
          <button type="submit">Редагувати</button>
        </form>
      </Modal>

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
