import React, { useState, useEffect } from 'react';

const Input = ({ day, onSubmit, initialData = '' }) => {
  const [value, setValue] = useState(initialData);

  useEffect(() => {
    setValue(initialData);
  }, [initialData]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(day, value);
  };

  return (
    <div>
      <h2>{`Input for ${day}`}</h2>
      <textarea value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Input;
