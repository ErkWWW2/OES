import React, { useState, useEffect } from "react";
import EventController from "../../../../server/EventController";
import { Grid } from '@mui/material';
import './EventView.css';

function EventComponent() {
    const [eventDetails, setEventsDetails] = useState([]);
    const [eventDates, setEventDates] = useState([]);
    
    useEffect(() => {
        // Call the fetchEvents function to populate eventModel
        EventController.fetchEvents();

        // Access eventDetails and eventDates from EventModel and set it in the state
        setEventsDetails(EventController.getEvents());
        setEventDates(EventController.getEventDates());


        // Checking that arrays are accessed correctly
        console.log(eventDates);
        console.log(eventDetails);
    }, []);

    const events = {};
    eventDates.forEach(eventDate => {
        if (!events[eventDate.eventId]) {
            events[eventDate.eventId] = [];
        }

        events[eventDate.eventId].push(eventDate);
        console.log(events);
    })

    return (
        <div className="grid">
            <Grid container spacing={2} gridTemplateColumns="repear(12, 3fr)">
                {eventDetails.map(event => (
                    <Grid item key={event.eventId} xs={12} sm={6} md={4}>
                        <div className="eventBox">
                            <div className="eventContent">
                                <h2>{event.name}</h2>
                                <hr />
                                <div>
                                    {events[event.eventId]?.map(item => (
                                        <p key={item}>
                                            <span>{'[' + item.votes + '] '}</span>
                                            <span>{item.date.toDateString()}</span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Grid> 
                ))}
            </Grid>
        </div>
    );
}

export default EventComponent;