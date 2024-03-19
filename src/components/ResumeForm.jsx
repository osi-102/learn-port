import React, { useState } from 'react';

const ResumeForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      // Parse the contents of the uploaded file and extract relevant information
      // Here, we assume that the file is a text file and contains information in a specific format

      // Example parsing logic for a text file with "FULLNAME", "EMAIL", and "PHONE" labels
      const lines = contents.split('\n');
      lines.forEach((line) => {
        if (line.startsWith('FULLNAME:')) {
          const fullNameValue = line.split(':')[1].trim();
          setFullName(fullNameValue);
        } else if (line.startsWith('EMAIL:')) {
          const emailValue = line.split(':')[1].trim();
          setEmail(emailValue);
        } else if (line.startsWith('PHONE:')) {
          const phoneValue = line.split(':')[1].trim();
          setPhone(phoneValue);
        }
      });
    };

    reader.readAsText(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic
    // You can access the form values using the state variables (fullName, email, phone)
    console.log('Form submitted:', { fullName, email, phone });
  };

  return (
    <div>
      <h1>Resume Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor="resume">Upload Resume:</label>
          <input type="file" id="resume" accept=".txt" onChange={handleFileUpload} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResumeForm;