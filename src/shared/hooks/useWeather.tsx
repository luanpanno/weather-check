import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { WeatherParams, WeatherResponse } from '../models/Weather';
import { openWeatherService } from '../services';
import { handleError } from '../utils/handleError';

interface Context {
  weather: WeatherResponse | undefined;
  fetchWeather: (params: WeatherParams) => Promise<void>;
  fetchWeatherByCoords: () => Promise<void>;
}

export const WeatherContext = createContext<Context>({} as Context);

export const WeatherProvider: React.FC = ({ children }) => {
  const [weather, setWeather] = useState<WeatherResponse>();
  const [userCoords, setUserCoords] = useState<GeolocationCoordinates>();

  const fetchWeather = useCallback(async (params: WeatherParams) => {
    try {
      const response = await openWeatherService.getWeather(params);

      setWeather(response);
    } catch (error) {
      handleError(error);
    }
  }, []);

  const fetchWeatherByCoords = useCallback(async () => {
    try {
      const response = await openWeatherService.getWeatherByCoords({
        lon: userCoords?.longitude,
        lat: userCoords?.latitude,
      });

      setWeather(response);
    } catch (error) {
      handleError(error);
    }
  }, [userCoords]);

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
      value={{ fetchWeather, fetchWeatherByCoords, weather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
