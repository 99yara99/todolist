import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

let defaultState = {
  todos: [],
};

let todoid = 0;

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return {
        ...state,

        todos: [
          ...state.todos,
          {
            id: todoid++,
            text: action.payload,
          },
        ],
      };
    case 'DELETE_NOTE':
      return {
        ...state,
        todos: state.todos.filter((todos) => todos.id !== action.payload),
      };

    case 'UPDATE_NOTE':
      return {
        ...state,
        todos: state.todos.map((todos) => {
          if (todos.id !== action.payload.id) {
            return todos;
          }

          return { ...action.payload };
        }),
      };

    default:
      return state;
  }
};
const store = configureStore({
  reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
