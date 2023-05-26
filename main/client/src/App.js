import React, { useState, useEffect } from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import weekData from './weekData.json';

const App = () => {
  const [events, setEvents] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    setEvents(weekData.events);
    setWeatherData(weekData.weekdays);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Events App</h1>
      </header>
      <main>
        <Calendar events={events} weatherData={weatherData} />
      </main>
    </div>
  );
};

export default App;
