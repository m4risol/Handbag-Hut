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
} from "react-bootstrap";

const Cart = () => {
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
        <h1>Shopping Cart</h1>
        </Col>
      </Row>
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
        <Container className="text-right">
          <h2>Total: ${total.toFixed(2)}</h2>
          <Button>Checkout</Button>
        </Container>
      </Row>
    </Container>
  );
};

export default Cart;
