import React from 'react';
import SideFooter from './SidebarFooter';
import './CalendarSidebar.css';

function getDayWithSuffix(day) {
  if (day >= 11 && day <= 13) {
    return `${day}th`;
  }

  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

function getWeekDay(date) {
  const options = { weekday: 'long'}; // 'long' gives the full name of the weekday
    const dateFormatter = new Intl.DateTimeFormat('en-US', options);
  return dateFormatter.format(date);
}

function Sidebar({ selectedDate, currentView }) {
  // Extract year from the date
  const year = selectedDate ? '- ' + selectedDate.getFullYear() : '';

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Extract month and day from the date
  const month = selectedDate ? monthNames[selectedDate.getMonth()] : '';
  const day = selectedDate ? getDayWithSuffix(selectedDate.getDate()) : '';
  const weekday = selectedDate ? getWeekDay(selectedDate) : '';

  return (
    <div className='sidebar'>
      <div className='selDate'>
        {<span className='month'> {month} </span>}
        {<br/>}
        {<span className='day'> {day} </span>}
        {<span className='year'> {year} </span>}
        {<br></br>}
        {<span className='weekday'> {weekday} </span>}
      </div>
      <SideFooter className='footer' currView={currentView} />
    </div>
  );
}

export default Sidebar;