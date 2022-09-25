import React, { useEffect, useState } from "react";
import { Form, Image, Row, Col } from "react-bootstrap";
//import { data } from "@constants";
//import { useNavigate } from "react-router-dom";

const Products = () => {
 // const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/bags')
      .then((res) => res.clone().json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <React.Fragment>
      <Row className="g-4 py-5 row-cols-1 row-cols-lg-3">
        {products.map((items) => (
          <Col className="d-flex flex-wrap flex-column justify-content-center align-items-center">
            {/* <Image
              src={items.image}
              style={{ width: "300px", cursor: "pointer" }}
              className=""
              onClick={() => {
                navigate(`/product/${items._id}`);
              }}
            /> */}
            <Form.Label className="">{items.name}</Form.Label>
            <Form.Label className="">${items.price}</Form.Label>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Products;
