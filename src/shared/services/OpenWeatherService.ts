import { AxiosInstance } from 'axios';

import {
  LocationWeatherAllInfo,
  WeatherParams,
  WeatherParamsByCoords,
  WeatherResponse,
} from '../models/Weather';

export class OpenWeatherService {
  constructor(private api: AxiosInstance) {}

  ENDPOINT = '/weather';

  async getWeather(params: WeatherParams): Promise<WeatherResponse> {
    const { data: response } = await this.api.get<WeatherResponse>(
      this.ENDPOINT,
      {
        params,
      }
    );

    return response;
  }

  async getWeatherByCoords(
    params: WeatherParamsByCoords
  ): Promise<WeatherResponse> {
    const { data: response } = await this.api.get<WeatherResponse>(
      this.ENDPOINT,
      {
        params,
      }
    );

    return response;
  }

  async getAllInfoByLocation(
    params: WeatherParamsByCoords
  ): Promise<LocationWeatherAllInfo> {
    const { data: response } = await this.api.get<LocationWeatherAllInfo>(
      `onecall`,
      {
        params,
      }
    );

    return response;
  }
}
