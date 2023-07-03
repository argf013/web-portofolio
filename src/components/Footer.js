import React from "react";
import "../styles/Footer.css";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import instagram from "../assets/icons/instagram.svg";

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan logika untuk mengirim data form atau tindakan lainnya
    };

    return (
        <footer className="footer">
            <div className="footer-header">
                <h1 className="yeah">Contact me for collaboration and <br/>
                speaking engagement opportunities!</h1>
            </div>
            <div className="footer-content">


                <div className="footer-social-media">
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    <img src={github} alt="github"/>
                    </a>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin"/>
                    </a>
                    <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="instagram"/>
                    </a>
                </div>
                <div className="footer-contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" id="name" name="name" required placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" required placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <input type="tel" id="phone" name="phone" required placeholder="Phone"/>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Type your message here.." id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
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
