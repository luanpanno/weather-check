import { useWeather } from '../../shared/context/WeatherContext';
import MainCard from './MainCard';
import { Container } from './styles';
import { WeatherDays } from './WeatherDays';

const Home = () => {
  const { hasUserCoords } = useWeather();

  return (
    <Container>
      <MainCard />
      {hasUserCoords() && <WeatherDays />}
    </Container>
  );
};

export default Home;
