import React from "react";
import { Col } from "react-bootstrap";

const Person = () => {
  return (
    <Col>
      <div class="card p-4">
        <div class="d-flex">
          <img
            class="img-fluid mx-2"
            height="90px"
            width="90px"
            src="./assets/img/testimonials/testimonials-1.jpg"
            alt=""
          />
          <div class="d-flex flex-column mt-auto">
            <h5>Saul Goodman</h5>
            <p class="text-muted">CEO &amp; Founder</p>
          </div>
        </div>
        <p class="mt-4  text-muted fst-italic fs-">
          Export tempor illum tamen malis malis eram quae irure esse labore quem
          cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua
          noster fugiat irure amet legam anim culpa.
        </p>
      </div>
    </Col>
  );
};

export default Person;
