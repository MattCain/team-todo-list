import styled, { css } from 'styled-components';

const DeleteButton = styled.button`
  background: transparent;
  color: #3b00d3;
  border: none;
  font-size: 20px;
  margin: 0 10px;
  opacity: 0;
  transition: opacity 0.2s;
`;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  background-color: white;
  margin: 5px;
  border-radius: 5px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3effe;

    ${DeleteButton} {
      opacity: 1;
    }
  }
`;

const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  margin: 20px;
`;

const TextInput = styled.input.attrs({
  type: 'text'
})`
  flex: 1;
  color: black;
  background-color: transparent;
  border: none;
  outline: none;

  ${props =>
    props.completed &&
    css`
      color: darkgray;
      text-decoration: line-through;
    `}
`;

export { Wrapper, Checkbox, TextInput, DeleteButton };
