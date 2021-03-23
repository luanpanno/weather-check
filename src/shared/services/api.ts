import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((req) => {
  req.params = {
    ...req.params,
    appId: process.env.REACT_APP_API_TOKEN,
  };

  return req;
});
