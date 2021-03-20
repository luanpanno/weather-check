import { createGlobalStyle } from 'styled-components';

import { Reset } from './Reset';

export const GlobalStyles = createGlobalStyle`
  ${Reset}

  html, body {
    width: 100%;
    height: 100%;
  }
`;
export default GlobalStyles;
