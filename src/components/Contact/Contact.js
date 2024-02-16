import React, { useState } from 'react';
import './Contact.css'
import Image from '../Images/Rectangle 21.jpg';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      };
    
      return (

        <div className="contact-container">
          <div className="contact-image">
          <h1>Contact</h1>
          <img src={Image} alt="Contact" /> 
          </div>
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
    );
  }

export default Contact