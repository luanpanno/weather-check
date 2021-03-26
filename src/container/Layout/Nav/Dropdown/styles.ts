import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 5px;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.1);
  top: 50px;
  left: calc(-50% - 80px);
  min-width: 250px;

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    background-color: #fff;
    position: absolute;
    top: -4px;
    left: calc(50% - 15px);
    transform: rotate(45deg);
    border-radius: 2px;
  }
`;

export const Content = styled.div`
  margin-top: 5px;
`;

export const Pinned = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 100ms;

  &:hover {
    background-color: #eaeaea;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #777;
  border: none;
  outline: none;
  transition: all 100ms;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: #c80000;
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const NoPin = styled.p`
  padding: 10px;
  text-align: center;
  color: #dedede;
`;
