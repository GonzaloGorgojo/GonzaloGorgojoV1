import { Container, Row, Col } from "react-bootstrap";
import Typical from "react-typical";

export function Introduction() {
  return (
    <Container className="text-center mt-5 text-white">
      <Row>
        <Col>
          <div>
            <h1>Hi, I´m Gonzalo Gorgojo 👋</h1>
            <Typical
              id="intro"
              steps={[
                "Software Developer",
                2000,
                "Back-End Developer",
                1000,
                "Front-End Developer",
                1000,
                "Mobile Developer",
                1000,
              ]}
              loop={Infinity}
              wrapper="h4"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
