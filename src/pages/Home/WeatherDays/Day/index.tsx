import { RiArrowDownFill, RiArrowUpFill } from 'react-icons/ri';

import WeatherIcon from '../../../../components/WeatherIcon';
import { Daily } from '../../../../shared/models/Weather';
import { addDaysCalc, formatDate } from '../../../../shared/utils/dates';
import {
  Container,
  WeatherDate,
  Description,
  Weather,
  MinMax,
  Min,
  Max,
} from './styles';

interface Props {
  info: Daily;
  index: number;
}

export const Day: React.FC<Props> = ({ info, index }) => {
  function getDate() {
    const date = addDaysCalc(new Date(), index);

    return formatDate(date, 'MM/dd/yyyy');
  }

  return (
    <Container>
      <WeatherDate>{getDate()}</WeatherDate>
      <WeatherIcon
        description={
          info?.weather?.length > 0 ? info?.weather[0]?.description : ''
        }
      />
      <Description>{info?.weather[0]?.description}</Description>
      <Weather>{info?.temp?.day}º</Weather>
      <MinMax>
        <Min>
          <RiArrowDownFill /> {info?.temp?.min}º
        </Min>
        <Max>
          <RiArrowUpFill /> {info?.temp?.max}º
        </Max>
      </MinMax>
    </Container>
  );
};
