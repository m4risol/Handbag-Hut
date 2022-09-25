import React from "react";
import { Container, Form } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Container
      fluid
      className="w-100 d-flex justify-content-center align-items-center"
      style={{ height: "45px", backgroundColor: 'black' }}
    >
      <Form.Label className="text-white mt-1" style={{fontSize: '13px'}}>
        FREE SHIPPING IN USA ON ORDERS $150+
      </Form.Label>
    </Container>
  );
};

export default NavigationBar;
