import React from 'react';
import { createRoot } from 'react-dom/client';
import '../src/style.css';
import Carousel from './components/carousel.jsx';

async function loadApi() {
  const messageEl = document.getElementById('api-message');

  try {
    const response = await fetch('http://127.0.0.1:8000/api/test');
    const data = await response.json();
    if (messageEl) messageEl.textContent = data.message;
  } catch (err) {
    if (messageEl) messageEl.textContent = 'API error: ' + err;
  }
}

const App = () => (
  <div style={{ padding: 20 }}>
    <Carousel />
    <div style={{ maxWidth: 800, margin: '2rem auto', textAlign: 'center' }}>
      <h2>Laravel API test</h2>
      <p id="api-message">Loading...</p>
    </div>
  </div>
);

const rootEl = document.getElementById('react-root');
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  loadApi();
} else {
  // If not running in the React page, still call loadApi for compatibility
  loadApi();
}

export {};
