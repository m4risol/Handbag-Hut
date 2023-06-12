import React from "react";
import { Container, Form, Button, Image } from "react-bootstrap";
import { HeroImage, Purses } from "@assets/images";
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
        <Form.Label
          className="fw-bold text-light mb-5"
          style={{ fontSize: "5rem" }}
        >
          Discover Your Perfect Style
        </Form.Label>
        <Button
          className="hh-button"
          style={{
            border: "1px solid white",
            backgroundColor: "white",
            color: "black",
            padding: ".75rem",
            borderRadius: "0px",
          }}
        >
          Shop New Arrivals
        </Button>
      </Container>
      <Form.Label className="mt-5 d-flex justify-content-center align-items-center text-center h2">
        Top Categories
      </Form.Label>
      <Container className="d-flex flex-wrap justify-content-center align-items-center mt-5">
        {[
          { image: "girl1", text: "Satchels" },
          { image: "girl2", text: "Totes" },
          { image: "girl3", text: "Cross Bodies" },
        ].map((item, index) => (
          <Container
            key={index}
            style={{
              position: "relative",
              width: "300px",
              cursor: "pointer",
              margin: "2rem",
            }}
          >
            <Image
              src={`/src/assets/images/${item.image}.png`}
              style={{ cursor: "pointer", width: "100%", height: "100%" }}
            />
            <Container
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <Form.Label
                className="h3"
                style={{ margin: 0, cursor: "pointer" }}
              >
                {item.text}
              </Form.Label>
            </Container>
          </Container>
        ))}
      </Container>
      <Container
        fluid
        className="d-flex flex-column justify-content-center align-items-center text-center mt-5"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Purses})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "400px",
        }}
      >
        <Form.Label
          className="fw-bold text-light mb-3"
          style={{ fontSize: "3rem" }}
        >
         Introducing Our Latest Collection: Fashion Forward
        </Form.Label>
        <Form.Label className="text-light mx-5 mb-3">
          Be the trendsetter with our brand new collection of fashion-forward
          purses. Designed to captivate and inspire, our latest arrivals feature
          contemporary styles and innovative designs. From vibrant colors to
          bold patterns, each piece exudes confidence and sophistication.
          Explore our new collection and stay ahead of the fashion curve.
        </Form.Label>
        <Button
          className="hh-button"
          style={{
            border: "1px solid white",
            backgroundColor: "white",
            color: "black",
            padding: ".75rem",
            borderRadius: "0px",
          }}
        >
          Explore Collection
        </Button>
      </Container>
      <Container fluid>
        <Form.Label className="mt-5 d-flex justify-content-center align-items-center text-center h2">
          What's Trending Now
        </Form.Label>
        <Products />
      </Container>
    </React.Fragment>
  );
};

export default Home;
