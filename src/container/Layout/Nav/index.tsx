import { Link } from 'react-router-dom';
import { Container } from './styles';

const Nav = () => {
  return (
    <Container>
      <Link to="/">Weather Check</Link>
    </Container>
  );
};

export default Nav;
