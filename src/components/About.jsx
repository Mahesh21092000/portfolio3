import React from 'react';
import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <Row className="about">
            <Col xs={12} md={6} className="about-img">
                <img src="/mahesh-3.jpg" alt="mahesh" />
            </Col>
            <Col xs={12} md={6} className="about-text">
                <div className="animate__animated animate__fadeInRight">
                    <h1>About Me</h1>
                    <h3>Front-End Developer</h3>
                    <p>
                        Hey, I'm Mahesh—a frontend developer with a year of experience crafting engaging websites and dynamic web applications. Proficient
                        in HTML, CSS, JavaScript, and React.js, I'm passionate about creating seamless user experiences across all devices. Currently
                        diving into backend development,
                    </p>
                    <p>
                        I'm excited to expand my skills and unlock new possibilities. Explore my portfolio and let's build something remarkable together!
                        Beyond my technical skills, I bring a collaborative spirit and a commitment to excellence to every project. I thrive in team
                        environments, where I can contribute my expertise and learn from others, fostering innovation and achieving exceptional results.
                    </p>
                    <a href="#" className="btn-box">More About Me</a>
                </div>
            </Col>
        </Row>
    );
}

export default About;
