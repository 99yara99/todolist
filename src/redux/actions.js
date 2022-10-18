import { createAction } from '@reduxjs/toolkit';
export const ADDNOTE = 'ADD_NOTE';
export const DELETENOTE = 'DELETE_NOTE';
export const UPDATENOTE = 'UPDATE_NOTE';

// export function addNote() {
//       return {
//       type: ADDNOTE,
//       payload: inputText,
//     };
// }
export const addNoteAction = createAction(ADDNOTE);
export const deleteNoteAction = createAction(DELETENOTE);
export const updateNoteAction = createAction(
  UPDATENOTE,
  function prepare(id, inputTextModal) {
    return {
      payload: {
        id: id,
        text: inputTextModal,
      },
    };
  }
);
//   return {
//     type: DELETENOTE,
//     payload: id,
//   }

// export function updateNote() {
//   return {
//     type: UPDATENOTE,
//   };
// }
