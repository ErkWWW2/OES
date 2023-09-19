import './App.css';
import { } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginController from './server/LoginCotroller.js';
import CalendarLayout from './components/App/CalendarLayout/CalendarLayout';
import EventLayout from './components/App/EventLayout/EventLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Navigate to='/login' replace />} />
            <Route path='/calendar' element={<CalendarLayout />} />
            <Route path='/events' element={<EventLayout />} />
            <Route path='/login' element={<LoginController />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
