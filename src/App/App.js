import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  GlobalStyles,
  Wrapper,
  Sidebar,
  SidebarList,
  SidebarLink,
  ListIcon,
  Content
} from './App.styles.js';
import { UserInfo } from '../components/UserInfo';
import { TodoList } from '../components/TodoList';
import { TodoListItem } from '../components/TodoListItem';
import {
  addTodo,
  removeTodo,
  completeTodo,
  editTodoText
} from '../state/actions/todos';

const App = ({
  user,
  lists,
  activeList,
  activeListTodos,
  addTodo,
  removeTodo,
  completeTodo,
  editTodoText
}) => (
  <Fragment>
    <GlobalStyles />
    <Wrapper>
      <Sidebar>
        <UserInfo avatarSrc={user.avatar} name={user.name} />
        <SidebarList>
          {lists.map(({ id, title }) => (
            <SidebarLink
              href={`#${id}`}
              key={id}
              isActive={id === activeList.id}
            >
              <ListIcon />
              {title}
            </SidebarLink>
          ))}
        </SidebarList>
      </Sidebar>
      <Content>
        <TodoList
          id={activeList.id}
          title={activeList.title}
          onAddTodo={() => addTodo(activeList.id)}
        >
          {activeListTodos.map(({ id, ...props }) => (
            <TodoListItem
              key={id}
              onRemoveClicked={() => removeTodo(id)}
              onCompleteClicked={() => completeTodo(id)}
              onTextChanged={text => editTodoText(id, text)}
              {...props}
            />
          ))}
        </TodoList>
      </Content>
    </Wrapper>
  </Fragment>
);

const mapStateToProps = state => {
  const activeListId = window.location.hash.substring(1);

  return {
    ...state,
    activeList: state.lists.find(({ id }) => id === activeListId),
    activeListTodos: state.todos
      .filter(({ listId }) => listId === activeListId)
      .sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1)) // Put completed items at the bottom
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { addTodo, removeTodo, completeTodo, editTodoText },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
