// import thunk from 'redux-thunk';
export const ADDNOTE = 'ADD_NOTE';
export const DELETENOTE = 'DELETE_NOTE';
export const UPDATENOTE = 'UPDATE_NOTE';

// export function addNote() {
//       return {
//       type: ADDNOTE,
//       payload: inputText,
//     };
// }

export function del(id) {
  return {
    type: DELETENOTE,
    payload: id,
  };
}

// export function updateNote() {
//   return {
//     type: UPDATENOTE,
//   };
// }
