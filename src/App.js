import './App.css';
import { } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginController from './controller/LoginCotroller.js';
import CalendarLayout from './CalendarLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Navigate to='/login' replace />} />
            <Route path='/calendar' element={<CalendarLayout />} />
            <Route path='/login' element={<LoginController />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
