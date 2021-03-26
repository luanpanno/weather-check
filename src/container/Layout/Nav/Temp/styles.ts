import styled from 'styled-components';

interface Props {
  name: string;
  unit: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
`;

export const TempButton = styled.button<Props>`
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 1rem;
  cursor: pointer;
  padding: 5px 8px 5px 5px;
  transition: all 100ms;
  border-bottom: 1px solid
    ${(props) =>
      props.unit === props.name ? props.theme.colors.primary : 'transparent'};

  &:hover {
    border-bottom: 1px solid #eaeaea;
  }
`;
