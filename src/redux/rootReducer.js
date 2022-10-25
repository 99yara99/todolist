import { nanoid, createReducer } from '@reduxjs/toolkit';
import { addNoteAction, deleteNoteAction, updateNoteAction } from './actions';

let storageTodos = localStorage.getItem('todo');
storageTodos = storageTodos ? JSON.parse(storageTodos) : [];
let defaultState = {
  todos: storageTodos,
};

function setLocalStorage(todos) {
  localStorage.setItem('todo', JSON.stringify(todos));
}

export const rootReducer = createReducer(defaultState, (builder) => {
  builder
    .addCase(addNoteAction, (state, action) => {
      const todos = [
        ...state.todos,
        {
          id: nanoid(),
          text: action.payload,
        },
      ];
      setLocalStorage(todos);
      return {
        ...state,

        todos,
      };
    })
    .addCase(deleteNoteAction, (state, action) => {
      const todos = [...state.todos].filter(
        (todos) => todos.id !== action.payload
      );
      setLocalStorage(todos);

      return {
        ...state,
        todos,
      };
    })
    .addCase(updateNoteAction, (state, action) => {
      const todos = [...state.todos].map((todos) => {
        if (todos.id !== action.payload.id) {
          return todos;
        }

        return { ...action.payload };
      });
      setLocalStorage(todos);
      return {
        ...state,
        todos,
      };
    })
    .addDefaultCase((state) => state);
});

// let defaultState = {
//   todos: [],
// };

// export const rootReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case ADDNOTE:
//       const todos = [
//         ...state.todos,
//         {
//           id: nanoid(),
//           text: action.payload,
//         },
//       ];

//       return {
//         ...state,

//         todos,
//       };

//     case DELETENOTE:
//       return {
//         ...state,
//         todos: state.todos.filter((todos) => todos.id !== action.payload),
//       };

//     case UPDATENOTE:
//       return {
//         ...state,
//         todos: state.todos.map((todos) => {
//           if (todos.id !== action.payload.id) {
//             return todos;
//           }

//           return { ...action.payload };
//         }),
//       };

//     default:
//       return state;
//   }
// };
