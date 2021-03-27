import { RiCloseCircleFill, RiEye2Line, RiEyeCloseFill } from 'react-icons/ri';

import { useWeather } from '../../../../shared/hooks/useWeather';
import {
  Container,
  Content,
  Pinned,
  RemoveButton,
  NoPin,
  SetMainButton,
} from './styles';

const Dropdown: React.FC = () => {
  const {
    pinned,
    setPinned,
    query,
    setQuery,
    fetchWeather,
    setMainPlace,
    mainPlace,
  } = useWeather();

  function handleRemovePin(pin: string) {
    setPinned(pinned?.filter((item) => item !== pin));
  }

  function handlePinnedClick(pin: string) {
    setQuery(pin);
    fetchWeather(pin);
  }

  function handleSetMain(pin: string) {
    if (mainPlace === pin) {
      setMainPlace('');
    } else {
      setMainPlace(pin);
    }
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
                <div>
                  <SetMainButton
                    type="button"
                    onClick={() => handleSetMain(pin)}
                    isMainPlace={mainPlace === pin}
                  >
                    <RiEye2Line className="eye-open" />
                    <RiEyeCloseFill className="eye-closed" />
                  </SetMainButton>
                  {pin}
                </div>
                <RemoveButton
                  type="button"
                  onClick={() => handleRemovePin(pin)}
                >
                  <RiCloseCircleFill />
                </RemoveButton>
              </Pinned>
            );
          })
        )}
      </Content>
    </Container>
  );
};

export default Dropdown;
