import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import Image from "../Images/ContactPic.jpg"


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
        e.preventDefault();

        emailjs.sendForm('service_6onol45', 'template_9cy8cf5', e.target, '_Ccjx9es_MmAv3uZ7')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                // Clear form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('Email sending failed:', error.text);
            });
    };

    return (

        <div className="contact-container" id='Contact'>
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
                            id="name"
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

export default Contact;
