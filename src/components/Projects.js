// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const projects = [
  {
    title: 'Software Freedom Day Website',
    description: 'A responsive PHP-based website using HTML, CSS, and Bootstrap to promote open-source initiatives.',
    link: 'https://github.com/nishantrazz/software-freedom-day.git',
  },
  {
    title: 'Big Data Hadoop Project',
    description: 'Large-scale data processing using HDFS and MapReduce. Focused on big data computation and efficiency.',
  },
  {
    title: 'College Syllabus App',
    description: 'Android app for student syllabus access with Firebase-based login and storage.',
  },
  {
    title: 'Secure Login & Signup System',
    description: 'User auth system with email verification using PHPMailer, PHP backend, and MySQL database.',
    link: 'https://github.com/nishantrazz/login-and-signup-page-usingphp.git',
  },
  {
    title: 'Audio to Text Converter',
    description: 'Tkinter Python app using SpeechRecognition to convert audio files (.mp3/.wav) to text with high accuracy.',
    link: 'https://github.com/nishantrazz/Python-Assignment.git',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row className="g-4">
          {projects.map((project, index) => (
            <Col sm={12} md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm border-0 hover-shadow">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  {project.link && (
                    <Button
                      variant="primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
