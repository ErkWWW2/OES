import React from "react";
import EventLayout from '../../EventLayout/EventLayout';
import CalendarLayout from '../../CalendarLayout/CalendarLayout';
import { useEventContext } from "../../../../server/EventController";
import './SidebarBody.css';

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

function SidebarBody ({ selectedDate, selectedEvent, currentView }) {
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

  const eventController = useEventContext();

  const id = selectedDate ? eventController.getEventIdForDate(selectedDate): '';
  const name = id ? eventController.getNameById(id): '';
  const desc = id ? eventController.getDescById(id): '';
  
  const event = selectedEvent ? eventController.getEventById(selectedEvent): '';
  const eventDates = selectedEvent ? eventController.getDatesForEvent(selectedEvent): '';

  if (currentView === CalendarLayout)
  {
    return(
        <div>
            {<p className='selDate'>
                {<span className='month'> {month} </span>}
                {<br/>}
                {<span className='day'> {day} </span>}
                {<span className='year'> {year} </span>}
                {<br />}
                {<span className='weekday'> {weekday} </span>}
            </p>}
            {<div>
              {<h1 className="eventName"> {name} </h1>}
              {<span className="eventDesc"> {desc} </span>}
            </div>}
        </div>
    );
  }
  else if (currentView === EventLayout) {
    if (selectedEvent)
    {
        return(
            <div className="eventBody">
                {<h1 className="name">{event.name}</h1>}
                {<p className="desc">{event.desc}</p>}
                {eventDates?.map(item => (
                    <p key={item}>
                        <span>{'[' + item.votes + '] '}</span>
                        <span>{item.start.toDateString() + " - " + item.end.toDateString()}</span>
                    </p>
                ))}
            </div>
        );
    }
    else {
        return (null);
    }
  }
  else {
    return(null);
  }
}

export default SidebarBody;