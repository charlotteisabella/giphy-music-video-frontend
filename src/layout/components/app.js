import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Layout from './layout';
import theme from '../styles';

// eslint-disable-next-line
injectGlobal`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-height: 100%;
    box-sizing: border-box;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  h1 { font-size: 36px; }
  h2 { font-size: 32px; }
  h3 { font-size: 28px; }
  h4, label { font-size: 24px; }
  h5 { font-size: 20px; }
  h6, p, div { font-size: 16px; }
`;

export default () => (
  <ThemeProvider theme={theme}>
    <Layout />
  </ThemeProvider>
);
