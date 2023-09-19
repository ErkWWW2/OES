import React, { useState, useEffect } from "react";
import EventController from "../../../controller/EventController";
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

    return (
        <div className="grid">
            <Grid container spacing={2}>
                {eventDetails.map(event => (
                    <Grid item key={event.eventId} xs={12} sm={6} md={4}>
                        <div className="eventBox">
                            <div className="eventContent">
                                <h2>{event.name}</h2>
                                <hr />
                                <p>{event.description}</p>
                            </div>
                        </div>
                    </Grid> 
                ))}
            </Grid>
        </div>
    );
}

export default EventComponent;