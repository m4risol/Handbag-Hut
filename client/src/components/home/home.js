import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { HeroImage } from "@assets/images";
import { Products } from "@components/products";

const Home = () => {
  return (
    <React.Fragment>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "600px",
        }}
      >
        <Form.Label className="fw-bold text-light mb-5" style={{fontSize: '5rem'}}>
          SHOP OUR NEWEST ITEMS
        </Form.Label>
        <Button className="hh-button" style={{border: '1px solid white', backgroundColor: 'transparent', padding: '.75rem', borderRadius: '0px'}}>VIEW NEW ARRIVALS</Button>
      </Container>
      <Container fluid>
       <Products/>
      </Container>
    </React.Fragment>
  );
};

export default Home;
