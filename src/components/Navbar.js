// src/components/Navbar.js
import React from 'react';
import { Navbar as BSNavbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ toggleDarkMode, darkMode }) {
  const navItems = ['home', 'about', 'skills', 'projects', 'education', 'contact'];

  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      className={`py-3 shadow-sm ${darkMode ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}
    >
      <Container>
        <BSNavbar.Brand className="fw-bold" href="#">
          Nishant Raj
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                className="nav-link text-capitalize"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item}
              </Link>
            ))}

            <a
              className="nav-link"
              href="/NISHANT_RAJ_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Resume
            </a>

            <span
              className="nav-link"
              style={{ cursor: 'pointer' }}
              onClick={toggleDarkMode}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </span>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;
