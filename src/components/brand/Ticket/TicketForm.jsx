// Assuming you have set up your React project with appropriate components and styles

import React, { useState } from 'react';

const TicketForm = () => {
  const [ticketType, setTicketType] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Perform any necessary validations here

    try {
      // Assuming you have an API endpoint to handle ticket creation
      const formData = new FormData();
      formData.append('tickettype', ticketType);
      formData.append('Subject', subject);
      formData.append('Description', description);
      formData.append('img2', file);

      // Make an API call to create the ticket
      const response = await fetch('/api/create-ticket', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Ticket generated successfully');
        // Redirect to TicketDetails page
        window.location.href = '/TicketDetails';
      } else {
        // Handle error (e.g., show an error message)
        console.error('Failed to store in database');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="influtimelinesum">
      <h3>Add Ticket</h3>
      {/* Rest of your JSX code */}
      {/* ... */}
      <form onSubmit={handleSubmit}>
        <select
          name="tickettype"
          className="form-control"
          value={ticketType}
          onChange={(e) => setTicketType(e.target.value)}
        >
          {/* Options for ticket types */}
          {/* ... */}
        </select>
        <input
          type="text"
          name="Subject"
          className="form-control"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <textarea
          name="Description"
          className="form-control"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          name="img2"
          className="form-control"
          onChange={handleFileChange}
        />
        <button type="submit" className="btn btn-success">
          Generate Ticket
        </button>
      </form>
      {/* ... */}
    </div>
  );
};

export default TicketForm;
