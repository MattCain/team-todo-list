import React from 'react';
import { Wrapper, Avatar, Name } from './UserInfo.styles';

export const UserInfo = ({ name, avatarSrc }) => (
  <Wrapper>
    <Avatar src={avatarSrc} />
    <Name>{name}</Name>
  </Wrapper>
);
