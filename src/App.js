import ParticleBackground from "./particle/ParticleBackground";
import { Introduction } from "./components/introduction/introduction";
import { Experience } from "./components/experience/experience";
import { Container, Row } from "react-bootstrap";
import { Header } from "./components/header/header";
import { About } from "./components/about/about";
import { Footer } from "./components/footer/footer";
import { Skills } from "./components/skills/skills";
import { Projects } from "./components/projects/projects";

function App() {
  return (
    <Container fluid id="container">
      <Row id="introduction">
        <Header />
        <Introduction />
      </Row>
      <Row id="about">
        <About />
        <ParticleBackground />
      </Row>
      <Row id="experience">
        <Experience />
      </Row>
      <Row id="projects">
        <Projects />
      </Row>
      <Row id="skills">
        <Skills />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
