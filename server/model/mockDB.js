const mockDetails = [
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

const mockDates = [
    { 
        start: new Date(2023, 8, 15, 9, 0), 
        end: new Date(2023, 8, 15, 11, 0), 
        eventId: 1, 
        votes: 0, 
        voters: [] 
    },
    { 
        start: new Date(2023, 8, 20, 9, 0), 
        end: new Date(2023, 8, 20, 11, 0), 
        eventId: 1, 
        votes: 0, 
        voters: [] 
    },
    { 
        start: new Date(2023, 9, 7, 9, 0), 
        end: new Date(2023, 9, 7, 11, 0), 
        eventId: 2, 
        votes: 0, 
        voters: [] 
    },
    { 
        start: new Date(2023, 8, 10, 9, 0), 
        end: new Date(2023, 8, 17, 11, 0), 
        eventId: 3, 
        votes: 0, 
        voters: [] 
    },
];

module.exports = { mockDetails, mockDates };