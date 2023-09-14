import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './CalendarLayout';
import MyFormComponent from './components/MyFormComponent';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Navigate to='/login' replace />} />
            <Route path="/calendar" element={<Layout />} />
            <Route path="/login" element= {<MyFormComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;