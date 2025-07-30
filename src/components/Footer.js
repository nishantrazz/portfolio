// src/components/Footer.js
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer
      className="text-white text-center py-4"
      style={{
        background: 'linear-gradient(to right, #232526, #414345)',
      }}
    >
      <Container>
        <div className="mb-3">
          <a
            href="https://github.com/nishantrazz"
            target="_blank"
            rel="noreferrer"
            className="text-white mx-3"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/nishant-razz/"
            target="_blank"
            rel="noreferrer"
            className="text-white mx-3"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:nishantraj7479@gmail.com"
            className="text-white mx-3"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
        <small>&copy; {new Date().getFullYear()} Nishant Raj. All Rights Reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;
