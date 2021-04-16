import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 8px 16px;

  &:not(:last-child) {
    border-right: 1px solid #eaeaea;
  }

  & > svg {
    font-size: 3rem;
  }
`;

export const WeatherDate = styled.div`
  color: #cecece;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const Description = styled.span`
  color: #333;
  font-size: 0.9rem;
`;

export const Weather = styled.span`
  margin: 8px 0;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const MinMax = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;

  span {
    display: flex;
    align-items: center;
    gap: 2px;

    svg {
      font-size: 1rem;
    }
  }
`;

export const Min = styled.span`
  svg {
    color: ${(props) => props.theme.colors.red};
  }
`;

export const Max = styled.span`
  svg {
    color: ${(props) => props.theme.colors.green};
  }
`;
