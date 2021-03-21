import DashboardButton from './DashboardButton';
import Logo from './Logo';
import SearchBar from './SearchBar';
import { Container } from './styles';
import Temp from './Temp';

const Nav = () => {
  return (
    <Container>
      <Logo />
      <SearchBar />
      <Temp />
      <DashboardButton />
    </Container>
  );
};

export default Nav;
