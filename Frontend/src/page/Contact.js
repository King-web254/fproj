import React from 'react';
import './Contact.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <p>For inquiries, reach us via:</p>
        <ul>
          <li>Phone: +1 (123) 456-7890 (USA)</li>
          <li>WhatsApp: +1 (123) 456-7890</li>
          <li>Email: contact@example.com</li>
        </ul>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
