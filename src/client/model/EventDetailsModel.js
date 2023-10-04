const EventDetailsModel = [
    { 
        eventId: 1, 
        name: 'Event 1', 
        desc: 'This event is for testing events the same event on multiple dates', 
        part: [1,2], 
        org: [1] 
    },
    { 
        eventId: 2, 
        name: 'Event 2', 
        desc: 'This event is for general testing', 
        part: [2,3], 
        org: [2] 
    },
    {
        eventId: 3, 
        name: 'Event 3', 
        desc: 'This event is for testing event ranges', 
        part: [1,2,3], 
        org: [1,2] 
    },
];

const getEventById = (id) => {
    return EventDetailsModel.find((event) => event.eventId === id);
  };

export default { getEventById };