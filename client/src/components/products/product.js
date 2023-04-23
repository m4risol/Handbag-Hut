import React, { useEffect } from "react";
import { Form, Image, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, addToCart } from "@store/reducers";

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
  const { data } = product;

  const productId = params.id;

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch]);

  return (
    <React.Fragment>
      <Row>
        <Col>
          <Image
            src={`/src/assets/images/${data?.image}`}
            style={{ width: "300px" }}
          />
        </Col>
        <Col className="d-flex flex-column">
          <Form.Label>{data?.name}</Form.Label>
          <Form.Label>${data?.price}</Form.Label>
          <Form.Label>Description: {data?.description}</Form.Label>
          <Button onClick={()=> {
            dispatch(addToCart(data))
          }}>ADD TO BAG</Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Product;
