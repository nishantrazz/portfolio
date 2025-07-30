// src/components/Contact.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center text-center">
          <Col md={6} lg={4} className="mb-4">
            <FaEnvelope size={30} className="mb-2 text-primary" />
            <p>
              <a href="mailto:nishantraj7479@gmail.com" className="text-decoration-none">
                nishantraj7479@gmail.com
              </a>
            </p>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <FaPhone size={30} className="mb-2 text-primary" />
            <p>
              <a href="tel:+917479747634" className="text-decoration-none">
                +91-7479747634
              </a>
            </p>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <FaGithub size={30} className="mb-2 text-dark" />
            <p>
              <a href="https://github.com/nishantrazz" target="_blank" rel="noreferrer" className="text-decoration-none">
                github.com/nishantrazz
              </a>
            </p>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <FaLinkedin size={30} className="mb-2 text-primary" />
            <p>
              <a href="https://www.linkedin.com/in/nishant-razz/" target="_blank" rel="noreferrer" className="text-decoration-none">
                linkedin.com/in/nishant-razz
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
