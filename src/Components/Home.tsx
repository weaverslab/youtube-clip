import React from 'react';
import styled from 'styled-components';
import Control from './Control';
import MainFrame from './MainFrame';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Home: React.FC = () => (
  <Wrapper>
    <Control />
    <MainFrame />
  </Wrapper>
);

export default Home;
