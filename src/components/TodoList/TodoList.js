import React, { Fragment } from 'react';
import {
  Header,
  Title,
  ItemList,
  AddTodoButton,
  AddIcon
} from './TodoList.styles';

export const TodoList = ({ title, children, onAddTodo }) => (
  <Fragment>
    <Header>
      <Title>{title}</Title>
    </Header>
    <ItemList>{children}</ItemList>
    <AddTodoButton onClick={onAddTodo}>
      <AddIcon /> Add a Todo
    </AddTodoButton>
  </Fragment>
);
