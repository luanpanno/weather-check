import {
  RiArrowDownFill,
  RiArrowUpFill,
  RiMapPin2Line,
  RiPushpinFill,
} from 'react-icons/ri';

import Loading from '../../../components/Loading';
import Tooltip from '../../../components/Tooltip';
import WeatherIcon from '../../../components/WeatherIcon';
import { useWeather } from '../../../shared/context/WeatherContext';
import { formatDate } from '../../../shared/utils/dates';
import { handleTooltipId } from '../../../shared/utils/handleTooltipId';
import {
  Container,
  Temp,
  Place,
  MinMaxContainer,
  MinMax,
  PinButton,
  TempContainer,
  CloudsContainer,
  WeatherDescription,
  CurrentDate,
} from './styles';

const MainCard = () => {
  const { weather, pinned, setPinned } = useWeather();

  function placeText() {
    return `${weather?.name}, ${weather?.sys?.country}`;
  }

  function findPin() {
    return pinned?.find((item) => item === placeText());
  }

  function checkIsPinned() {
    return !!findPin();
  }

  function handlePinClick() {
    if (checkIsPinned()) {
      setPinned(pinned?.filter((item) => item !== placeText()));
    } else {
      setPinned([...(pinned ?? []), placeText()]);
    }
  }

  function handlePinTooltip() {
    if (checkIsPinned()) {
      return 'Remove from pinned list';
    }
    return 'Add to pinned list';
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
      <PinButton
        type="button"
        onClick={handlePinClick}
        isPinned={checkIsPinned()}
        data-tip={handlePinTooltip()}
        data-for={handleTooltipId('weather', 'remove')}
      >
        <RiPushpinFill />
        <Tooltip id={handleTooltipId('weather', 'remove')} />
      </PinButton>
      <TempContainer>
        <CurrentDate>{formatDate(new Date(), 'MM/dd/yyyy')}</CurrentDate>
        <Place>
          <RiMapPin2Line />
          {placeText()}
        </Place>
        <Temp>{weather?.main?.temp}°</Temp>
        <MinMaxContainer>
          <MinMax>
            <RiArrowDownFill /> {weather?.main?.temp_min}°
          </MinMax>
          <MinMax>
            <RiArrowUpFill /> {weather?.main?.temp_max}°
          </MinMax>
        </MinMaxContainer>
      </TempContainer>
      <CloudsContainer>
        <WeatherDescription>
          {weather?.weather?.length > 0 ? weather?.weather[0]?.description : ''}
        </WeatherDescription>
        <WeatherIcon
          description={
            weather?.weather?.length > 0 ? weather?.weather[0]?.description : ''
          }
        />
        <p>cloudiness: {weather?.clouds?.all}%</p>
      </CloudsContainer>
    </Container>
  );
};

export default MainCard;
