import { createAction } from '@reduxjs/toolkit';
export const ADDNOTE = 'ADD_NOTE';
export const DELETENOTE = 'DELETE_NOTE';
export const UPDATENOTE = 'UPDATE_NOTE';

export const addNoteAction = createAction(ADDNOTE);
export const deleteNoteAction = createAction(DELETENOTE);
export const updateNoteAction = createAction(
  UPDATENOTE,
  function prepare(editNote) {
    return {
      payload: {
        ...editNote,
      },
    };
  }
);
