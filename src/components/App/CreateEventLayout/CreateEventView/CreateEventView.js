import React, { useState } from "react";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css'
import ptBR from 'date-fns/locale/pt-BR'; // Supposed to import the locale
import "./CreateEventView.css";

function CreateEventForm({ onSubmit, errors }) {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [part, setPart] = useState([]);
    const [org, setOrg] = useState([]);

    const [date, setDate] = useState(new Date());
    const [start, setStart] = useState();
    const [end, setEnd] = useState();

    registerLocale('ptBR', ptBR);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Fix so that when submit button is pressed, the 
        // states are updated and event is created
        onSubmit(name, desc, part, org, date, start, end);
    };

    return (
        <div className="container">
            <h1 className="header">Create New Event</h1>
            <div className="formWrapper">
                <form>
                    <div className="formGroup1">
                        <input 
                         name="name"
                         type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)} 
                         className="inputName"
                         placeholder="Enter name of event"
                        />

                        <textarea 
                         name="desc"
                         type="text "
                         value={desc}
                         onChange={(e) => setDesc(e.target.value)} 
                         className="inputDesc"
                         placeholder="Enter the description and details of your event"
                        />

                        <select className="selector" placeholder="Select participants">
                            <option selected value={"none"}></option>
                        </select>

                        <select className="selector" placeholder="Select organizers">
                            <option selected value={"none"}></option>
                        </select>

                        <ReactDatePicker
                            selectsStart
                            showTimeSelect
                            isClearable
                            selected={start}
                            onChange={date => setStart(date)    }
                            startDate={start}
                            dateFormat="MMMM d, yyyy hh:mm"
                        />

                        <ReactDatePicker
                            selectsEnd
                            showTimeSelect
                            isClearable
                            selected={end}
                            onChange={date => setEnd(date)    }
                            endDate={end}
                            startDate={start}
                            minDate={start}
                            dateFormat="MMMM d, yyyy hh:mm"
                        />
                    </div>

                    <input type="submit" value="Submit" className="submitButton" />
                </form>
            </div>
        </div>
    );
}

export default CreateEventForm;