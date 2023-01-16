import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { InfoContextProvider } from './store/info-context';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <InfoContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </InfoContextProvider>
);
