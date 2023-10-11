import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './client/App';
import { UserController } from './controllers/UserController';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <UserController>
            <App />
        </UserController>
  </React.StrictMode>
);
