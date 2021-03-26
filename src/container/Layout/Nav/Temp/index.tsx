import React from 'react';

import { useWeather } from '../../../../shared/hooks/useWeather';
import { Container, TempButton } from './styles';

const Temp = () => {
  const { unit, setUnit } = useWeather();

  return (
    <Container>
      <TempButton
        type="button"
        onClick={() => setUnit('metric')}
        unit={unit}
        name="metric"
      >
        °C
      </TempButton>{' '}
      |
      <TempButton
        type="button"
        onClick={() => setUnit('standard')}
        unit={unit}
        name="standard"
      >
        °F
      </TempButton>
    </Container>
  );
};

export default Temp;
