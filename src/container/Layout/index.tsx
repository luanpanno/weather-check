import Footer from './Footer';
import Nav from './Nav';
import { Container, Main } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
