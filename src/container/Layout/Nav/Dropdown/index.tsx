import { RiCloseCircleFill } from 'react-icons/ri';

import { useWeather } from '../../../../shared/hooks/useWeather';
import { Container, Content, Pinned, Button, NoPin } from './styles';

const Dropdown: React.FC = () => {
  const { pinned, setPinned, query, setQuery, fetchWeather } = useWeather();

  function handleRemovePin(pin: string) {
    setPinned(pinned?.filter((item) => item !== pin));
  }

  function handlePinnedClick(pin: string) {
    setQuery(pin);
    fetchWeather(pin);
  }

  return (
    <Container>
      <Content>
        {pinned?.length <= 0 ? (
          <NoPin>There&apos;s no place pinned</NoPin>
        ) : (
          pinned?.map((pin) => {
            return (
              <Pinned
                key={pin}
                onClick={() => handlePinnedClick(pin)}
                active={query === pin}
              >
                {pin}
                <Button type="button" onClick={() => handleRemovePin(pin)}>
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
