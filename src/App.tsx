import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './assets/styles/GlobalStyles';
import { theme } from './assets/styles/theme';
import Routes from './routes/routes';
import { WeatherProvider } from './shared/context/WeatherContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastContainer />
      <BrowserRouter>
        <WeatherProvider>
          <Routes />
        </WeatherProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
