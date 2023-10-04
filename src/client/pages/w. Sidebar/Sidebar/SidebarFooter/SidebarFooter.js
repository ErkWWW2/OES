import { Link } from "react-router-dom";
import EventLayout from "../../EventLayout/EventLayout";
import "./SidebarFooter.css";
import logo from "./swap.png";
import user from "./user.png";
import plus from "./plus.png";

function SideFooter({ currView }) {
  // Change link depending on the current view
  const link = currView === EventLayout ? "/calendar" : "/events";
  const linktext = currView === EventLayout ? "the calendar" : "your events";

  return (
    <div className="buttonContainer">
      <Link className="viewShiftButton" to={link}>
        <img src={logo} alt="Calendar Icon" />
        <div className="tooltiptext">View {linktext}</div>
      </Link>
      <Link className="createEventButton" to={"/newEvent"}>
        <img src={plus} alt="New event icon" />
        <div className="tooltiptext">Create New Event</div>
      </Link>
      <Link className="confUserButton" to={'/ConfigureProfile'}>
        <img src={user} alt="User Icon" />
        <div className="tooltiptext">Configure User</div>
      </Link>

    </div>
  );
}

export default SideFooter;
