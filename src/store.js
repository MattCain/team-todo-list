import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import uuid from 'uuid/v4';
import avatar from './avatar.png';
import { reducer } from './state/reducer';

const getDefaultState = () => {
  const defaultListId = uuid();

  return {
    user: { avatar, name: 'Matt Cain' },
    lists: [
      {
        id: defaultListId,
        title: 'Team To-do List'
      }
    ],
    todos: [
      {
        id: uuid(),
        listId: defaultListId,
        text: 'Default todo',
        completed: false
      }
    ]
  };
};

export const configureStore = customState => {
  const savedStore = localStorage.getItem('todo-list');
  const storeState = savedStore
    ? JSON.parse(savedStore)
    : customState || getDefaultState();

  if (!savedStore) {
    localStorage.setItem('todo-list', JSON.stringify(storeState));
  }

  if (!window.location.hash) {
    window.location.hash = storeState.lists[0].id;
  }

  const store = createStore(reducer, storeState, applyMiddleware(thunk));

  store.subscribe(() => {
    try {
      const serializedState = JSON.stringify(store.getState());
      localStorage.setItem('todo-list', serializedState);
    } catch {
      // ignore write errors
    }
  });

  return store;
};
