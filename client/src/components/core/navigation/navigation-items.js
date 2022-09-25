import React from "react";
import { Container, Form } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { MAIN_LINKS } from "@constants";
 
const NavigationItems = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
    >
      {MAIN_LINKS.map((items, id) => (
        <Link key={id} to={items.route} className="hh-link text-decoration-none text-dark mx-4 my-3" style={{fontSize: '.8rem'}}>{items.name.toUpperCase()}</Link>
      ))}
    </Container>
  );
};

export default NavigationItems;
