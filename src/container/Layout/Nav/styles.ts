import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 300px;
  height: 60px;
  background-color: ${(props) => props.theme.colors.dark};
  gap: 25px;
`;
