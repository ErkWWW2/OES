import React from 'react';

function EventLabel({ name, starttime, endtime }) {

    return (
        <div className='eventLabel'>
            <p>{name}</p>
            <p>{starttime.toLocaleTimeString()} - {endtime.toLocaleTimeString()}</p>
        </div>
    );
}

export default EventLabel;