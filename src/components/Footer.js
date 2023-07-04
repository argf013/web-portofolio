import React, { useState } from "react";
import "../styles/Footer.css";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import SocialMediaLinks from "./SocialLink";

const Footer = () => {
    const [loading, setLoading] = useState(false);

    const socialMediaLinks = [
        { url: 'https://github.com/argf013', icon: github, alt: 'GitHub' },
        { url: 'https://www.linkedin.com/in/muhamad-arfa-alghiffari-706419208/', icon: linkedin, alt: 'LinkedIn' },
        { url: 'https://instagram.com/argf.cdr', icon: instagram, alt: 'Instagram' },
      ];

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_f52xfs9', 'template_f3wo2mf', e.target, 'VkJiKLqOqbakGdsbO')
            .then((result) => {
                console.log('SUCCESS!', result.status, result.text);
                Swal.fire({
                    title: 'Thank you!',
                    text: 'Your message has been sent.',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                e.target.reset();
            })
            .catch((error) => {
                console.log('FAILED...', error);
                Swal.fire({
                    title: 'Oops!',
                    text: 'Something went wrong. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            })
            .finally(() => {
                setLoading(false);
            });

    };

    return (
        <footer className="footer">
            <div className="footer-header">
                <h1 className="yeah">Contact me for collaboration and <br />
                    speaking engagement opportunities!</h1>
            </div>
            <div className="footer-content">


            <SocialMediaLinks links={socialMediaLinks} />
                <div className="footer-contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" id="name" name="name" required placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" required placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <input type="tel" id="phone" name="phone" required placeholder="Phone" />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Type your message here.." id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit" disabled={loading}>{loading ? 'Sending' : 'Submit'}</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2023 <a href="https://github.com/argf013" target="_blank" rel="noopener noreferrer" className="footer-link">Arfa</a> - All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
