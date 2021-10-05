import React, { useContext } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { CartContext } from "../../App";
import ServicesItem from "../ServicesItem/ServicesItem";
import { addToDataBase, getDB } from "../../utilites/dataBase";
import useServises from "../../Hooks/useServises";
import { NavLink } from "react-router-dom";

const Services = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const [services] = useServises();

  const { array } = props;

  const purchesHandelar = (service) => {
    const keys = Object.keys(getDB());
    if (!keys.includes(service.id)) {
      addToDataBase(service.id);
      setCart([...cart,service]);
    } else {
      alert("Course alreday added");
    }
  };

  return (
    <section
      className=" container-fluid"
      style={{ backgroundAttachment: "fixed" }}
    >
      <Container className="py-5 underline-parent">
        <h2 className="mb-5 under-line-text">Our Services</h2>

        <Row xs={1} md={2} lg={3} className="g-3">
          {/* map array for displaying all Services card  */}
          {(services.length > 0)
            ? array?.map((item) => {
                const service = services[item];
                return (
                  <ServicesItem service={service} key={service?.id}>
                    {/* child buttton  */}
                    <button
                      className="btn-unfill"
                      onClick={() => purchesHandelar(service)}
                    >
                      Purches 
                    </button>
                  </ServicesItem>
                );
              })
            : ""}

          <Col>
            <div className="d-flex h-100 align-items-end">
              <NavLink to="/services">
                <button className='btn-fill mb-3'>See more...</button>
              </NavLink>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
