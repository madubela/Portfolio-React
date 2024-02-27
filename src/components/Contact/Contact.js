import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Image from "../Images/ContactPic.jpg";
import { Fade } from "react-reveal";
import ReCAPTCHA from 'react-google-recaptcha'; // Import ReCAPTCHA

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        recaptcha: '' // Add a state for reCAPTCHA response
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleRecaptchaChange = (value) => {
        setFormData({
            ...formData,
            recaptcha: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add the reCAPTCHA response to the form data
        const form = e.target;
        form.elements.recaptcha.value = formData.recaptcha;

        emailjs.sendForm('service_6onol45', 'template_9cy8cf5', form, '_Ccjx9es_MmAv3uZ7')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                // Clear form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    recaptcha: '' // Reset reCAPTCHA state
                });
            })
            .catch((error) => {
                console.error('Email sending failed:', error.text);
            });
    };

    return (
        <div className="contact-container" id='Contact'>
            <div className="contact-image">
            <Fade bottom>
          <h2 style={headingStyles}>Contact</h2>
        </Fade>
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
                    <ReCAPTCHA
                        sitekey="6Lci_H8pAAAAAFCvQOFOlrkNXoSU4MX4zyt8XGi0"
                        onChange={handleRecaptchaChange}
                    />
                    <input type="hidden" name="recaptcha" /> {/* Hidden input for reCAPTCHA response */}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;


const headingStyles = {
    textAlign: "center",
    marginBottom: "260px",
    fontSize: "3rem",
    color: "white",
    paddingLeft: "630px",
  };
