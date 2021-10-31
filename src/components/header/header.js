import { Container, Row, Col } from "react-bootstrap";

export function Header() {
  return (
    <Container>
      <Row>
        <Col className="text-white">
          <h1>Toogle</h1>
        </Col>
      </Row>
    </Container>
  );
}
