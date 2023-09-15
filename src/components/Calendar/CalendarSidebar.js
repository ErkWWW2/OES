import React from 'react';
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

function Sidebar({ selectedDate }) {
  // Extract year, month, and day from the date
  const year = selectedDate ? selectedDate.getFullYear() : '---';

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const month = selectedDate ? monthNames[selectedDate.getMonth()] : '---';
  const day = selectedDate ? getDayWithSuffix(selectedDate.getDate()) : '---';
  return (
    <div className='sidebar'>
      <p className='selDate'>
      {<span className='month'> {month} </span>}
        {<span className='day'> {day} </span>}
        
        {<span className='year'> - {year} </span>}
      </p>
    </div>
  );
}

export default Sidebar;