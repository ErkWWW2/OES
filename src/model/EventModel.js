//Model for events
class EventModel 
{
    constructor()   //Generates a set of three events
    {
        this.eventDates = [
          {
            id: 1,
            date: new Date(2023, 8, 15), // September is month 8 in JavaScript
            starttime: new Date(2023, 8, 15, 9, 0), // 9:00 AM
            endtime: new Date(2023, 8, 15, 11, 0), // 11:00 AM
            votes: 0,
            voters: ['', ''],
          },
          {
            id: 1,
            date: new Date(2023, 8, 20), // September is month 8 in JavaScript
            starttime: new Date(2023, 8, 20, 9, 0), // 9:00 AM
            endtime: new Date(2023, 8, 20, 11, 0), // 11:00 AM
            votes: 0,
            voters: ['', ''],
          },
          {
            id: 2,
            date: new Date(2023, 9, 7), // October is month 9 in JavaScript
            starttime: new Date(2023, 8, 15, 9, 0), // 9:00 AM
            endtime: new Date(2023, 8, 15, 11, 0), // 11:00 AM
            votes: 0,
            voters: ['', ''],
          },
        ];

        this.events = [
          {
            id: 1,
            name: 'Event 1',
            description: 'This event is for testing events the same event on multiple dates',
            participants: ['', '', ''],
            creator: '',
          },
          {
            id: 2,
            name: 'Event 2',
            description: 'This event is for testing events',
            participants: ['', '', ''],
            creator: '',
          },
        ];
    }

    getEventsForDate(date){
      
      let eventIds = [];
      let eventIdsIndex = 0;

      let dates = [];
      let datesIndex = 0;

      for (let i = 0; i < 3; i++) {
        if (this.eventDates[i].date === date) {
          eventIds[eventIdsIndex] = this.eventDates[i].id;
          eventIdsIndex++;
        }
      }

      for(let i = 0; i < 2; i++) {
        if (this.events[i].id === eventIds[i]) {
          dates[datesIndex] = this.events[i];
          datesIndex++;
        }
      }

      return dates;
    }
}

export default EventModel;