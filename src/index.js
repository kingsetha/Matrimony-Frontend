import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppRouter from './AppRouter';
import { NotificationProvider } from './pages/userhome/components/NotificationContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationProvider>
      <AppRouter/>
      </NotificationProvider>
    
  </React.StrictMode>
);


reportWebVitals();
