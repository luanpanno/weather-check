import React, { useEffect } from 'react';
import { RiCloseCircleFill, RiSearchLine } from 'react-icons/ri';

import Tooltip from '../../../../components/Tooltip';
import { useWeather } from '../../../../shared/hooks/useWeather';
import { handleTooltipId } from '../../../../shared/utils/handleTooltipId';
import { Container } from './styles';

const SearchBar = () => {
  const { weather, fetchWeather, query, setQuery } = useWeather();

  useEffect(() => {
    if (weather) setQuery(`${weather?.name}, ${weather?.sys?.country}`);
  }, [setQuery, weather]);

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    setQuery(value);
  }

  async function handleWeatherSearch() {
    if (!query) return;

    await fetchWeather(query);
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
        <button
          type="button"
          className="clear"
          onClick={clearQuery}
          data-tip="Clear query"
          data-for={handleTooltipId('clear', 'query')}
        >
          <RiCloseCircleFill />
          <Tooltip id={handleTooltipId('clear', 'query')} />
        </button>
      )}
      <button
        type="button"
        onClick={handleWeatherSearch}
        className="search"
        data-tip="Search"
        data-for={handleTooltipId('search', 'query')}
      >
        <RiSearchLine />
        <Tooltip id={handleTooltipId('search', 'query')} />
      </button>
    </Container>
  );
};

export default SearchBar;
