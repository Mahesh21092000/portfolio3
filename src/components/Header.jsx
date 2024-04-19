import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('home')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => {
                                console.log('Clicked on About link');
                                onUpdateActiveLink('about'); // Check if this function updates the activeLink state or variable correctly
                            }}
                        >
                            About
                        </Nav.Link>

                        <Nav.Link
                            href="#skills"
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('contact')}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.instagram.com/mahesh.m_5" target="_blank" rel="noopener noreferrer">
                                <img src="/instagram.jpeg" alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com/in/mahesh-m-767b46210/" target="_blank" rel="noopener noreferrer">
                                <img src="/linkedin.png" alt="linkedin" />
                            </a>
                            <a href="https://api.whatsapp.com/send?phone=8919453437" target="_blank" rel="noopener noreferrer">
                                <img src="/whatsapp.png" alt="WhatsApp" />
                            </a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}>
                            {' '}
                            Let's Connect{' '}
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
