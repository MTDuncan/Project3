import React from 'react';
import './App.css';
import Calendar from './components/Calendar/Calendar';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Events App</h1>
      </header>
      <main>
        <Calendar />
      </main>
    </div>
  );
};

export default App;
