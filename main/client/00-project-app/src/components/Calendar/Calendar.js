import React, { useState } from 'react';
import Day from '../Day/Day';
import Input from '../Input/Input';
// import './Calendar.css';


const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Calendar = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [data, setData] = useState({});

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleDataSubmit = (day, value) => {
    setData(prevData => ({...prevData, [day]: value}));
    setSelectedDay(null);
  };

  return (
    <div>
      {daysOfWeek.map(day => (
        <Day
          key={day}
          day={day}
          data={data[day]}
          onClick={() => handleDayClick(day)}
        />
      ))}
      {selectedDay && (
        <Input
          day={selectedDay}
          onSubmit={handleDataSubmit}
          initialData={data[selectedDay]}
        />
      )}
    </div>
  );
};

export default Calendar;

