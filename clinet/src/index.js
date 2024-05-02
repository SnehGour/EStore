import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SearchResultProvider } from './context/SearchResultContext';
import { CartProvider } from './context/CardContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <SearchResultProvider>
      <App />
    </SearchResultProvider>
  </CartProvider>
);

