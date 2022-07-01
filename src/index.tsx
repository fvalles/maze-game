import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from '@core/theme';
import { ThemeProvider } from '@core/theme/theme-provider';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ThemeProvider>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
);
