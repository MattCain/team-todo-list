import styled, { createGlobalStyle } from 'styled-components';
import normalize from 'normalize.css';
import { MdList } from 'react-icons/md';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const Sidebar = styled.nav`
  width: 300px;
  padding: 15px;
  z-index: 1;
  box-shadow: 2px 0 5px 1px rgba(0, 0, 0, 0.2);
`;

const SidebarList = styled.ul`
  margin-top: 40px;
  padding: 0;
  list-style-type: none;
`;

const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  background-color: ${props => (props.isActive ? '#F3EFFE' : 'transparent')};
  padding: 10px;
  color: black;
  text-decoration: none;
`;

const ListIcon = styled(MdList)`
  margin-right: 10px;
`;

const Content = styled.main`
  flex: 1;
  background-color: lightgray;
`;

export {
  GlobalStyles,
  Wrapper,
  Sidebar,
  SidebarList,
  SidebarLink,
  ListIcon,
  Content
};
