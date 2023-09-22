import React, { useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import makeAnimated from 'react-select/animated';
import ptBR from 'date-fns/locale/pt-BR'; // Supposed to import the locale
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

    registerLocale('ptBR', ptBR);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name, desc, part, org, start, end);
    };

    return (
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

                        <ReactDatePicker
                            selectsStart
                            showTimeSelect
                            isClearable
                            selected={start}
                            onChange={date => setStart(date)    }
                            startDate={start}
                            maxDate={end}
                            dateFormat="MMMM d, yyyy h:mma"
                        />
                        {errors.start && <div className="Loginerror">{errors.start}</div>}

                        <ReactDatePicker
                            selectsEnd
                            showTimeSelect
                            isClearable
                            selected={end}
                            onChange={date => setEnd(date)    }
                            endDate={end}
                            startDate={start}
                            minDate={start}
                            dateFormat="MMMM d, yyyy h:mma"
                        />
                        {errors.end && <div className="Loginerror">{errors.end}</div>}

                    </div>

                    <input type="submit" value="Submit" className="submitButton" />
                </form>
            </div>
        </div>
    );
}

export default CreateEventForm;