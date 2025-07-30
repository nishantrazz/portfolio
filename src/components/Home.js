// src/components/Home.js
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';

function Home() {
  return (
    <section
      id="home"
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        height: '100vh',
        background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        color: 'white',
      }}
    >
      <Container>
        <h1 className="display-4 fw-bold">Hi, I'm Nishant Raj</h1>
        <h3 className="mb-4">
          <Typewriter
            words={[
              'AI/ML Developer',
              'Full-Stack Engineer',
              'Robotics Enthusiast',
              'Problem Solver',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h3>
        <Button href="#projects" variant="outline-light" size="lg">
          View My Work
        </Button>
      </Container>
    </section>
  );
}

export default Home;
