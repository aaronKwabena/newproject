import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './Context/AuthContext';
import './index.css';
import App from './Containers/App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
