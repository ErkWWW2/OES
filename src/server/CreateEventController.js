import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CreateEventLayout from "../components/App/CreateEventLayout/CreateEventLayout";
import { useUserContext } from "./UserController";
import { validateForm } from "../model/CreateEventModel";
import { useEventContext } from "./EventController";

function CreateEventController () {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const userController = useUserContext();
    console.log(userController.users);

    const eventController = useEventContext();
    console.log(eventController.eventDetails);
    console.log(eventController.eventDates);

    const handleSubmit = (name, desc, part, org, start, end) => {
        const validationErrors = validateForm(name, start, end);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            const newEvent = {
                name: name,
                desc: desc,
                part: part,
                org: org,
                start: start,
                end: end,
            }
            eventController.createEvent(newEvent.name, newEvent.desc, newEvent.part, newEvent.org, newEvent.start, newEvent.end);
            navigate("/events");
        }
    };

    return(
        <div className="App">
            <CreateEventLayout onSubmit={handleSubmit} errors={errors} users={userController.users} />
        </div>
    );
}

export default CreateEventController;