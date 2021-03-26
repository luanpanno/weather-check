import {
  RiArrowDownFill,
  RiArrowUpFill,
  RiMapPin2Line,
  RiPushpinFill,
} from 'react-icons/ri';

import Loading from '../../../components/Loading';
import WeatherIcon from '../../../components/WeatherIcon';
import { useWeather } from '../../../shared/hooks/useWeather';
import {
  Container,
  Temp,
  Place,
  MinMaxContainer,
  MinMax,
  PinButton,
  TempContainer,
  CloudsContainer,
} from './styles';

const MainCard = () => {
  const { weather } = useWeather();

  function placeText() {
    return `${weather?.name}, ${weather?.sys.country}`;
  }

  if (!weather) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }

  return (
    <Container>
      <PinButton type="button">
        <RiPushpinFill />
      </PinButton>
      <TempContainer>
        <Place>
          <RiMapPin2Line />
          {placeText()}
        </Place>
        <Temp>{weather?.main.temp}°</Temp>
        <MinMaxContainer>
          <MinMax>
            <RiArrowDownFill /> {weather?.main.temp_min}°
          </MinMax>
          <MinMax>
            <RiArrowUpFill /> {weather?.main.temp_max}°
          </MinMax>
        </MinMaxContainer>
      </TempContainer>
      <CloudsContainer>
        {/* <p>{weather?.weather[0]?.main}</p> */}
        <WeatherIcon description={weather?.weather[0]?.description} />
        <p>{weather?.weather[0]?.description}</p>
        <p>cloudiness: {weather?.clouds.all}%</p>
      </CloudsContainer>
    </Container>
  );
};

export default MainCard;
