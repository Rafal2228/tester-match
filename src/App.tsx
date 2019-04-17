import React from 'react';
import styled from 'styled-components';
import { Match } from './containers/Match';
import { COUNTRIES, DATA } from './data';

const Wrapper = styled.div`
  background: #eaedf2;
  font-size: 14px;
  min-height: 100vh;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }
`;

export function App() {
  return (
    <Wrapper>
      <Match
        bugs={DATA.bugs}
        countries={COUNTRIES}
        devices={DATA.devices}
        testers={DATA.testers}
      />
    </Wrapper>
  );
}
