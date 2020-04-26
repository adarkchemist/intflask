export const SET_EDITOR_STATE = 'SET_EDITOR_STATE';

export function setEditorState(state) {
  console.log(state);
  return {
    type: SET_EDITOR_STATE,
    state: state,
  };
}
