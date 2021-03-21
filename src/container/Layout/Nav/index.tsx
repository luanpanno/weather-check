import { Link } from 'react-router-dom';

import SearchBar from './SearchBar';
import { Container } from './styles';

const Nav = () => {
  return (
    <Container>
      <Link to="/">Weather Check</Link>
      <SearchBar />
    </Container>
  );
};

export default Nav;
