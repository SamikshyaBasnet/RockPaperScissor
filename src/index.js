import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContextProvider } from './contexts/AppContext';
import './styles/global-styles.css';
import App from './templates/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
);
