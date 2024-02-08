import React, { useState } from "react";
import { Container, Image, Offcanvas, Form } from "react-bootstrap";
import { Logo } from "@assets/images";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate, Link } from "react-router-dom";
import { MAIN_LINKS } from "@constants";
import { BsHandbag } from "react-icons/bs";

const NavigationItems = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
    >
      <AiOutlineMenu
        className="menu-icon"
        onClick={handleShow}
        style={{ fontSize: "30px", display: "none" }}
      />
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Image
              src={Logo}
              width="250px"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
              }}
            />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {MAIN_LINKS.map((items, id) => (
            <Link
              key={id}
              to={items.route}
              className="hh-link-mobile text-decoration-none text-dark mx-4 my-3 d-flex flex-column"
              style={{ fontSize: ".8rem" }}
            >
              {items.name.toUpperCase()}
            </Link>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
      <Image
        src={Logo}
        width="250px"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      />

      {MAIN_LINKS.map((items, id) => (
        <Link
          key={id}
          to={items.route}
          className="hh-link text-decoration-none text-dark mx-4 my-3"
          style={{ fontSize: ".8rem" }}
        >
          {items.name.toUpperCase()}
        </Link>
      ))}
      <BsHandbag
        style={{ cursor: "pointer", marginLeft: "10px" }}
        onClick={() => {
          navigate("/cart");
        }}
      />
    </Container>
  );
};

export default NavigationItems;
