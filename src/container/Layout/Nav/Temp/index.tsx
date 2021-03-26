import React from 'react';

import { useWeather } from '../../../../shared/hooks/useWeather';
import { Container, TempButton } from './styles';

const Temp = () => {
  const { unit, setUnit } = useWeather();

  function handleUnitClick(e: React.MouseEvent<HTMLButtonElement>) {
    const { name } = e.currentTarget;

    setUnit(name);
  }

  return (
    <Container>
      <TempButton
        type="button"
        name="metric"
        unit={unit}
        onClick={handleUnitClick}
      >
        °C
      </TempButton>
      |
      <TempButton
        type="button"
        name="standard"
        unit={unit}
        onClick={handleUnitClick}
      >
        °F
      </TempButton>
    </Container>
  );
};

export default Temp;
