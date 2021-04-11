import MainCard from './MainCard';
import { Container } from './styles';
import { WeatherDays } from './WeatherDays';

const Home = () => {
  return (
    <Container>
      <MainCard />
      <WeatherDays />
    </Container>
  );
};

export default Home;
