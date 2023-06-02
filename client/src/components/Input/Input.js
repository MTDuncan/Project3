import React from 'react';

const Input = ({ day, events = [] }) => {
  return (
    <div>
      <h2>{`Events for ${day}`}</h2>
      {events.map((event, index) => (
        <div key={index}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>{event.eventType}</p>
        </div>
      ))}
    </div>
  );
};

export default Input;

