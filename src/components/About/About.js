import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Person from '../Person/Person';


// about us componets 
const About = () => {
  return (
    <div
      className=" underline-parent py-5 text-start"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <h1 className="under-line-text">ABOUTS &nbsp;&nbsp;US</h1>
        <hr />
        <Row xs={1} md={2} lg={3}>
          <Person></Person>
          <Person></Person>
          <Person></Person>
        </Row>
      </Container>
    </div>
  );
};

export default About;