import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: rgba(0, 0, 0, 0.2); */
  background-color: rgba(255, 150, 0, 0.8);
  padding: 40px 50px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 1px 5px 2px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 4fr 1fr;
  position: relative;
`;

export const TempContainer = styled.div``;

export const Place = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Temp = styled.p`
  font-size: 3.2rem;
  font-weight: bold;
  margin: 25px 0;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.1);
  /* margin: 10px 0 25px 0; */
`;

export const MinMaxContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 10px;
`;

export const MinMax = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 1rem;

  svg {
    font-size: 1.2rem;
  }
`;

export const PinButton = styled.button`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  position: absolute;
  font-size: 1.2rem;
  right: 5px;
  top: 5px;
  padding: 8px;
  cursor: pointer;
  transition: all 100ms;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  svg {
    fill: white;
  }
`;

export const CloudsContainer = styled.div``;
