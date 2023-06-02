import React, { useState } from 'react';
import Day from '../Day/Day';
import Input from '../Input/Input';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Calendar = ({ events, weatherData }) => {
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      {daysOfWeek.map(day => (
        <Day
          key={day}
          day={day}
          events={events.filter(event => event.weekday === day)}
          onClick={() => handleDayClick(day)}
        />
      ))}
      {selectedDay && (
        <div>
          <h2>{`Events for ${selectedDay}`}</h2>
          {events
            .filter(event => event.weekday === selectedDay)
            .map(event => (
              <div key={event._id}>
                <p>Title: {event.title}</p>
                <p>Description: {event.description}</p>
                <p>Event Type: {event.eventType}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Calendar;
