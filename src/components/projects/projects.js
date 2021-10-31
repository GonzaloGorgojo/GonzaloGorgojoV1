import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Burger from "./imgs/burgerfront.PNG";
import BurgerBack from "./imgs/burgerback.PNG";
import Portfolio from "./imgs/portfolio.PNG";
import Mobile from "./imgs/mobile.PNG";

export function Projects() {
  return (
    <Container className="text-center my-4 text-white">
      <Row>
        <h1>Projects</h1>
      </Row>
      <hr></hr>

      <Row xs={1} md={4} className="g-4">
        <Col>
          <Card border="light" id="cardProject">
            <Card.Img variant="top" src={Burger} />
            <Card.Body>
              <Card.Title>Front-End Project</Card.Title>
              <Card.Text>
                React | React-Bootstrap | React-Router | Axios | GH-Pages |
                Cypress
              </Card.Text>
              <Row>
                <Col>
                  <Button
                    href="https://gonzalogorgojo.github.io/BurgerProject_FrontEnd/"
                    target="_blank"
                    rel="noreferrer"
                    variant="danger"
                  >
                    Demo
                  </Button>
                </Col>
                <Col>
                  <Button
                    href="https://github.com/GonzaloGorgojo/BurgerProject_FrontEnd"
                    target="_blank"
                    rel="noreferrer"
                    variant="danger"
                  >
                    Repo
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="light" id="cardProject">
            <Card.Img variant="top" src={Portfolio} />
            <Card.Body>
              <Card.Title>Front-End Project</Card.Title>
              <Card.Text>
                React | Particle.js | React-Bootstrap | Scss
              </Card.Text>
              <Row>
                <Col>
                  <Button
                    href="https://github.com/GonzaloGorgojo/BurgerProject_FrontEnd"
                    target="_blank"
                    rel="noreferrer"
                    variant="danger"
                  >
                    Demo
                  </Button>
                </Col>
                <Col>
                  <Button
                    href="https://github.com/GonzaloGorgojo/gonzalogorgojo.github.io"
                    target="_blank"
                    rel="noreferrer"
                    variant="danger"
                  >
                    Repo
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="light" id="cardProject">
            <Card.Img variant="top" src={BurgerBack} />
            <Card.Body>
              <Card.Title>Back-End Project</Card.Title>
              <Card.Text>
                Node | Express | MongoDb | Moongoose | Swagger | Heroku
              </Card.Text>
              <Row>
                <Col>
                  <Button
                    href="https://burgers-reviews.herokuapp.com/api/documentation/"
                    target="_blank"
                    rel="noreferrer"
                    variant="danger"
                  >
                    Demo
                  </Button>
                </Col>
                <Col>
                  <Button
                    href="https://github.com/GonzaloGorgojo/BurgerProject_BackEnd-API"
                    target="_blank"
                    rel="noreferrer"
                    variant="danger"
                  >
                    Repo
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card border="light" id="cardProject">
            <Card.Img variant="top" src={Mobile} />
            <Card.Body>
              <Card.Title>Mobile Project</Card.Title>
              <Card.Text>React Native | Expo</Card.Text>
              <Row>
                <Col>
                  <Button
                    href="https://github.com/GonzaloGorgojo/ReactNative-GuessANumber"
                    target="_blank"
                    rel="noreferrer"
                    variant="danger"
                  >
                    Repo
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
