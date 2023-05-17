import React, { useState, useEffect } from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar';

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events') // Replace with your server's endpoint URL
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error('Error fetching events:', error);
      });
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