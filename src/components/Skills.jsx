import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Col, Container, Row} from 'react-bootstrap'

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='skill' id='skills'>
      <Container>
      <Row>
        <Col>
        <div className='skill-bx'>
          <h2>Skills</h2>
          <p>In these days, I have gained a lot of skills in web development and have gained experience in creating webpages. I also have good knowledge of these skills and would be willing to rate my proficiency.</p>
          <Carousel responsive={responsive} infinite={true} className='skill-slider'>
            <div className='item'>
              <img src="/meter1.svg" alt="" />
              <h5>HTML 5</h5>
            </div>
            <div className='item'>
              <img src="/meter2.svg" alt="" />
              <h5>CSS 3</h5>
            </div>
            <div className='item'>
              <img src="/meter3.svg" alt="" />
              <h5>JAVASCRIPT</h5>
            </div>
            <div className='item'>
              <img src="/meter2.svg" alt="" />
              <h5>JQUARY</h5>
            </div>
            <div className='item'>
              <img src="/meter2.svg" alt="" />
              <h5>REACT JS</h5>
            </div>
            <div className='item'>
              <img src="/meter2.svg" alt="" />
              <h5>NODE JS</h5>
            </div>
          </Carousel>

        </div>
        </Col>
      </Row>
      </Container>
      <img className='background-image-left' src="/color-sharp.png" alt="" />

    </div>
  )
}

export default Skills