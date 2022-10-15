import './Form.css';

const Form = ({ addNote, inputText, handleChange }) => {
  return (
    <div className="form-group">
      <form id="todoform" onSubmit={addNote}>
        <input
          type="text"
          placeholder="Введите текст заметки"
          value={inputText}
          onChange={handleChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default Form;
