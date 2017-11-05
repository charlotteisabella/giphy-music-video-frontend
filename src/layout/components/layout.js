/* @flow */
import React from 'react';
import styled from 'styled-components';
import { Header, Main } from './index';
import { SongForm } from '../forms';

const Layout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  background: ${p => p.theme[p.theme.mode].back};
`;

export default () => (
  <Layout>
    <Header />
    <Main>
      <SongForm />
    </Main>
  </Layout>
);
