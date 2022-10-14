import React from 'react';
import { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import './Form.css';
// import List from '../List/List';

const Form = () => {
  const [inputtext, setInputtext] = useState('');
  const handleChange = (event) => setInputtext(event.target.value);
  const dispatch = useDispatch();

  const addNote = (event) => {
    event.preventDefault();
    if (inputtext !== '') {
      dispatch({ type: 'ADD_NOTE', payload: inputtext });
    }
    setInputtext('');
  };

  connect(addNote)(Form);

  return (
    <div className="form-group">
      <form id="todoform">
        <input
          type="text"
          placeholder="Введите текст заметки"
          value={inputtext}
          onChange={handleChange}
        />
        <button type="submit" onClick={addNote}>
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
