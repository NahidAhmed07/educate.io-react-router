import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        {/* footer sicial icons */}

        <div className="d-flex justify-content-evenly align-items-center mt-4">
          {/* footer text  */}
          <div className="d-flex align-items-center">
            <h4 className="border-end pe-4 me-4">Educate.io</h4>
            <p>All &copy;copyRight Reverse </p>
          </div>
          <div className="icon-div d-none d-md-block">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-twitter-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-instagram-square"></i>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;