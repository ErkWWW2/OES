import './App.css';
import { } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './pages/login/LoginView';
import RegistrationPage from '../controllers/RegistrationPage';
import ProfilePage from './pages/UserConfg/UserConfigure';
import CalendarLayout from './pages/w. Sidebar/CalendarLayout/CalendarLayout';
import EventLayout from './pages/w. Sidebar/EventLayout/EventLayout';
import EmptyPage from './pages/ErrorPage/EmptyPage';
import CreateEventLayout from './pages/CreateEventLayout/CreateEventLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Routes>
            <Route path='*' element={<EmptyPage />} />
            <Route exact path='/' element={<LoginForm/>} />
            <Route path='/calendar' element={<CalendarLayout />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/events' element={<EventLayout />} />
            <Route path='/ConfigureProfile' element={<ProfilePage/>}/>
            <Route path='/newEvent' element={<CreateEventLayout />} />
            <Route path="/register" element={<RegistrationPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
//<Route exact path='/' element={<Navigate to='/login' replace />} />