import React from 'react';

const Day = ({ day, data, onClick }) => {
  // Generate generic weather data based on the day
  const generateWeatherData = () => {
    switch (day) {
      case 'Monday':
        return 'Sunny';
      case 'Tuesday':
        return 'Cloudy';
      case 'Wednesday':
        return 'Rainy';
      case 'Thursday':
        return 'Partly Cloudy';
      case 'Friday':
        return 'Windy';
      case 'Saturday':
        return 'Snowy';
      case 'Sunday':
        return 'Thunderstorm';
      default:
        return 'No data';
    }
  };

  const weatherData = data || generateWeatherData();

  return (
    <div onClick={onClick}>
      <h3>{day}</h3>
      <p>Weather: {weatherData}</p>
    </div>
  );
};

export default Day;
