import React from 'react';

import Tooltip from '../../../../components/Tooltip';
import { useWeather } from '../../../../shared/hooks/useWeather';
import { handleTooltipId } from '../../../../shared/utils/handleTooltipId';
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
        data-tip="Change unit"
        data-for={handleTooltipId('change', 'unit')}
      >
        °C
      </TempButton>
      |
      <TempButton
        type="button"
        name="standard"
        unit={unit}
        onClick={handleUnitClick}
        data-tip="Change unit"
        data-for={handleTooltipId('change', 'unit')}
      >
        °F
      </TempButton>
      <Tooltip id={handleTooltipId('change', 'unit')} />
    </Container>
  );
};

export default Temp;
