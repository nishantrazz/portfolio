// src/components/Skills.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaPython, FaPhp, FaHtml5, FaCss3Alt, FaReact, FaJsSquare,
  FaDatabase, FaRobot, FaGitAlt, FaBootstrap
} from 'react-icons/fa';

const skillList = [
  { name: 'Python', icon: <FaPython size={40} color="#306998" /> },
  { name: 'PHP', icon: <FaPhp size={40} color="#8892be" /> },
  { name: 'HTML5', icon: <FaHtml5 size={40} color="#e34c26" /> },
  { name: 'CSS3', icon: <FaCss3Alt size={40} color="#264de4" /> },
  { name: 'JavaScript', icon: <FaJsSquare size={40} color="#f7df1e" /> },
  { name: 'React', icon: <FaReact size={40} color="#61DBFB" /> },
  { name: 'Bootstrap', icon: <FaBootstrap size={40} color="#563d7c" /> },
  { name: 'MySQL', icon: <FaDatabase size={40} color="#f29111" /> },
  { name: 'ROS 2 & PX4', icon: <FaRobot size={40} color="#999" /> },
  { name: 'Git & VS Code', icon: <FaGitAlt size={40} color="#f1502f" /> },
];

function Skills() {
  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Skills & Tools</h2>
        <Row className="g-4 justify-content-center">
          {skillList.map((skill, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <Card className="text-center shadow-sm border-0 h-100">
                <Card.Body>
                  <div className="mb-3">{skill.icon}</div>
                  <Card.Title>{skill.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
