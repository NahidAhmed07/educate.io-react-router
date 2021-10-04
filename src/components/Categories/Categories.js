import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CateItem from '../CateItem/CateItem';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NahidAhmed07/api/main/categories.json"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, [])
  
  return (
    <section className="underline-parent container-fluid py-5">

      <Container>
        <hr />
        <h1 className="under-line-text my-5 pb-3">Categories</h1>
        <Row xs={1} md={2} lg={3} className="mt-4 g-5">
          {categories.map((categorie) => (
            <CateItem
              categorie={categorie}
              key={categorie.id}
            ></CateItem>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Categories;