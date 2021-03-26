import React, { useEffect, useState } from 'react';
import { RiCloseCircleFill, RiSearchLine } from 'react-icons/ri';

import { useWeather } from '../../../../shared/hooks/useWeather';
import { Container } from './styles';

const SearchBar = () => {
  const { weather, fetchWeather } = useWeather();
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (weather) setQuery(weather?.name);
  }, [weather]);

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setQuery(value);
  }

  async function handleWeatherSearch() {
    if (!query) return;

    await fetchWeather({ q: query });
  }

  async function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    const { key } = e;

    if (key === 'Enter') await handleWeatherSearch();
  }

  function clearQuery() {
    setQuery('');
  }

  return (
    <Container>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        onKeyDown={handleKeyDown}
      />
      {query && (
        <button type="button" className="clear" onClick={clearQuery}>
          <RiCloseCircleFill />
        </button>
      )}
      <button type="button" onClick={handleWeatherSearch} className="search">
        <RiSearchLine />
      </button>
    </Container>
  );
};

export default SearchBar;
