import { WiNightPartlyCloudy } from 'react-icons/wi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <WiNightPartlyCloudy />
        <div>
          Weather <p>Check</p>
        </div>
      </Link>
    </Container>
  );
};

export default Logo;
