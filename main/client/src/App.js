import React, { useState, useEffect } from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar';
import weekData from './weekData.json';

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(weekData.events);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Events App</h1>
      </header>
      <main>
        <Calendar events={events} />
      </main>
    </div>
  );
};

export default App;
