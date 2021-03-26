import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.1);
  top: 50px;
  left: -8px;

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    background-color: #fff;
    position: absolute;
    top: -4px;
    left: 35%;
    transform: rotate(45deg);
    border-radius: 2px;
  }
`;

export const Content = styled.div`
  margin-top: 5px;
`;
