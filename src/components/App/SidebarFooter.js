import { Link } from "react-router-dom";
import EventLayout from "./EventLayout/EventLayout";
import './SidebarFooter.css';

function SideFooter({ currentView }) {
    const link = (currentView === EventLayout)? '/calendar': '/events';

    <div className="contentBox">
        {/* Add a button for creating events */}
        <Link className="viewShiftButton" to={link} />
    </div>
}

export default SideFooter;