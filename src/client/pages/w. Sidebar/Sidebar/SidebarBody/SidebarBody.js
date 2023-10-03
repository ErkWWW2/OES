import React from "react";
import EventLayout from "../../EventLayout/EventLayout";
import CalendarLayout from "../../CalendarLayout/CalendarLayout";
import VoteDialog from '../../../Dialogs/VoteDialog/VoteDialog';
import EditDialog from '../../../Dialogs/EditDialog/EditDialog';
import './SidebarBody.css';

// This function takes a day number as input and returns it with a suffix of st, nd, rd, or th.
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

// This function takes a date and returns the specific weekday of the date
function getWeekDay(date) {
  const options = { weekday: 'long'}; // 'long' gives the full name of the weekday
    const dateFormatter = new Intl.DateTimeFormat('en-US', options);
  return dateFormatter.format(date);
}


function SidebarBody ({ selectedDate, selectedEvent, currentView }) {

  // const eventController = useEventContext();  // Get event context
  // const userController = useUserContext();    // Get user context

  // Options for date formatting
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};

  const year = selectedDate ? '- ' + selectedDate.getFullYear() : ''; // Extract year from the date

  // Add month names as array
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Extract month and day from the date
  const month = selectedDate ? monthNames[selectedDate.getMonth()] : '';
  const day = selectedDate ? getDayWithSuffix(selectedDate.getDate()) : '';
  const weekday = selectedDate ? getWeekDay(selectedDate) : '';

  // Get events for the selected date, if these is one
  // const idArray = selectedDate ? eventController.getEventIdsForDate(selectedDate): '';
  
  // Get details and dates for selected event, if there is one
  // const event = selectedEvent ? eventController.getEventById(selectedEvent): '';
  // const eventDates = selectedEvent ? eventController.getDatesForEvent(selectedEvent): '';

  // If the current view is to show the calendar
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
              {idArray.map(id => (
                <div className='calEvent'>
                  <h1>{/*eventController.getNameById(id)*/}</h1>
                  <p>{/*eventController.getDescById(id)*/}</p>
                </div>
              ))}
            </div>}
        </div>
    );
  }
  // If the current view is to show events
  else if (currentView === EventLayout) {
    if (selectedEvent)
    {
        return(
            <div className="calEvent">
                {<h1 className="name">{event.name}</h1>}
                {<p className="desc">{event.desc}</p>}
                {eventDates?.map(item => (
                    <p key={item}>
                        <span>{'[' + item.votes + '] '}</span>
                        <span>{item.start.toLocaleDateString('en-GB', options) + " - " + item.end.toLocaleDateString('en-GB', options)}</span>
                    </p>
                ))}
                {event.org.includes(userController.logUser) ? EditDialog(event)
                                                            : VoteDialog(event)}
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