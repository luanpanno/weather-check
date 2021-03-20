import { api } from './api';
import { OpenWeatherService } from './OpenWeatherService';

export const openWeatherService = new OpenWeatherService(api);
