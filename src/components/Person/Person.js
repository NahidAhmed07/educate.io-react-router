import React from "react";
import { Col } from "react-bootstrap";

const Person = (props) => {
  const { name, post, img, text } = props?.person;
  return (
    <Col>
      <div class="card p-4" style={{border:"1px solid #d3d3d3"}}>
        <div class="d-flex">
          <img
            class="img-fluid mx-2"
            height="90px"
            width="90px"
            style={{height:'90px'}}
            src={img}
            alt=""
          />
          <div class="d-flex flex-column mt-auto">
            <h5>{name}</h5>
            <p class="text-muted">{post}</p>
          </div>
        </div>
        <p class="mt-4  text-muted fst-italic fs-">
          {text}
        </p>
      </div>
    </Col>
  );
};

export default Person;
