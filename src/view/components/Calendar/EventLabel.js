import React from 'react';
import './EventLabel.css'; // Import the CSS file

function EventLabel({ event }) {
    const { name, starttime, endtime } = event;
  
    return (
      <div className='eventLabel'>
        <p>{name}</p>
        <p>{starttime.toLocaleTimeString()} - {endtime.toLocaleTimeString()}</p>
      </div>
    );
  }

export default EventLabel;