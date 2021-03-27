import { RiCloseCircleFill, RiEye2Line, RiEyeCloseFill } from 'react-icons/ri';

import Tooltip from '../../../../components/Tooltip';
import { useWeather } from '../../../../shared/hooks/useWeather';
import { handleTooltipId } from '../../../../shared/utils/handleTooltipId';
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

  function checkIsMainPlace(pin: string) {
    return mainPlace === pin;
  }

  function handleSetMain(e: React.MouseEvent<HTMLButtonElement>, pin: string) {
    e.preventDefault();

    if (checkIsMainPlace(pin)) {
      setMainPlace('');
    } else {
      setMainPlace(pin);
    }
  }

  function handleMainPlaceTooltip(pin: string) {
    if (checkIsMainPlace(pin)) {
      return 'Remove Main Place';
    }

    return 'Add as Main Place';
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
                    onClick={(e) => handleSetMain(e, pin)}
                    isMainPlace={checkIsMainPlace(pin)}
                    data-tip={handleMainPlaceTooltip(pin)}
                    data-for={handleTooltipId(pin, 'main-place')}
                  >
                    <RiEye2Line className="eye-open" />
                    <RiEyeCloseFill className="eye-closed" />
                    <Tooltip id={handleTooltipId(pin, 'main-place')} />
                  </SetMainButton>
                  {pin}
                </div>
                <RemoveButton
                  type="button"
                  onClick={() => handleRemovePin(pin)}
                  data-tip="Remove from pinneds"
                  data-for={handleTooltipId(pin, 'remove')}
                >
                  <RiCloseCircleFill />
                  <Tooltip id={handleTooltipId(pin, 'remove')} />
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
