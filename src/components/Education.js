// src/components/Education.js
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { FaUniversity } from 'react-icons/fa';

const educationData = [
  {
    degree: 'M.Sc. Artificial Intelligence',
    school: 'Central University of South Bihar, Gaya',
    year: '2023 – 2025',
  },
  {
    degree: 'B.Sc. Information Technology (71%)',
    school: 'Kisan College, Nalanda',
    year: '2020 – 2023',
  },
  {
    degree: '12th (75%)',
    school: 'K.S. T College, Nalanda',
    year: '2018 – 2020',
  },
  {
    degree: '10th (60%)',
    school: 'Manas Bhumi Sr. Sec. School, Nalanda',
    year: '2017 – 2018',
  },
];

function Education() {
  return (
    <section id="education" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Education</h2>
        <Row className="g-4 justify-content-center">
          {educationData.map((edu, index) => (
            <Col md={6} key={index}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <FaUniversity size={24} className="me-3 text-primary" />
                    <div>
                      <Card.Title className="mb-0">{edu.degree}</Card.Title>
                      <Card.Subtitle className="text-muted">{edu.school}</Card.Subtitle>
                    </div>
                  </div>
                  <p className="mb-0">
                    <strong>Year:</strong> {edu.year}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Education;
