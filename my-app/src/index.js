import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import App from './App';
import { Header } from './Header.tsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <Header />
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
);
