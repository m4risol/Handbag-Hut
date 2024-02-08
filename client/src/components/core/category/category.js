import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { getProducts } from "@store/reducers";
import { Loader } from "@components/core";

const Category = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.products);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  // Filter products based on the selected category
  const filteredProducts = products.data.filter(
    (product) => product.category === category
  );

  useEffect(() => {
    if (products.action === "products/fetched") {
      setIsLoading(false);
    }
  }, [products]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <Row>
          {filteredProducts.map((product) => (
            <Col
              key={product.id}
              className="d-flex flex-wrap flex-column justify-content-center align-items-center"
            >
              <Image
                src={`/src/assets/images/${product.image}`}
                style={{ width: "300px", cursor: "pointer" }}
                onClick={() => {
                  navigate(`/bags/${product.id}`);
                }}
              />
              <Form.Label>{product.name}</Form.Label>
              <Form.Label>${product.price}</Form.Label>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Category;
