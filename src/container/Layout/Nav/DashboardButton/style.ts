import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 50%;
  border: none;
  outline: none;
  background-color: ${(props) => props.theme.colors.transparency};
  cursor: pointer;
  transition: all 100ms;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightTransparency};
  }

  svg {
    font-size: 1.2rem;
    color: white;
  }
`;
