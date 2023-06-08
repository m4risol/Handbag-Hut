import React, { useEffect, useState } from "react";
import { Form, Image, Row, Col, Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, addToCart } from "@store/reducers";
import { Loader } from '@components/core';

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.product);
  const { data } = product;

  const [isLoading, setIsLoading] = useState(true);

  const productId = params.id;

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch]);

  useEffect(() => {
    if (product.action === "product/fetched") {
      setIsLoading(false);
    }
  }, [product]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Row className="d-flex justify-content-center align-items-center flex-wrap">
          <Col xs={6}>
            <Image
              src={`/src/assets/images/${data?.image}`}
              style={{ width: "300px" }}
            />
          </Col>
          <Col className="d-flex flex-column" xs={6}>
            <Form.Label>{data?.name}</Form.Label>
            <Form.Label>${data?.price}</Form.Label>
            <Form.Label>Description: {data?.description}</Form.Label>
            <Button
              onClick={() => {
                dispatch(addToCart(data));
              }}
            >
              ADD TO BAG
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Product;
