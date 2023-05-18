const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  
  const personalEvents = [
    'Grocery Shopping',
    'Gym Session',
    'Doctor Appointment',
    'Walk the dog',
    'Cook Dinner',
    'Clean the House',
    'Study for Exam',
    'Call Family',
    'Repair Car',
    'Yoga Class'
  ];
  
  const publicEvents = [
    'Concert',
    'Public Lecture',
    'Theatre Performance',
    'Festival',
    'Art Exhibition',
    'Sports Game',
    'Farmers Market',
    'Book Club',
    'Dance Class',
    'Coding Workshop'
  ];
  
  // Get a random item given an array
  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  // Gets a random personal event
  const getRandomPersonalEvent = () =>
    `${getRandomArrItem(weekdays)}: ${getRandomArrItem(personalEvents)}`;
  
  // Gets a random public event
  const getRandomPublicEvent = () =>
    `${getRandomArrItem(weekdays)}: ${getRandomArrItem(publicEvents)}`;
  
  // Function to generate random personal events
  const getRandomPersonalEvents = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push(getRandomPersonalEvent());
    }
    return results;
  };
  
  // Function to generate random public events
  const getRandomPublicEvents = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push(getRandomPublicEvent());
    }
    return results;
  };
  
  // Export the functions for use in other files
  module.exports = { getRandomPersonalEvents, getRandomPublicEvents };
  