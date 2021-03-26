import { RiCloseCircleFill } from 'react-icons/ri';

import { Container, Content, Pinned, Button } from './styles';

const Dropdown: React.FC = () => {
  return (
    <Container>
      <Content>
        <Pinned>
          Rio de Janeiro, BR
          <Button type="button">
            <RiCloseCircleFill />
          </Button>
        </Pinned>
      </Content>
    </Container>
  );
};

export default Dropdown;
