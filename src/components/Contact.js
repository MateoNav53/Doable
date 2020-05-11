import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
        <h1>Contact</h1>
        <form className="contact-form" action="https://formspree.io/xlepdryq" method="POST">
            <div className="contact-input-container">
              <input className="contact-item" type="text" placeholder="First Name" size="60" required />
              <input className="contact-item"type="text" placeholder="Last Name" size="60" required />
              <input className="contact-item" type="email" name="_replyto" placeholder="Email" size="60" required />
            </div>
            <div className="textbox-container">
              <textarea placeholder="Enter your message here" rows="6" cols="60" required></textarea>
              <button className="btn btn-success contact-submit-btn btn-lg"type="submit">Send</button>
            </div>
            
        </form>
    </div>
  );
}

export default Contact;
