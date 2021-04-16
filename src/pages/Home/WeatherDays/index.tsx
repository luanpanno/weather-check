import Loading from '../../../components/Loading';
import { useWeather } from '../../../shared/hooks/useWeather';
import { Day } from './Day';
import { Container } from './styles';

export const WeatherDays = () => {
  const { locationInfo } = useWeather();

  if (!locationInfo?.timezone) {
    return (
      <Container>
        <Loading color="primary" />
      </Container>
    );
  }

  return (
    <Container>
      {locationInfo?.daily?.map((item, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <Day info={item} index={index + 1} key={index} />;
      })}
    </Container>
  );
};
