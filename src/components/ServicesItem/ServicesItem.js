import React, { useContext } from "react";
import "./ServiceItem.css";
import { Card, Col, Button } from "react-bootstrap";
import { CartContext } from "../../App";



const ServicesItem = (props) => {
  

  const {
    name,
    inrolled,
    title,
    duration,
    lecturer,
    level,
    mentorName,
    mentorImg,
    courseImg,
    price,
    id,
  } = props?.service;
  return (
    <Col>
      <Card className="text-start h-100 card-main"  style={{width:'21rem'}} >
        <Card.Img variant="top" src={courseImg} />
        <Card.Body>
          <div className="d-flex text-black justify-content-between">
            <p className="pm-color">{name}</p>
            <p>
              <strong>{inrolled}</strong> <small>Enrolled</small>
            </p>
          </div>
          <h6 className="text-dark">{title}</h6>
          {/* cart informain and duration  */}
          <div className="d-flex text-dark justify-content-evenly">
            <p>
              <i className="far fa-clock text-danger me-2"></i>
              <span className="text-muted">{duration}</span>
            </p>
            <p>
              <i className="fas fa-video pm-color me-2"></i>
              <span className="text-muted">{lecturer} Lectures</span>
            </p>
            
          </div>

          {/* card mentor image and price  */}
          <div className="d-flex justify-content-between">
            <p>
              <img className="mentor-avatar" src={mentorImg} alt="" />
              {mentorName}
            </p>
            <h4>
              $<span className="pm-color">{price}</span>
            </h4>
          </div>

          {/* Cart button  */}
          <div className="d-flex justify-content-evenly">
            <button className='btn-fill'> More details...</button>
            {props.children}
            
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServicesItem;
