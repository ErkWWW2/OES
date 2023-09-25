import { Link } from "react-router-dom";
import './EmptyPage.css';

function EmptyPage() {
    return(
        <div className="emptyContainer">
            <div className="emptyContent">
                <h1 className="headerText">It seems you have reached the end of the world.</h1>
                <p className="error"></p>
                <Link className="return" to={'/login'}>Return to login</Link>
            </div>
            <div className="emptyBackground" />
        </div>
    );
}

export default EmptyPage;