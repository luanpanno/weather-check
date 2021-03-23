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
}

export interface WeatherParamsByCoords {
  lat: number | undefined;
  lon: number | undefined;
  lang?: string;
}
