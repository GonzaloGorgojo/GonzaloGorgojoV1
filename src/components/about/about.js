import React from "react";
import Gon from "../../imgs/gon.PNG";
import { Container, Row, Col } from "react-bootstrap";

export function About() {
  return (
    <Container id="about" className="text-center text-white">
      <Row className="mb-5">
        <h1>About Me</h1>
      </Row>
      <Row>
        <Col>
          <img className="img-thumbnail" alt="Gonzalo" src={Gon} />{" "}
        </Col>
        <Col>
          <h5>
            I am a proactive, sociable and committed Software Developer, with
            the ability to analyze and solve problems.
            <br /> I enjoy working as a team, looking for solutions, trying new
            technologies and developing software that is useful to clients.
          </h5>
        </Col>
      </Row>
    </Container>
  );
}
