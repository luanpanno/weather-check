export interface Coord {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface Wind {
  speed: number;
  deg: number;
}

export interface Clouds {
  all: 20;
}

export interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface WeatherResponse {
  id: number;
  dt: number;
  cod: number;
  timezone: number;
  visibility: number;
  name: string;
  base: string;
  sys: Sys;
  wind: Wind;
  coord: Coord;
  clouds: Clouds;
  main: WeatherMain;
  weather: Weather[];
}

export interface WeatherParams {
  q: string;
  lang?: string;
  units?: string;
}

export interface WeatherParamsByCoords {
  lat: number | undefined;
  lon: number | undefined;
  lang?: string;
  units?: string;
  exclude?: string;
}

export interface Daily {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  weather: Weather[];
  clouds: number;
  pop: number;
  uvi: number;
}

export interface LocationWeatherAllInfo {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  daily: Daily[];
}
