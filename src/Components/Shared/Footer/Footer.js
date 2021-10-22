import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
        <small class="footer-copy"> copyright © {new Date().getFullYear()} - volunteer network </small>
    </div>
    );
};

export default Footer;