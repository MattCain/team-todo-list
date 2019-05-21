import React from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid/v4';
import { App } from './App';
import { Provider } from 'react-redux';
import configureStore from './store';
import avatar from './avatar.png';

const defaultListId = uuid();
const defaultStore = {
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

const savedStore = localStorage.getItem('todo-list');
const initialStore = savedStore ? JSON.parse(savedStore) : defaultStore;

if (!savedStore) {
  localStorage.setItem('todo-list', JSON.stringify(initialStore));
}

if (!window.location.hash) {
  window.location.hash = initialStore.lists[0].id;
}

ReactDOM.render(
  <Provider store={configureStore(initialStore)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
