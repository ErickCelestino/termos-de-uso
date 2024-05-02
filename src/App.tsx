import { BrowserRouter } from 'react-router-dom';
import { AppThemeProvider } from './shared/context';
import { AppRoutes } from './shared/routes';

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
          <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
