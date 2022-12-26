import storeItems from "../data/items.json";
import { Row, Col, Container } from "react-bootstrap";
import StoreItem from "../components/StoreItem";

export default function Store() {
  return (
    <Container>
      <br/><br/>
      <Row md={2} xs={1} lg={3} className="g-4">
        {storeItems.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem {...item} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
