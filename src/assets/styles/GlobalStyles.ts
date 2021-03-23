import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import { Reset } from './Reset';

export const GlobalStyles = createGlobalStyle`
  ${Reset}

  html, body {
    width: 100%;
    height: 100%;

    &, *{
      font-family: 'Roboto', sans-serif;
      box-sizing: border-box;
      outline: 0;
    }
  }
`;
