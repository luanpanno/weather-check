import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fff;
  padding: 40px 50px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 1px 5px 2px ${(props) => props.theme.colors.lightTransparency};
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 100%;
  min-width: 300px;
  max-width: 800px;
  min-height: 128px;
  color: black;
  overflow-x: auto;
  padding: 16px 8px;

  .loading-container {
    grid-column: 1/3;
  }

  @media screen and (max-width: 780px) {
    padding: 40px 15px;
  }
`;
