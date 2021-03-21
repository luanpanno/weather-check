import { Link } from 'react-router-dom';

import DashboardButton from './DashboardButton';
import SearchBar from './SearchBar';
import { Container } from './styles';
import Temp from './Temp';

const Nav = () => {
  return (
    <Container>
      <Link to="/">Weather Check</Link>
      <SearchBar />
      <Temp />
      <DashboardButton />
    </Container>
  );
};

export default Nav;
