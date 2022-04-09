import { Container, Row, Col } from "react-bootstrap";
import { GrNode, GrReactjs } from "react-icons/gr";
import {
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiKotlin,
  SiPostman,
  SiJenkins,
  SiDocker,
  SiPortainer,
  SiCypress,
  SiJira,
  SiGoogle,
  SiNestjs,
} from "react-icons/si";
import { GoDeviceMobile } from "react-icons/go";
import { AiOutlineConsoleSql } from "react-icons/ai";
import { DiGit } from "react-icons/di";

export function Skills() {
  return (
    <Container className="text-center text-white mt-4 mb-5">
      <Row className="mb-3">
        <h1>Skills</h1>
      </Row>
      <Row className="mb-5">
        <Col>
          <h6>Node</h6>
          <GrNode size={30} />
        </Col>
        <Col>
          <h6>React</h6>
          <GrReactjs size={30} />
        </Col>
        <Col>
          <h6>Typescrypt</h6>
          <SiTypescript size={30} />
        </Col>
        <Col>
          <h6>Express</h6>
          <SiJavascript size={30} />
        </Col>
        <Col id="icons">
          <h6>MongoDb</h6>
          <SiMongodb size={30} />
        </Col>
        <Col id="icons">
          <h6>NestJs</h6>
          <SiNestjs size={30} />
        </Col>
        <Col id="icons">
          <h6>React native</h6>
          <GoDeviceMobile size={30} />
        </Col>
        <Col id="icons">
          <h6>SQL</h6>
          <AiOutlineConsoleSql size={30} />
        </Col>
      </Row>
      <hr></hr>
      <Row className="mb-3 mt-4">
        <h1>Tools</h1>
      </Row>
      <Row>
        <Col>
          <h6>Postman</h6>
          <SiPostman size={30} />
        </Col>
        <Col>
          <h6>Jenkins</h6>
          <SiJenkins size={30} />
        </Col>
        <Col>
          <h6>Portainer</h6>
          <SiPortainer size={30} />
        </Col>
        <Col>
          <h6>Git</h6>
          <DiGit size={30} />
        </Col>
        <Col id="icons">
          <h6>Docker</h6>
          <SiDocker size={30} />
        </Col>
        <Col id="icons">
          <h6>Cypress</h6>
          <SiCypress size={30} />
        </Col>
        <Col id="icons">
          <h6>Jira</h6>
          <SiJira size={30} />
        </Col>
        <Col id="icons">
          <h6>Google Cloud</h6>
          <SiGoogle size={30} />
        </Col>
      </Row>
    </Container>
  );
}
