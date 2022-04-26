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
                <p>Neurology</p>
                <p>Ophthalmlogy</p>
                <p>Laryngological</p>
                <p>Orthopaedic</p>
                <p>Pulmonary</p>
                <p>Hepatology</p>
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