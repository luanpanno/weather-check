import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { WeatherResponse } from '../models/Weather';
import { openWeatherService } from '../services';
import { handleError } from '../utils/handleError';

interface Context {
  weather: WeatherResponse | undefined;
  unit: string;
  setUnit: (value: string) => void;
  fetchWeather: (query: string) => Promise<void>;
  fetchWeatherByCoords: () => Promise<void>;
}

export const WeatherContext = createContext<Context>({} as Context);

export const WeatherProvider: React.FC = ({ children }) => {
  const [weather, setWeather] = useState<WeatherResponse>();
  const [unit, setUnit] = useState('standard');
  const [userCoords, setUserCoords] = useState<GeolocationCoordinates>();

  const fetchWeather = useCallback(
    async (query: string) => {
      try {
        const response = await openWeatherService.getWeather({
          q: query,
          units: unit,
        });

        setWeather(response);
      } catch (error) {
        handleError(error);
      }
    },
    [unit]
  );

  const fetchWeatherByCoords = useCallback(async () => {
    try {
      const response = await openWeatherService.getWeatherByCoords({
        lon: userCoords?.longitude,
        lat: userCoords?.latitude,
        units: unit,
      });

      setWeather(response);
    } catch (error) {
      handleError(error);
    }
  }, [unit, userCoords]);

  useEffect(() => {
    if (!userCoords) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserCoords(pos.coords);
      });
    } else {
      fetchWeatherByCoords().then();
    }
  }, [fetchWeatherByCoords, userCoords]);

  return (
    <WeatherContext.Provider
      value={{ fetchWeather, fetchWeatherByCoords, weather, unit, setUnit }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
