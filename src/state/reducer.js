import {
  findIndex,
  propEq,
  evolve,
  assocPath,
  append,
  reject,
  path
} from 'ramda';
import uuid from 'uuid/v4';

const hasId = propEq('id');

export const reducer = (state = {}, action) => {
  let todoIndex;
  switch (action.type) {
    case 'ADD_TODO':
      return evolve(
        {
          todos: append({
            id: uuid(),
            listId: action.payload,
            completed: false,
            text: ''
          })
        },
        state
      );

    case 'EDIT_TODO_TEXT':
      const { id, text } = action.payload;
      todoIndex = findIndex(hasId(id), state.todos);

      return assocPath(['todos', todoIndex, 'text'], text, state);

    case 'REMOVE_TODO':
      return evolve(
        {
          todos: reject(hasId(action.payload))
        },
        state
      );

    case 'COMPLETE_TODO':
      todoIndex = findIndex(hasId(action.payload), state.todos);
      const isCompleted = path(['todos', todoIndex, 'completed'], state);

      return assocPath(['todos', todoIndex, 'completed'], !isCompleted, state);

    default:
      return state;
  }
};
