import React, { useEffect, useState } from "react";
import { Form, Image, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@store/reducers";
//import { data } from "@constants";
//import { useNavigate } from "react-router-dom";

const Products = () => {
 // const navigate = useNavigate();
 const dispatch = useDispatch();
 const products = useSelector((state) => state.products);
 const { data } = products;
  //const [products, setProducts] = useState([]);

  useEffect(() => {
    dispatch(getProducts())
    console.log(data)
  }, []);

  return (
    <React.Fragment>
      <Row className="g-4 py-5 row-cols-1 row-cols-lg-3">
        {data && data.map((items) => (
          <Col key={items.id} className="d-flex flex-wrap flex-column justify-content-center align-items-center">
            <Image
              src={`/src/assets/images/${items.image}`}
              style={{ width: "300px", cursor: "pointer" }}
              className=""
              onClick={() => {
                navigate(`/product/${items._id}`);
              }}
            />
            <Form.Label className="">{items.name}</Form.Label>
            <Form.Label className="">${items.price}</Form.Label>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default Products;
