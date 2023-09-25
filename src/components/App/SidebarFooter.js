import { Link } from "react-router-dom";
import EventLayout from "./EventLayout/EventLayout";
import './SidebarFooter.css';

function SideFooter({ currView }) {
    const link = (currView === EventLayout)? '/calendar': '/events';
    const linktext = (currView === EventLayout)? 'the calendar': 'your events';

    return(
        <div className="contentBox">
        <Link className="viewShiftButton" to={link} > 
            <div className="tooltiptext">View {linktext} </div>
        </Link>
        <Link className="createEventButton" to={'/newEvent'}>
            <div className="tooltiptext">Create New Event</div>
        </Link>
        <Link className="viewShiftButton" to={'/ConfigureProfile'} > 
            <div className="tooltiptext">Profile</div>
        </Link>
        </div>
    );
}

export default SideFooter;