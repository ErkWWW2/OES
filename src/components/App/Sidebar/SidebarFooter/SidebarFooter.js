import { Link } from "react-router-dom";
import EventLayout from "../../EventLayout/EventLayout";
import './SidebarFooter.css';
import logo from './calendar.png';

function SideFooter({ currView }) {
    const link = (currView === EventLayout)? '/calendar': '/events';
    const linktext = (currView === EventLayout)? 'the calendar': 'your events';

    return(
        <div className="contentBox">
            <Link className="viewShiftButton" to={link} >
                <img src={logo}></img>
                <div className="tooltiptext">View {linktext} </div>
            </Link>
            <Link className="createEventButton" to={'/newEvent'}>
                <h1>Create a new event</h1>
                <div className="tooltiptext">Create New Event</div>
            </Link>
        </div>
    );
}

export default SideFooter;