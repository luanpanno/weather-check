import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  Coord,
  LocationWeatherAllInfo,
  WeatherResponse,
} from '../models/Weather';
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
  fetchWeather: (query: string, units?: string) => Promise<void>;
  fetchWeatherByCoords: () => Promise<void>;
  hasUserCoords: () => boolean;
  fetchLocationInfo: (coords: Coord, units?: string) => Promise<void>;
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

  const fetchLocationInfo = useCallback(
    async ({ lon, lat }, units?: string) => {
      try {
        const response = await openWeatherService.getAllInfoByLocation({
          lon,
          lat,
          units: units ?? unit,
          exclude: 'current,minutely,hourly',
        });

        setLocationInfo(response);
      } catch (error) {
        handleError(error);
      }
    },
    [unit]
  );

  const fetchWeather = useCallback(
    async (q: string, units?: string) => {
      try {
        const response = await openWeatherService.getWeather({
          q,
          units: units ?? unit,
        });

        setWeather(response);
        await fetchLocationInfo(response?.coord, units);
      } catch (error) {
        handleError(error);
      }
    },
    [fetchLocationInfo, unit]
  );

  const fetchWeatherByCoords = useCallback(async () => {
    try {
      const response = await openWeatherService.getWeatherByCoords({
        lon: userCoords?.longitude,
        lat: userCoords?.latitude,
        units: unit,
      });

      setWeather(response);
      await fetchLocationInfo(response?.coord);
    } catch (error) {
      handleError(error);
    }
  }, [fetchLocationInfo, unit, userCoords]);

  const fetchFirstWeather = useCallback(() => {
    if (!userCoords) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserCoords(pos.coords);
      });
    } else if (mainPlace && !query && !weather) {
      fetchWeather(mainPlace);
    } else if (!query && !weather) {
      fetchWeatherByCoords();
    }
  }, [
    fetchWeather,
    fetchWeatherByCoords,
    mainPlace,
    query,
    userCoords,
    weather,
  ]);

  useEffect(() => {
    fetchFirstWeather();
  }, [fetchFirstWeather]);

  const hasUserCoords = useCallback(() => !!userCoords, [userCoords]);

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
        hasUserCoords,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
