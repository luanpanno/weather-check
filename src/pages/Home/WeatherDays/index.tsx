import Loading from '../../../components/Loading';
import { useWeather } from '../../../shared/hooks/useWeather';
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

  return <Container>info</Container>;
};
