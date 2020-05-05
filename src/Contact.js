import React from 'react';
import './App.css';

function Contact() {
  return (
    <div>
        <h1>Contact</h1>
        <form className="contact-form">
            <input className="contact-item" type="text" placeholder="First Name" required />
            <input classname="contact-item"type="text" placeholder="Last Name" required />
            <input className="contact-item" type="email" placeholder="Email" />
            <textarea placeholder="Enter your message here" rows="10" cols="60"></textarea>
        </form>
    </div>
  );
}

export default Contact;
