import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';
import {
  addNoteAction,
  deleteNoteAction,
  updateNoteAction,
} from './redux/actions';

function App() {
  const [inputText, setInputText] = useState('');
  const handleChange = (event) => setInputText(event.target.value);
  const dispatch = useDispatch();

  const addNote = (event) => {
    event.preventDefault();
    if (inputText !== '') {
      dispatch(addNoteAction(inputText));
    }
    setInputText('');
  };

  const note = useSelector((state) => state.todos);

  const [modalIsOpen, setIsOpen] = useState(false);
  const [inputTextModal, setInputTextModal] = useState('');
  const handleChangeModal = (event) => setInputTextModal(event.target.value);

  const deleteNote = (id) => dispatch(deleteNoteAction(id));

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const updateNote = (event, id) => {
    event.preventDefault();
    dispatch(updateNoteAction(id, inputTextModal));
    closeModal();
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
      <button className="updateButton" type="button" onClick={openModal}>
        Редагувати
      </button>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <form
          id="todoFormModal"
          onSubmit={(event) => updateNote(event, note.id)}
        >
          <input
            type="text"
            placeholder={note.text}
            value={inputTextModal}
            onChange={handleChangeModal}
          />
          <button type="submit">Редагувати</button>
        </form>
      </Modal>
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
