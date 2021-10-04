import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero-container">
      <Container>
        <Row>
          <Col>
            <div className="hero-text col-lg-6 text-start">
              {/* hero heading  */}
              <h1 className="display-5 ">
                Education is about creating leaders for tomorrow.
              </h1>
              {/* hero text  */}
              <p className=" d-none d-md-block">
                Here is a catalog of education slogans that capture the
                importance and value of knowledge. These come from a variety of
                educational institutions and existing people who use these
                slogans to encourage a thirst for learning.
              </p>
              <div className="text-start">
                <Button variant='primary'>Get Started</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;