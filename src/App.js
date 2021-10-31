import ParticleBackground from "./particle/ParticleBackground";
import { Introduction } from "./components/introduction/introduction";
import { Experience } from "./components/experience/experience";
import { Container, Row } from "react-bootstrap";
import { Header } from "./components/header/header";
import { About } from "./components/about/about";
import { Footer } from "./components/footer/footer";
import { Skills } from "./components/skills/skills";

function App() {
  return (
    <Container fluid id="container">
      <Row id="introduction">
        <Header />
        <Introduction />
      </Row>
      <Row>
        <About />
        <ParticleBackground />
      </Row>
      <Row id="experience">
        <Experience />
      </Row>
      <Row>
        <Skills />
      </Row>
      <Row id="footer">
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
