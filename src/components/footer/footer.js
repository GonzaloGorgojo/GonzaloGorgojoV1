import { Container, Row, Col } from "react-bootstrap";
import { BiMailSend } from "react-icons/bi";

export function Footer() {
  return (
    <Container className="text-center text-white mt-4 mb-2">
      <Row>
        <Col>
          <h4>
            Made with 💜 by Gonzalo Gorgojo, Contact me{" "}
            <a href="mailto:gongorgojo@gmail.com">
              <BiMailSend size={30} />
            </a>
          </h4>
          <h5>Copyright © Gonzalo Gorgojo 2021</h5>
        </Col>
      </Row>
    </Container>
  );
}
