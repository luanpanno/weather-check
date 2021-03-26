import { RiCloseCircleFill } from 'react-icons/ri';

import { useWeather } from '../../../../shared/hooks/useWeather';
import { Container, Content, Pinned, Button, NoPin } from './styles';

const Dropdown: React.FC = () => {
  const { pinned } = useWeather();

  return (
    <Container>
      <Content>
        {pinned?.length <= 0 ? (
          <NoPin>There&apos;s no place pinned</NoPin>
        ) : (
          pinned?.map((pin) => {
            return (
              <Pinned key={pin}>
                {pin}
                <Button type="button">
                  <RiCloseCircleFill />
                </Button>
              </Pinned>
            );
          })
        )}
      </Content>
    </Container>
  );
};

export default Dropdown;
