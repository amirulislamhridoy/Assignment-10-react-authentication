import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div>
                <h2>Contact Information</h2>
                <p>Brooklyn, Ny 10036</p>
                <p>example@example.com</p>
                <p>Call Us: +1-800-123-1234</p>
            </div>
            <div>
                <h2>Services</h2>
                <p>Neurology Clinic</p>
                <p>Ophthalmlogy clinical services</p>
                <p>Laryngological clinical services</p>
                <p>Orthopaedic Clinic</p>
                <p>Pulmonary Clinical Services</p>
                <p>Hepatology Clinic</p>
            </div>
            <div>
                <h2>Opening Hours</h2>
                <p>Mon - Thu 7.00 - 20.00</p>
                <p>Friday 700 - 19.00</p>
                <p>Saturday 9.00 - 16.00</p>
                <p>Sunday 9.00 - 13.00</p>
            </div>
        </footer>
    );
};

export default Footer;