import './App.css';
import { } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginController from './server/LoginCotroller.js';
import CalendarLayout from './components/App/CalendarLayout/CalendarLayout';
import ProfilePage from './components/UserConfigure'
import EventLayout from './components/App/EventLayout/EventLayout';
import RegistrationPage from './server/RegistrationPage'
import CreateEventController from './server/CreateEventController';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<LoginController/>}></Route>
            <Route path='/calendar' element={<CalendarLayout />} />
            <Route path='/login' element={<LoginController />} />
            <Route path='/events' element={<EventLayout />} />
            <Route path='/ConfigureProfile' element={<ProfilePage/>}/>
            <Route path='/newEvent' element={<CreateEventController />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
//<Route exact path='/' element={<Navigate to='/login' replace />} />