import React, { useEffect, useState } from "react";
import EventLayout from "../../EventLayout/EventLayout";
import CalendarLayout from "../../CalendarLayout/CalendarLayout";
import VoteDialog from '../../../Dialogs/VoteDialog/VoteDialog';
import EditDialog from '../../../Dialogs/EditDialog/EditDialog';
import { useUserContext } from "../../../../../controllers/UserController";
import axios from "axios";
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
  const [idArray, setIdArray] = useState([]);
  const [event, setEvent] = useState(null);
  const [eventDates, setEventDates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const userController = useUserContext();    // Get user context

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

    // Fetch event IDs for the selected date
    useEffect(() => {
      setIsLoading(true);
      if (selectedDate) {
        axios
          .get(`/api/event-dates/IDN/${selectedDate}`)
          .then((response) => {
            setIdArray(response.data);
          })
          .catch((error) => {
            console.error('Error fetching event IDs for date: ', error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }, [selectedDate]);
  
    // Fetch event details for the selected event
    useEffect(() => {
      setIsLoading(true);
      if (selectedEvent) {
        axios
          .get(`/api/events/${selectedEvent}`)
          .then((response) => {
            setEvent(response.data);
          })
          .catch((error) => {
            console.error('Error fetching event by ID: ', error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }, [selectedEvent]);
  
    // Fetch event dates for the selected event
    useEffect(() => {
      setIsLoading(true);
      if (selectedEvent) {
        axios
          .get(`/api/event-dates/${selectedEvent}`)
          .then((response) => {
            setEventDates(response.data);
          })
          .catch((error) => {
            console.error('Error fetching event dates by ID: ', error);
          })
          .finally(() => {
            setIsLoading(false);
          });
      }
    }, [selectedEvent]);

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
            { isLoading ? (
            <p>...Loading</p>
            ) : (
              <div>
                {idArray.map(event => (
                  <div className='calEvent' key={event.eventId}>
                    <h1>{event.name}</h1>
                    <p>{event.desc}</p>
                  </div>
                ))}
              </div>
            )}
        </div>
    );
  }
  // If the current view is to show events
  else if (currentView === EventLayout) {
    if (selectedEvent)
    {
        return(
            isLoading ? (
              <p>...Loading</p>
            ) : (
              <div className="calEvent">
                {<h1 className="name">{event[0].name}</h1>}
                {<p className="desc">{event[0].desc}</p>}
                {eventDates?.map(item => (
                    <p key={item}>
                        <span>{'[' + item.votes + '] '}</span>
                        <span>{(new Date(item.start)).toLocaleDateString('en-GB', options) + " - " + (new Date(item.end)).toLocaleDateString('en-GB', options)}</span>
                    </p>
                ))}
                {/*event.org.includes(userController.logUser) ? EditDialog(event)
                                                            : VoteDialog(event)*/}
              </div>
            )
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