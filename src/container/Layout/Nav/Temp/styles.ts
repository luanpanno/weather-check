import styled from 'styled-components';

export const Container = styled.div`
  color: white;

  button {
    color: white;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1rem;
    cursor: pointer;
    padding: 5px;
    transition: all 100ms;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid #eaeaea;
    }
  }
`;
