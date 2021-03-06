import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: ${(props) => props.theme.colors.dark};
  color: white;
  padding: 10px 0;
  text-align: center;

  span {
    font-size: 0.9rem;
    color: ${(props) => props.theme.colors.lightGrey};

    a {
      color: ${(props) => props.theme.colors.lightGrey};
    }
  }

  @media screen and (max-width: 780px) {
    padding: 20px 15px;
    gap: 15px;
  }
`;
