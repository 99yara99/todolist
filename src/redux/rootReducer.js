import { nanoid } from '@reduxjs/toolkit';
import { ADDNOTE, DELETENOTE, UPDATENOTE } from './actions';

let defaultState = {
  todos: [],
};

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADDNOTE:
      return {
        ...state,

        todos: [
          ...state.todos,
          {
            id: nanoid(),
            text: action.payload,
          },
        ],
      };
    case DELETENOTE:
      return {
        ...state,
        todos: state.todos.filter((todos) => todos.id !== action.payload),
      };

    case UPDATENOTE:
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
