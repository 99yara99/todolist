import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './List.css';

const List = () => {
  const note = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const deleteNote = (id) => {
    dispatch({ type: 'DELETE_NOTE', payload: id });
  };

  const updateNote = (id) => {
    let updateNote = prompt('');

    dispatch({
      type: 'UPDATE_NOTE',
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

  return <ul>{listOfNotes}</ul>;
};

export default List;
