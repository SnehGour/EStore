import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchResultProvider } from './context/SearchResultContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchResultProvider>
    <App />
  </SearchResultProvider>
);

