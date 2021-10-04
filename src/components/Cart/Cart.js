import React, { useContext } from 'react';
import { Container, Row } from 'react-bootstrap';
import { CartContext } from '../../App';
import { removeFromDB } from '../../utilites/dataBase';
import ServicesItem from '../ServicesItem/ServicesItem';

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  // remove item from cart handelar funtion 
  const removeHandelar = id => {
    removeFromDB(id);
    const newCard = cart.filter(cartItem => cartItem?.id !== id);
    setCart(newCard);
  }
  const total = cart.reduce((pre, cartItem) => pre + cartItem?.price ,0) // calculate totoa cost with array Reduce mathod
  return (
    <section className="container-fluid" style={{ minHeight: "100vh" }}>
      <Container>
        {/* Heading  */}
        <h2 className="py-4">Added Courses</h2>
        <div className="d-flex justify-content-evenly">
          <h5>Total Added Course : {cart.length}</h5>
          <h5>Total Cost : ${total}</h5>
        </div>
        <hr className="mb-4" />
        <Row xs={1} md={2} lg={3} className="g-5 pb-5">
          {cart.map((service) => (
            <ServicesItem service={service} key={service.id}>
              <button
                className="btn-unfill"
                onClick={() => removeHandelar(service.id)}
              >
                {" "}
                Remove
              </button>
            </ServicesItem>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Cart;