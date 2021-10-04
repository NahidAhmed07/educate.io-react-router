import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Person from "../Person/Person";

// about us componets
const About = () => {
  const [persons, setPerson] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/NahidAhmed07/api/main/person.json")
      .then((res) => res.json())
      .then((data) => setPerson(data));
  }, []);
  return (
    <div
      className=" underline-parent py-5 text-start"
      style={{ minHeight: "100vh" }}
    >
      <Container>
        <h1 className="under-line-text">ABOUTS &nbsp;&nbsp;US</h1>
        <hr className='my-5' />
        <Row xs={1} md={2} lg={3} className='g-4'>
          {persons.map((person) => (
            <Person person={person} key={person.id}></Person>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default About;
