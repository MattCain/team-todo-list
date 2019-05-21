import styled from 'styled-components';
import { MdAddCircle } from 'react-icons/md';

const Header = styled.header`
  display: flex;
  height: 150px;
  padding: 20px;
  background-color: #5e0eec;
  color: white;
`;

const Title = styled.h1`
  color: white;
  margin-top: auto;
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
`;

const AddTodoButton = styled.button`
  display: flex;
  align-items: center;
  margin: 10px 20px;
  color: #3b00d3;
  background: none;
  border: none;
`;

const AddIcon = styled(MdAddCircle)`
  font-size: 30px;
  margin-right: 10px;
`;

export { Header, Title, ItemList, AddTodoButton, AddIcon };
