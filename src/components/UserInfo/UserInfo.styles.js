import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const Name = styled.span`
  margin-left: 15px;
`;

export { Wrapper, Avatar, Name };
