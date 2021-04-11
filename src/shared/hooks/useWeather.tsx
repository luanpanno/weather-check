import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { LocationWeatherAllInfo, WeatherResponse } from '../models/Weather';
import { openWeatherService } from '../services';
import { handleError } from '../utils/handleError';

interface Context {
  weather: WeatherResponse | undefined;
  unit: string;
  query: string;
  pinned: string[];
  mainPlace: string;
  locationInfo: LocationWeatherAllInfo;
  setMainPlace: (value: string) => void;
  setQuery: (state: string) => void;
  setPinned: (state: string[]) => void;
  setUnit: (value: string) => void;
  fetchWeather: (query: string) => Promise<void>;
  fetchWeatherByCoords: () => Promise<void>;
  fetchLocationInfo: (lat: number, lon: number) => Promise<void>;
}

export const WeatherContext = createContext<Context>({} as Context);

export const WeatherProvider: React.FC = ({ children }) => {
  const unitStorage = localStorage.getItem('unit');
  const pinnedStorage = localStorage.getItem('pinned');
  const mainPlaceStorage = localStorage.getItem('mainPlace');
  const [weather, setWeather] = useState<WeatherResponse>();
  const [locationInfo, setLocationInfo] = useState<LocationWeatherAllInfo>(
    {} as LocationWeatherAllInfo
  );
  const [unit, setUnit] = useState(unitStorage ?? 'standard');
  const [userCoords, setUserCoords] = useState<GeolocationCoordinates>();
  const [query, setQuery] = useState('');
  const [mainPlace, setMainPlace] = useState(mainPlaceStorage ?? '');
  const [pinned, setPinned] = useState<string[]>(
    pinnedStorage ? JSON.parse(pinnedStorage) : []
  );

  useEffect(() => {
    localStorage.setItem('unit', unit);
  }, [unit]);

  useEffect(() => {
    localStorage.setItem('pinned', JSON.stringify(pinned));
  }, [pinned]);

  useEffect(() => {
    localStorage.setItem('mainPlace', mainPlace);
  }, [mainPlace]);

  const fetchWeather = useCallback(
    async (q: string) => {
      try {
        const response = await openWeatherService.getWeather({
          q,
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

  const fetchLocationInfo = useCallback(async () => {
    try {
      const response = await openWeatherService.getAllInfoByLocation({
        lon: weather?.coord?.lon,
        lat: weather?.coord?.lat,
        units: unit,
        exclude: 'current,minutely,hourly',
      });

      setLocationInfo(response);
    } catch (error) {
      handleError(error);
    }
  }, [unit, weather]);

  useEffect(() => {
    if (!userCoords) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserCoords(pos.coords);
      });
    } else if (mainPlace && !query) {
      fetchWeather(mainPlace);
    } else if (!mainPlace && !query) {
      fetchWeatherByCoords();
    }
  }, [fetchWeather, fetchWeatherByCoords, mainPlace, query, userCoords]);

  useEffect(() => {
    if (weather) {
      fetchLocationInfo();
    }
  }, [weather, fetchLocationInfo]);

  return (
    <WeatherContext.Provider
      value={{
        fetchWeather,
        fetchWeatherByCoords,
        weather,
        unit,
        setUnit,
        pinned,
        setPinned,
        query,
        setQuery,
        mainPlace,
        setMainPlace,
        fetchLocationInfo,
        locationInfo,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
