import React from 'react';

const SocialMediaLinks = ({ links }) => {
  return (
    <div className="footer-social-media">
      {links.map((link, index) => (
        <a href={link.url} target="_blank" rel="noopener noreferrer" key={index}>
          <img src={link.icon} alt={link.alt} />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
