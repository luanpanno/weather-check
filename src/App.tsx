import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './assets/styles/GlobalStyles';
import { theme } from './assets/styles/theme';
import Routes from './routes/routes';
import { LocationProvider } from './shared/hooks/useLocation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <LocationProvider>
          <Routes />
        </LocationProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
