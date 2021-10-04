import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <section className=" contact-main py-5 underline-parent">
      <Container>
        <h1 className="under-line-text">Contact &nbsp;us</h1>
        <hr className="my-4" />

        <Row className="my-5">
          <Col xs={12} lg={6}>
            <Row className="g-4">
              {/* for Address part  */}
              <Col xs={12} className="text-center">
                <div className="shadow-sm p-3">
                  <i className="fas fa-2x pm-color fa-map-marker-alt"></i>
                  <h5 className="text-muted my-3">Our Address</h5>
                  <p className="text-muted fs-6">
                    A108 Adam Street, New York, NY 535022
                  </p>
                </div>
              </Col>
              {/* for Email part  */}
              <Col xs={6}>
                <div className="text-center shadow-sm p-3 text-muted">
                  <i
                    className="fa fa-2x pm-color fa-envelope"
                    aria-hidden="true"
                  ></i>
                  <h5 className="my-2">Email Us</h5>
                  <p className="my-1">info@example.com</p>
                  <p className="m-0 "> contact@example.com</p>
                </div>
              </Col>
              {/* for phone number part  */}
              <Col xs={6}>
                <div className="text-center shadow-sm text-muted p-3">
                  <i className="fas fa-2x pm-color fa-phone-volume"></i>
                  <h5 className="my-2">Call Us</h5>
                  <p className="my-1">+1 5589 55488 55</p>
                  <p className="m-0 "> +1 6678 254445 41</p>
                </div>
              </Col>
            </Row>
          </Col>
          {/* contact form start here  */}
          <Col xs={12} lg={6} className="shadow-sm">
            <form action="">
              <Row>
                {/* name Field  */}
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    aria-label="First name"
                  />
                </Col>
                {/* email field  */}
                <Col>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email"
                    aria-label="Last name"
                  />
                </Col>
              </Row>
              {/* subject field  */}
              <input
                type="text"
                className="form-control my-4"
                placeholder="Subject"
                aria-label="Last name"
              />
              {/* message textarea field  */}
              <textarea
                className="form-control"
                placeholder="Comment text."
                              rows="4"
                              value=""
              >
                Message
              </textarea>
              <div className="text-center">
                {/* submit button  */}
                <a href="#home" className="btn btn-outline-success  mt-4 ">
                  Send message
                </a>
              </div>
            </form>
          </Col>
          {/* contact form end here  */}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
