import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import CreateEventLayout from "../client/pages/login/LoginCreateAccount";
import { useUserContext } from "./UserController";
import { validateForm } from "../client/model/CreateEventModel";
import { useEventContext } from "./EventController";

function CreateEventController () {
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Get User and Event Contexts
    const userController = useUserContext();
    const eventController = useEventContext();

    const handleSubmit = (name, desc, part, org, start, end) => {
        const validationErrors = validateForm(name, start, end);
        setErrors(validationErrors);
        
        // Convert part and org into single-variable arrays holding only the id
        const partArray = part;
        const orgArray = org;
        if (partArray !== undefined) {
            for (let i = 0; i < partArray.length; i++) {
                part[i] = partArray[i].id;
            }
        }
        else {
            part = [];
        }

        if (orgArray !== undefined) {
            for (let i = 0; i < orgArray.length; i++) {
                org[i] = orgArray[i].id;
            }
        }
        else {
            org = [];
        }

        // Make sure there anre no errors and then create 
        // the event before navigating to /events
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