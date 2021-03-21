import styled from 'styled-components';

export const Container = styled.div`
  background-color: #eaeaea;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
`;

export const Main = styled.main`
  padding: 50px 0;
  margin: 0 300px;
  background-color: #fff;
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.1);
`;
