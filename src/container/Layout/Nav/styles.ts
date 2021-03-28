import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* height: 60px; */
  background-color: ${(props) => props.theme.colors.dark};
  gap: 50px;
  padding: 0 25%;

  @media screen and (max-width: 1480px) {
    padding: 0 20%;
  }

  @media screen and (max-width: 1280px) {
    gap: 25px;
    padding: 0 15%;
  }

  @media screen and (max-width: 1160px) {
    padding: 0 10%;
  }

  @media screen and (max-width: 986px) {
    padding: 0 5%;
  }

  @media screen and (max-width: 750px) {
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: 1fr 1fr auto;
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      'logo temp dashboard'
      'search search search';
    gap: 0;
    padding: 0 10px;
    /* justify-items: center; */
  }
`;
