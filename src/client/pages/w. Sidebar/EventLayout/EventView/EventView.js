import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from '@mui/material';
import { useUserContext } from "../../../../../controllers/UserController";
import './EventView.css';

function EventComponent({ setSelectedEvent }) {
    const [userEvents, setUserEvents] = useState([]);
    const [eventDates, setEventDates] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const userController = useUserContext();

    const userId = userController.logUser;
    // Options for date formatting
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};

    useEffect(() => {
        // GET HTTP request to /api/events/:userId
        axios.get(`/api/events/u/${userId}`)
            .then(response => {
                setUserEvents(response.data.events);

                const eventDatesPromise = response.data.events.map(event => {
                    return axios.get(`/api/event-dates/${event.eventId}`)
                        .then(dateResponse => {
                            return dateResponse.data;
                        })
                        .catch(dateError => {
                            console.error('Error fetching event dates: ', dateError);
                            return [];
                        });
                });

                // Create promise so that we can use async functions
                Promise.all(eventDatesPromise)
                    .then(eventDate => {
                        setEventDates(eventDate);
                        setIsLoading(false);
                    })
                    .catch(allDatesError => {
                        console.error('Error fetching all event dates: ', allDatesError);
                        setIsLoading(false);
                    });
            })
            .catch(error => {
                console.error('Error fetching user events: ', error);
                setIsLoading(false);
            });
    }, []); // Use empty dependency array

    let events = null;
    if (!isLoading) {
        events = userEvents.map(event => {
            const eventDatesForEvent = eventDates
                .flatMap(dateArray => dateArray)                // Flatten the array of arrays
                .filter(date => date.eventId === event.eventId) // Get only dates for the current event
                .map(date => ({                                 // Get the correct parameters
                    start: new Date(date.start), 
                    end: new Date(date.end), 
                    votes: date.votes}));
    
            return (
                <Grid item key={event.eventId} xs={12} sm={6} md={4}>
                  <div className="eventBox" onClick={() => setSelectedEvent(event.eventId)}>
                    <div className="eventContent">
                      <h2>{event.name}</h2>
                      <hr />
                      <div>
                        {eventDatesForEvent.map(item => (
                          <p key={item}>
                            <span>{'[' + item.votes + '] '}</span>
                            <span>{item.start.toLocaleDateString('en-GB', options) + " - " + item.end.toLocaleDateString('en-GB', options)}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Grid>
            );
        });
    } 

    return (
        <div className="grid">
          <Grid container spacing={5} gridTemplateColumns="repeat(12, 3fr)">
            {isLoading ? <p>Loading...</p> : events}
          </Grid>
        </div>
    );
}

export default EventComponent;