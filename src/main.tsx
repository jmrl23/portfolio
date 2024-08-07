import App from '@/App.tsx';
import '@/globals.css';
import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
);
