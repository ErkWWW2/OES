import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';                                  // React-select
import makeAnimated from 'react-select/animated';                   // React-select animations
import { DateTimePicker } from '@mui/x-date-pickers';               // Material UI DateTimePicker
import { LocalizationProvider } from '@mui/x-date-pickers';         // Date Localization
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns' // Date Localization Adapter
import axios from "axios";
import "./CreateEventView.css";


function CreateEventForm({ errors, users, setErrors }) {
    // Have states for all variables to be used in creation of event
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [part, setPart] = useState([]);
    const [org, setOrg] = useState([]);

    const [start, setStart] = useState(new Date(''));
    const [end, setEnd] = useState(new Date(''));

    const [formError, setFormError] = useState(null); // New state for form-level errors

    const navigate = useNavigate();

    // React-select animation component
    const animatedComponents = makeAnimated();

    // Function to call when submit button is pressed
    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(name, start, end);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                const orgIds    = org.map((item)    => item.id);
                const partIds   = part.map((item)   => item.id);

                // Need some form handling for empty forms

                const response = await axios.post(`/api/create-event/${name}/${desc}/${partIds}/${orgIds}/${start}/${end}`,);
                console.log('Event Created: ', response.data);

                // Clear form fields after successful submission
                setName('');
                setDesc('');
                setPart([]);
                setOrg([]);
                setStart(null);
                setEnd(null);
                setFormError(null); // Clear any previous form-level error messages
                navigate('/events');
            } 
            catch (error) {
            // Handle errors
            console.error('Error creating event:', error);
            setFormError('Failed to create the event, please try again.'); // Set form-level error message
            }
        }
    };

    function validateForm(name, start, end) {
        const errors = {};

        if (!name) {
            errors.name = "Name must be filled out!";
        }

        if (!start) {
            errors.start = "Your event must have a start!";
        }

        if (!end) {
            errors.end = "Your event must have an end";
        }

        return errors;
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="container">
            <h1 className="header">Create New Event</h1>
            <div className="formWrapper">
                <form onSubmit={handleSubmit}>
                    <div className="formGroup1">
                        
                        <input 
                         name="name"
                         type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)} 
                         className="inputName"
                         placeholder="Enter name of event"
                        />
                        {errors.name && <div className="Loginerror">{errors.name}</div>}

                        <textarea 
                            name="desc"
                            type="text "
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)} 
                            className="inputDesc"
                            placeholder="Enter the description and details of your event"
                        />

                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            onChange={part => setPart(part)}
                            isMulti
                            className="selector" 
                            placeholder="Select participants"
                            options={users}
                        />

                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            onChange={org => setOrg(org)}
                            isMulti
                            className="selector" 
                            placeholder="Select organizers"
                            options={part}
                        />

                        <DateTimePicker 
                            ampm={false}
                            showDaysOutsideCurrentMonth= {true}
                            maxDateTime={end}
                            value={start}
                            onChange={(newValue) => setStart(newValue)}
                            format="LLLL dd yyyy HH:mm"
                            className="datePicker"
                        />
                        {errors.start && <div className="Loginerror">{errors.start}</div>}

                        <DateTimePicker 
                            ampm={false}
                            showDaysOutsideCurrentMonth= {true}
                            minDateTime={start}
                            value={end}
                            onChange={(newValue) => setEnd(newValue)}
                            format="LLLL dd yyyy HH:mm"
                            className="datePicker"
                        />
                        {errors.end && <div className="Loginerror">{errors.end}</div>}

                    </div>

                    <input type="submit" value="Submit" className="submitButton" />
                </form>
            </div>
        </div>
        </LocalizationProvider>
    );
}

export default CreateEventForm;