import React from 'react';
import styled from 'styled-components';
import Title from './title';

const Header = styled.header.attrs({ className: 'header' })`
  height: 3rem;
  width: 100%;
`;

export default () => (
  <Header>
    <Title>Giphy Music Video</Title>
  </Header>
);
