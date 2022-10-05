import React from "react";
import { Container, Col, Row, Image, Form, Button } from "react-bootstrap";
import { LogoWhite } from "@assets/images";
import { MAIN_LINKS, EXPLORE_LINKS } from "@constants";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <React.Fragment>
      <Container fluid className="footer" style={{ backgroundColor: "black" }}>
        <Row className="p-5">
          <Col>
            <Image src={LogoWhite} alt="logo-white" width="200px"/>
          </Col>
          <Col>
            {/* <Link key={id} to={items.route} className="hh-link text-decoration-none text-dark mx-4 my-3">{items.name.toUpperCase()}</Link> */}
            <ul className="list-unstyled">
              <Form.Label className="text-white">SHOP</Form.Label>
              {MAIN_LINKS.map((items, id) => (
                <li key={id}>
                  <Link
                    to={items.route}
                    className="text-decoration-none text-secondary"
                    style={{ fontSize: ".75rem" }}
                  >
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col>
            <ul className="list-unstyled">
              <Form.Label className="text-white">EXPLORE</Form.Label>
              {EXPLORE_LINKS.map((items, id) => (
                <li key={id}>
                  <Link
                    to="/"
                    className="text-decoration-none text-secondary"
                    style={{ fontSize: ".75rem" }}
                  >
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col>
            <Form.Label className="text-white">
              SUBSCRIBE FOR DISCOUNTS
            </Form.Label>
            <Form.Control placeholder="Enter Email Address" style={{borderRadius: '0px'}}></Form.Control>
            <Button
              className="hh-button mt-3"
              style={{
                border: "1px solid white",
                backgroundColor: "transparent",
                padding: ".5rem",
                borderRadius: "0px",
                fontSize: "1rem",
              }}
            >
              SIGN UP
            </Button>
          </Col>
        </Row>
      </Container>
      <Container
        fluid
        style={{ backgroundColor: "black", textAlign: "center" }}
      >
        <Form.Label className="text-secondary" style={{ fontSize: ".75rem" }}>
          &copy; 2022 The Handbag Hut. All rights reserved.
        </Form.Label>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
