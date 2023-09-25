import React, { useState } from "react";
import Select from 'react-select';                                  // React-select
import makeAnimated from 'react-select/animated';                   // React-select animations
import { DateTimePicker } from '@mui/x-date-pickers';               // Material UI DateTimePicker
import { LocalizationProvider } from '@mui/x-date-pickers';         // Date Localization
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns' // Date Localization Adapter
import {enGB } from '@mui/x-date-pickers/locales'
import "./CreateEventView.css";


function CreateEventForm({ onSubmit, errors, users }) {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [part, setPart] = useState();
    const [org, setOrg] = useState();

    const [start, setStart] = useState();
    const [end, setEnd] = useState();

    // React-select animation component
    const animatedComponents = makeAnimated();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name, desc, part, org, start, end);
    };

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
                            options={users}
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