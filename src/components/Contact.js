import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2 style={{color : 'white'}}>Contact Me</h2>
      <div className="contact-links">
        <div className="contact-link">
          <a href="mailto:2100032430cseh@gmail.com">Mail to Me</a>
        </div>
        <div className="contact-link">
          <a href="https://manojparuchuri.netlify.app/">Visit My First Portfolio</a>
        </div>
        <div className="contact-link">
          <a href="https://www.linkedin.com/in/manoj-krishna-mouli-paruchuri-78502a226/">Visit My LinkedIn</a>
        </div>
        <div className="contact-link">
          <a href="https://github.com/ManojKrishnaParuchuri">View My GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
