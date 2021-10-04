import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CateItem from '../CateItem/CateItem';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.log(err));
  },[])
  return (
    <section className="underline-parent py-5">
      <Container>
        <h1 className="under-line-text mb-4">Categories</h1>
        <Row xs={1} md={3} lg={4} className='mt-4'>
          
        </Row>
      </Container>
    </section>
  );
};

export default Categories;