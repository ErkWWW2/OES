import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './client/App';
import { UserController } from './controllers/UserController';
import { EventController } from './controllers/EventController';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <UserController>
          <EventController>
            <App />
          </EventController>
        </UserController>
  </React.StrictMode>
);
