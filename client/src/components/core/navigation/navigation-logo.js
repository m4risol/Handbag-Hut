import React from "react";
import { Container, Image } from "react-bootstrap";
import { Logo } from "@assets/images";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavigationLogo = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Image
          src={Logo}
          width="250px"
          style={{cursor: 'pointer'}}
          onClick={() => {
            navigate("/");
          }}
        />
        <AiOutlineMenu
          className="menu-icon"
          style={{ fontSize: "30px", display: "none" }}
        />
      </Container>
      {/* <Container fluid  className="d-flex justify-content-end align-items-center">
      <BsHandbag style={{ fontSize: '30px' }} />

      </Container> */}
    </React.Fragment>
  );
};

export default NavigationLogo;
