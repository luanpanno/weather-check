import styled from 'styled-components';

interface PinnedProps {
  active: boolean;
}

interface MainButtonProps {
  isMainPlace: boolean;
}

export const Container = styled.div`
  position: absolute;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 5px;
  box-shadow: 1px 2px 2px 2px ${(props) => props.theme.colors.lightTransparency};
  top: 50px;
  left: calc(-50% - 78px);
  min-width: 250px;
  z-index: 100;

  &::before {
    content: '';
    width: 15px;
    height: 15px;
    background-color: #fff;
    position: absolute;
    top: -4px;
    left: calc(50% - 15px);
    transform: rotate(45deg);
    border-radius: 2px;
  }

  @media screen and (max-width: 1160px) {
    left: initial;
    right: 0;

    &::before {
      top: -4px;
      left: initial;
      right: 12px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 5px;
`;

export const Pinned = styled.div<PinnedProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 100ms;
  background-color: ${(props) => props.active && 'rgba(255, 150, 0, 0.4)'};

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &:hover {
    background-color: ${(props) =>
      props.active ? 'rgba(255, 150, 0, 0.3)' : '#eaeaea'};
  }

  .pinned-location {
    border: none;
    background-color: transparent;
    outline: none;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    cursor: pointer;
  }
`;

export const SetMainButton = styled.button<MainButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${(props) => props.theme.colors.grey};
  border: none;
  outline: none;
  transition: all 100ms;
  padding: 0;
  cursor: pointer;

  .eye-open {
    display: ${(props) => (props.isMainPlace ? 'inline-block' : 'none')};
  }

  .eye-closed {
    display: ${(props) => (props.isMainPlace ? 'none' : 'inline-block')};
  }

  &:hover {
    color: ${(props) =>
      props.isMainPlace ? props.theme.colors.red : props.theme.colors.green};

    .eye-open {
      display: ${(props) => (props.isMainPlace ? 'none' : 'inline-block')};
    }

    .eye-closed {
      display: ${(props) => (props.isMainPlace ? 'inline-block' : 'none')};
    }
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${(props) => props.theme.colors.grey};
  border: none;
  outline: none;
  transition: all 100ms;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.red};
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const NoPin = styled.p`
  padding: 10px;
  text-align: center;
  color: #cecece;
`;
