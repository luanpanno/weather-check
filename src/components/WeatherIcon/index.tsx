import {
  WiNightClear,
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiHail,
  WiNightPartlyCloudy,
  WiRain,
  WiSnow,
  WiStormShowers,
} from 'react-icons/wi';

interface Props {
  description: string;
}

const WeatherIcon: React.FC<Props> = ({ description }) => {
  switch (description) {
    case 'clear sky':
      return <WiDaySunny />;
    case 'few clouds':
      return <WiDayCloudy />;
    case 'scattered clouds':
      return <WiCloud />;
    case 'broken clouds':
      return <WiCloudy />;
    case 'shower rain':
      return <WiHail />;
    case 'rain':
      return <WiRain />;
    case 'thunderstorm':
      return <WiStormShowers />;
    case 'snow':
      return <WiSnow />;
    case 'mist':
      return <WiNightPartlyCloudy />;
    default:
      return <WiNightClear />;
  }
};

export default WeatherIcon;
