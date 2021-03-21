import { RiSearchLine } from 'react-icons/ri';

import { Container } from './styles';

const SearchBar = () => {
  return (
    <Container>
      <input type="text" />
      <button type="button">
        <RiSearchLine />
      </button>
    </Container>
  );
};

export default SearchBar;
