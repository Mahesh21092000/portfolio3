import React from 'react';
import TrackVisibility from 'react-on-screen';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';

function Projects() {
    // const projects = [
    //   {
    //     title: "Business Startup",
    //     description: "Design & Development",
    //     imgUrl: '/project-img1.png',
    //   },
    //   {
    //     title: "Business Startup",
    //     description: "Design & Development",
    //     imgUrl: '/project-img2.png',
    //   },
    //   {
    //     title: "Business Startup",
    //     description: "Design & Development",
    //     imgUrl: '/project-img3.png',
    //   },
    //   {
    //     title: "Business Startup",
    //     description: "Design & Development",
    //     imgUrl: '/project-img1.png',
    //   },
    //   {
    //     title: "Business Startup",
    //     description: "Design & Development",
    //     imgUrl: '/project-img2.png',
    //   },
    //   {
    //     title: "Business Startup",
    //     description: "Design & Development",
    //     imgUrl: '/project-img3.png',
    //   },
    // ];

    return (
        <div className="projects">
            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col>
                            <TrackVisibility>
                                {({ isVisible }) => (
                                    <div className={isVisible ? 'animate__animated animate__fadeIn' : ''}>
                                        <h2>Projects</h2>
                                        <p>I have completed some projects. These are my projects, and while creating them, I gained a lot of knowledge.</p>
                                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                                                <Tab.Pane eventKey="first">
                                                    <Row className="projects-list">
                                                        <Col xs={12} sm={6} md={4}>
                                                            <div className="proj-imgbx">
                                                                <img src="/project-img-1.png" alt="project1" />
                                                                <div className="proj-txtx">
                                                                    <h4>Weather-app</h4>
                                                                    <span>Design & Development</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={12} sm={6} md={4}>
                                                            <div className="proj-imgbx">
                                                                <img src="/project-img-2.png" alt="project1" />
                                                                <div className="proj-txtx">
                                                                    <h4>Travelopia</h4>
                                                                    <span>Design & Development & Responsive</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={12} sm={6} md={4}>
                                                            <div className="proj-imgbx">
                                                                <img src="/project-img-3.png" alt="project1" />
                                                                <div className="proj-txtx">
                                                                    <h4>Shopper</h4>
                                                                    <span>Design & Development</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={12} sm={6} md={4}>
                                                            <div className="proj-imgbx">
                                                                <img src="/project-img3.png" alt="project1" />
                                                                <div className="proj-txtx">
                                                                    <h4>Boost Up</h4>
                                                                    <span>Design & Development</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={12} sm={6} md={4}>
                                                            <div className="proj-imgbx">
                                                                <img src="/project-img2.png" alt="project1" />
                                                                <div className="proj-txtx">
                                                                    <h4>Your Logo</h4>
                                                                    <span>Design & Development</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                        <Col xs={12} sm={6} md={4}>
                                                            <div className="proj-imgbx">
                                                                <img src="/project-img1.png" alt="project1" />
                                                                <div className="proj-txtx">
                                                                    <h4>Travell</h4>
                                                                    <span>Design & Development</span>
                                                                </div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="section">
                                                    <div className="proj-imgbx">
                                                        <img src="/project-img-4.png" alt="project1" />
                                                        <div className="proj-txtx">
                                                            <h4>Catelix</h4>
                                                            <span>Design & Development</span>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>
                                                <Tab.Pane eventKey="third">
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                )}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image-right" src="/color-sharp2.png" alt="Background" />
            </section>
        </div>
    );
}

export default Projects;
