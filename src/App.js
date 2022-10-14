import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import List from './components/List/List';

function App({ store }) {
  return (
    <div>
      <p>My todolist</p>
      <React.Fragment children={store}>
        <Form />
        <List />
      </React.Fragment>
    </div>
  );
}

export default App;
