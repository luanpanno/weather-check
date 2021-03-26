import { useState } from 'react';
import { RiMenuFill } from 'react-icons/ri';
import OutsideClickHandler from 'react-outside-click-handler';

import Dropdown from '../Dropdown';
import { Container, Button } from './style';

const DashboardButton: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  function handleOpenDropdown() {
    setOpenDropdown(!openDropdown);
  }

  return (
    <OutsideClickHandler onOutsideClick={() => setOpenDropdown(false)}>
      <Container>
        <Button type="button" onClick={handleOpenDropdown}>
          <RiMenuFill />
        </Button>
        {openDropdown && <Dropdown />}
      </Container>
    </OutsideClickHandler>
  );
};

export default DashboardButton;
