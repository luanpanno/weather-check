export function handleAppId<T>(params: T) {
  return {
    ...params,
    appId: process.env.REACT_APP_API_TOKEN,
  };
}
