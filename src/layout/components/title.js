import styled from 'styled-components';

// TODO: Do somethin' fukken fancy here. Gimme some svg shit goddamnit
export default styled.h1`
  margin: 0;
  padding-left: 0.8rem;
  display: inline-block;
  color: ${p => p.theme[p.theme.mode].color};
  background-color: ${p => p.theme[p.theme.mode].back};
`;
