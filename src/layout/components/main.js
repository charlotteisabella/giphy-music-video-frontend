/* @flow */
import React from 'react';
import styled from 'styled-components';

type Props = {
  children: any
};

const Main = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  background: ${p => p.theme[p.theme.mode].back};

  @media (${p => p.theme.aboveTablet}) {
    flex-direction: row;
  }
`;

export default (props: Props) => <Main>{props.children}</Main>;
