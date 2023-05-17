import React from 'react';
// import './Day.css';


const Day = ({ day, data, onClick }) => {
  return (
    <div onClick={onClick}>
      <h3>{day}</h3>
      <p>{data ? `Data: ${data}` : 'No data'}</p>
    </div>
  );
};

export default Day;
