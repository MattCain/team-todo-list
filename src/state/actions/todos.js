const addTodo = listId => dispatch =>
  dispatch({
    type: 'ADD_TODO',
    payload: listId
  });

const editTodoText = (id, text) => dispatch =>
  dispatch({
    type: 'EDIT_TODO_TEXT',
    payload: { id, text }
  });

const removeTodo = id => dispatch =>
  dispatch({
    type: 'REMOVE_TODO',
    payload: id
  });

const completeTodo = id => dispatch =>
  dispatch({
    type: 'COMPLETE_TODO',
    payload: id
  });

export { addTodo, editTodoText, removeTodo, completeTodo };
