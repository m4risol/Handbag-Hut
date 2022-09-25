import React from "react";
import { Form, Image, Row, Col, Button } from "react-bootstrap";
import { data } from "@constants";
import { useParams } from "react-router-dom";

const Product = (props) => {
const params = useParams();
const { id } = params;

  return (
    <React.Fragment>
      <Row>
          <Col>Image</Col>
          <Col className="d-flex flex-column">
          <Form.Label>{product.name}</Form.Label>
          <Form.Label>$35.99</Form.Label>
          <Form.Label>Description:</Form.Label>
          <Button>ADD TO BAG</Button>
          </Col>
      </Row>
    </React.Fragment>
  );
};

export default Product;
