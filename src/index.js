import React from 'react';
import { createRoot } from 'react-dom/client';
import CitySelector from './App';
// import Home from './components/home';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CitySelector />
  </React.StrictMode>,
  document.getElementById('root')
);
