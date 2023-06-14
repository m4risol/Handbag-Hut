import React from "react";
import { useSelector } from "react-redux";
import {
  Container,
  ListGroup,
  Button,
  Row,
  Col,
  Image,
  Table,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <Container className="p-5">
      <Row>
        <Col className="d-flex justify-content-center">
          <h1>Your Cart</h1>
        </Col>
      </Row>
      {items.length > 0 ? (
        <React.Fragment>
          <Row>
            <Table responsive className="border-collapse">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr>
                    <td>
                      <Image
                        src={`/src/assets/images/${item?.image}`}
                        style={{ width: "95px" }}
                      />
                      <span>{item.name}</span>
                    </td>
                    <td>
                      <span>${item.price}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Row>
          <Row>
            <Container>
              <h2>Total: ${total.toFixed(2)}</h2>
              <Button>Checkout</Button>
            </Container>
          </Row>
        </React.Fragment>
      ) : (
        <Container className="d-flex justify-content-center align-items-center flex-column mt-5 py-2">
          <Form.Label className="mb-4">YOUR CART IS CURRENTLY EMPTY.</Form.Label>
          <Button
            variant="dark"
            className="mb-4"
            onClick={() => {
              navigate("/");
            }}
          >
            Continue Shopping
          </Button>
        </Container>
      )}
    </Container>
  );
};

export default Cart;
