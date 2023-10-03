import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from '@mui/material';
import './EventView.css';
import { getEventById } from "../../../../../server/controllers/EventController2";
import { response } from "express";

function EventComponent({ setSelectedEvent }) {
    const [userEvents, setUserEvents] = useState([]);

    // Options for date formatting
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric'};

    useEffect(() => {
        // Make HTTP GET request to fetch events for user
        axios.get('api/events/user/1')
            .then(response => {
                setUserEvents(response.data);
            })
            .catch(error => {   
                console.error('Error fetching events for user', error);
            });
    }, []);

    // Get events
    const events = {};
    eventController.eventDates.forEach(eventDate => {
        if (!events[eventDate.eventId]) {
        events[eventDate.eventId] = [];
        }

        events[eventDate.eventId].push(eventDate); 
    })

    return (
        <div className="grid">
            <Grid container spacing={5} gridTemplateColumns="repeat(12, 3fr)">
                {eventController.eventDetails.filter(event => event.part.includes(userController.logUser)).map(event => ( 
                    <Grid item key={event.eventId} xs={12} sm={6} md={4}>
                        <div className="eventBox" onClick={() => setSelectedEvent(event.eventId)}>
                            <div className="eventContent" >
                                <h2>{event.name}</h2>
                                <hr />
                                <div>
                                    {events[event.eventId]?.map(item => (
                                        <p key={item}>
                                            <span>{'[' + item.votes + '] '}</span>
                                            <span>{item.start.toLocaleDateString('en-GB', options) + " - " + item.end.toLocaleDateString('en-GB', options)}</span>
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