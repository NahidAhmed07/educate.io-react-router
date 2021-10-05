import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Hero/Hero.css';

const NotFound = () => {
  return (
    <div className="not-found container-fluid">
      <Container>
        <div >
          <Row>
            <Col>
              <img
                
                className='img-fluid'
                height='90vh'
                src="https://assets.materialup.com/uploads/c13818e8-9e42-4f4d-b657-38743a81b270/preview.gif"
                alt=""
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;