import { createContext, useCallback, useContext } from 'react';

import { WeatherParams, WeatherResponse } from '../models/Weather';
import { openWeatherService } from '../services';

interface Context {
  fetchWeather: (params: WeatherParams) => Promise<WeatherResponse>;
}

export const LocationContext = createContext<Context>({} as Context);

export const LocationProvider: React.FC = ({ children }) => {
  navigator.geolocation.getCurrentPosition((pos) => {
    // eslint-disable-next-line no-console
    console.log(pos);
  });

  const fetchWeather = useCallback(async (params: WeatherParams) => {
    try {
      const response = await openWeatherService.getWeather(params);

      return response;
    } catch (error) {
      return error;
    }
  }, []);

  return (
    <LocationContext.Provider value={{ fetchWeather }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
