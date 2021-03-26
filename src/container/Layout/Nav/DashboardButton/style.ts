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
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: all 100ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  svg {
    font-size: 1.2rem;
    color: white;
  }
`;
