import styled from 'styled-components';

export const Container = styled.div`
  background-color: #eaeaea;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: auto 1fr auto;
`;

export const Main = styled.main`
  padding: 50px 0;
  margin: 0 30px;
  min-width: 300px;

  @media screen and (max-width: 780px) {
    margin: 0 15px;
  }
`;
