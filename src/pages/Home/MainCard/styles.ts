import styled from 'styled-components';

interface PinButtonProps {
  isPinned: boolean;
}

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: 40px 50px;
  border-radius: 10px;
  color: white;
  box-shadow: 0 1px 5px 2px ${(props) => props.theme.colors.lightTransparency};
  display: flex;
  justify-content: space-between;
  gap: 10px;
  position: relative;
  max-width: 800px;
  width: 100%;
  min-width: 300px;

  .loading-container {
    grid-column: 1/3;
  }
`;

export const TempContainer = styled.div``;

export const Place = styled.p`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Temp = styled.p`
  font-size: 3.2rem;
  font-weight: bold;
  margin: 25px 0;
  text-shadow: 2px 2px 1px ${(props) => props.theme.colors.lightTransparency};
`;

export const MinMaxContainer = styled.div`
  display: flex;
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

export const PinButton = styled.button<PinButtonProps>`
  background-color: ${(props) =>
    props.isPinned
      ? props.theme.colors.green
      : props.theme.colors.transparency};
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
  transition: all 100ms;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.isPinned
        ? props.theme.colors.red
        : props.theme.colors.lightTransparency};
  }

  svg {
    fill: white;
  }
`;

export const CloudsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 6rem;
  }
`;

export const WeatherDescription = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`;
