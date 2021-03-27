import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid ${(props) => props.theme.colors.lightGrey};
  border-radius: 25px;
  overflow: hidden;
  width: 50%;

  input {
    border: none;
    outline: none;
    background-color: transparent;
    padding: 5px 10px;
    padding-right: 0;
    font-size: 1rem;
    min-width: 300px;
    width: 100%;
  }

  .clear {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 5px;
    margin-right: 5px;
    transition: all 100ms;
    cursor: pointer;

    svg {
      font-size: 1.1rem;
      fill: ${(props) => props.theme.colors.grey};
    }
  }

  .search {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 5px 10px;
    border-left: 1px solid ${(props) => props.theme.colors.lightGrey};
    transition: all 100ms;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.lightTransparency};
    }

    svg {
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.dark};
    }
  }
`;
