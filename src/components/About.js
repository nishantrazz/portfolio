// src/components/About.js
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="py-5">
      <Container>
        <h2 className="text-center mb-5">About Me</h2>
        <Row className="align-items-center">
          <Col md={4} className="text-center mb-4 mb-md-0">
            {/* Optional Profile Image */}
            <Image
              src="nishant.jpg"
              roundedCircle
              fluid
              alt="Nishant Raj"
            />
          </Col>
          <Col md={8}>
            <p>
              👋 I'm <strong>Nishant Raj</strong>, a passionate postgraduate student in <strong>Artificial Intelligence</strong> with hands-on experience in building intelligent systems using technologies like <strong>Python</strong>, <strong>Machine Learning</strong>, and <strong>Deep Learning</strong>.
            </p>
            <p>
              I’ve developed full-stack applications using <strong>PHP, MySQL, JavaScript</strong>, and <strong>Bootstrap</strong>, as well as robotics systems using <strong>ROS 2, PX4, MAVROS</strong> in simulation environments like <strong>Gazebo</strong>.
            </p>
            <p>
              During my internship at <strong>CSIR-CEERI</strong>, I worked on advanced AI solutions for UAV path planning and multi-drone formation control.
            </p>
            <p>
              I’m always eager to learn, solve real-world problems, and contribute to impactful tech projects in AI, software development, and robotics.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
