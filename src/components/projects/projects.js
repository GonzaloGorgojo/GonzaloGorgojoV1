import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Burger from "./imgs/burgerfront.PNG";
import BurgerBack from "./imgs/burgerback.PNG";
import Portfolio from "./imgs/portfolio.PNG";
import Contacts from "./imgs/contacts.PNG";

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
                    id="buttonProject"
                    href="https://gonzalogorgojo.github.io/react-burger-review/"
                    target="_blank"
                    rel="noreferrer"
                    variant="danger"
                  >
                    Demo
                  </Button>
                </Col>
                <Col>
                  <Button
                    id="buttonProject"
                    href="https://github.com/GonzaloGorgojo/react-burger-review"
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
            <Card.Img variant="top" src={Contacts} />
            <Card.Body>
              <Card.Title>Back-End Project</Card.Title>
              <Card.Text>
                Typescript | Docker | Node-Express | Dependency Injection |
                MongoDb | Swagger
              </Card.Text>
              <Row>
                <Col>
                  <Button
                    id="buttonProject"
                    href="https://github.com/GonzaloGorgojo/contacts-api"
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
                  <Button id="buttonProject" href="#navLinks" variant="danger">
                    Demo
                  </Button>
                </Col>
                <Col>
                  <Button
                    id="buttonProject"
                    href="https://gonzalogorgojo.github.io/GonzaloGorgojoV1/"
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
                    id="buttonProject"
                    href="https://burger-reviews.onrender.com/api/documentation/"
                    target="_blank"
                    rel="noreferrer"
                    variant="danger"
                  >
                    Demo
                  </Button>
                </Col>
                <Col>
                  <Button
                    id="buttonProject"
                    href="https://github.com/GonzaloGorgojo/express-burger-review-api"
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
