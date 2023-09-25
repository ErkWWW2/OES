import React, { useState } from "react";
import { Grid } from '@mui/material';
import './EventView.css';
import { useEventContext } from "../../../../server/EventController";
import { useUserContext } from "../../../../server/UserController";

function EventComponent({ selectedEvent, setSelectedEvent }) {
    const eventController = useEventContext();
    const userController = useUserContext();

    console.log(userController.logUser);
    console.log(eventController.eventDetails[1].part);

    const events = {};
    eventController.eventDates.forEach(eventDate => {
        if (!events[eventDate.eventId]) {
        events[eventDate.eventId] = [];
        }

        events[eventDate.eventId].push(eventDate); 
    })

    return (
        <div className="grid">
            <Grid container spacing={5} gridTemplateColumns="repear(12, 3fr)">
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
                                            <span>{item.start.toDateString() + " - " + item.end.toDateString()}</span>
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