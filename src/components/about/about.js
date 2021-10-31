import React from "react";
import Gon from "./imgs/gon.PNG";
import { Container, Row, Col } from "react-bootstrap";
import { SiLinkedin, SiGithub } from "react-icons/si";

export function About() {
  return (
    <Container id="containerAbout" className="text-center text-white">
      <Row className="mb-3">
        <h1>About Me</h1>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md="auto">
          <img className="img-thumbnail" alt="Gonzalo" src={Gon} />{" "}
        </Col>
        <Col md="auto" className="text-center mt-5">
          <Row>
            <p>
              I am a proactive, sociable and committed Software Developer, with
              the ability to analyze and solve problems. I enjoy look for
              solutions and discuss diferent alternatives to solve the problems
              in a efficent way.
            </p>
          </Row>
          <Row>
            <Col>
              <a
                href="https://www.linkedin.com/in/gonzalogorgojo/"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin size={40} />
              </a>
            </Col>
            <Col>
              <a
                href="https://github.com/GonzaloGorgojo"
                target="_blank"
                rel="noreferrer"
              >
                <SiGithub size={40} />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
