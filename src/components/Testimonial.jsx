import React from 'react'
import { Container, Row, Col } from "react-bootstrap";


function Testimonial() {

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
      
          <Col size={12} sm={6}>
            <img src='/logo.svg' alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mahesh-m-767b46210/" target="_blank" ><img src='/nav-icon1.svg' alt="Icon" /></a>
              <a href="#"><img src='/nav-icon2.svg' alt="Icon" /></a>
              <a href="https://www.instagram.com/mahesh.m_5" target="_blank" ><img src='/nav-icon3.svg' alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Testimonial 