import React from 'react';
import { MdDelete } from 'react-icons/md';
import {
  Wrapper,
  Checkbox,
  TextInput,
  DeleteButton
} from './TodoListItem.styles';

export const TodoListItem = ({
  text,
  completed,
  onRemoveClicked,
  onCompleteClicked,
  onTextChanged
}) => (
  <Wrapper>
    <Checkbox checked={completed} onChange={onCompleteClicked} />
    <TextInput
      value={text}
      onChange={e => onTextChanged(e.target.value)}
      placeholder="Enter some text"
      completed={completed}
    />
    <DeleteButton onClick={onRemoveClicked}>
      <MdDelete />
    </DeleteButton>
  </Wrapper>
);
