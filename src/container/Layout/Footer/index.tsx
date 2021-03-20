import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      Created by Luan Panno - All rights reserved &copy;{' '}
      {new Date().getFullYear()}
      <span>
        Also using{' '}
        <a href="https://openweathermap.org/" target="__blank">
          OpenWeather API
        </a>
      </span>
    </Container>
  );
};

export default Footer;
