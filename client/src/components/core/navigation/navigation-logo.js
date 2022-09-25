import React from "react";
import { Container, Image } from "react-bootstrap";
import { Logo } from "@assets/images";
import { BsHandbag } from "react-icons/bs";

const NavigationLogo = () => {
  return (
    <React.Fragment>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Image src={Logo} width="250px"/>
        <BsHandbag style={{ fontSize: '30px', marginRight: '0' }} />
      </Container>
      {/* <Container fluid  className="d-flex justify-content-end align-items-center">
      <BsHandbag style={{ fontSize: '30px' }} />

      </Container> */}
    </React.Fragment>
  );
};

export default NavigationLogo;
