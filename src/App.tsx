import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './assets/styles/GlobalStyles';
import { theme } from './assets/styles/theme';
import Routes from './routes/routes';
import { LocationProvider } from './shared/hooks/useLocations';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer />
      <BrowserRouter>
        <LocationProvider>
          <Routes />
        </LocationProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
