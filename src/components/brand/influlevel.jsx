// InfulLavel.js
import React, { useState } from 'react';
// import './InfulLavel.css';

function InfulLavel() {
  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/server.php', {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        console.error('Error fetching data from server');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h1>{result}</h1>
    </div>
  );
}

export default InfulLavel;
