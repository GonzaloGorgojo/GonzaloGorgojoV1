import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container, Row } from "react-bootstrap";
import { GiSandsOfTime } from "react-icons/gi";
import { SiCypress, SiTypescript } from "react-icons/si";
import { GrTestDesktop, GrNode } from "react-icons/gr";

export function Experience() {
  return (
    <Container id="experience">
      <Row className="text-center text-white my-4">
        <h1>Experience</h1>
      </Row>

      <Row>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#300704", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(74, 11, 7)" }}
            date="Jan 2019 - Aug 2020"
            iconStyle={{ background: "rgb(74, 11, 7)", color: "#fff" }}
            icon={<GrTestDesktop />}
          >
            <h3 className="vertical-timeline-element-title">
              Manual Tester QA @ Egotech
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Buenos Aires, Argentina
            </h4>
            <ul>
              <li>Analysis of requirements</li>
              <li>Creation and Execution of test cases</li>
              <li>Conducting Review Meetings</li>
              <li>Bug Tracking</li>
              <li>Interaction with the development area</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#300704", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(74, 11, 7)" }}
            date="Aug 2020 - Jan 2021"
            iconStyle={{ background: "rgb(74, 11, 7)", color: "#fff" }}
            icon={<SiCypress />}
          >
            <h3 className="vertical-timeline-element-title">
              QA Automation @{" "}
              <a
                id="tagsLinks"
                href="https://simplesolutions.com.ar/"
                target="_blank"
                rel="noreferrer"
              >
                Simple Solutions
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Buenos Aires, Argentina
            </h4>
            <ul>
              <li>Test Automation Using Selenium and Cypress.</li>
              <li>Documentation and evidence taking.</li>
              <li>Bug report and monitoring with JIRA</li>
              <li>Automated Testing and Monitoring with Postman/Cypress.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#300704", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(74, 11, 7)" }}
            date="Jan 2021 - Apr 2021"
            iconStyle={{ background: "rgb(74, 11, 7)", color: "#fff" }}
            icon={<GrNode />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer @{" "}
              <a
                id="tagsLinks"
                href="https://simplesolutions.com.ar/"
                target="_blank"
                rel="noreferrer"
              >
                Simple Solutions
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Buenos Aires, Argentina
            </h4>
            <ul>
              <li>Developed an API with NodeJs.</li>
              <li>Developed a Bot with Python.</li>
              <li>
                Developed Cloud Functions querying Cloud SQL in Google Cloud.
              </li>
              <li>
                Developed Webs for clients with HTML, CSS, Bootstrap, Javascript
                and Jquery.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#300704", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(74, 11, 7)" }}
            date="Apr 2021 - Present"
            iconStyle={{ background: "rgb(74, 11, 7)", color: "#fff" }}
            icon={<GrNode />}
          >
            <h3 className="vertical-timeline-element-title">
              Mobile Developer @{" "}
              <a
                id="tagsLinks"
                href="https://simplesolutions.com.ar/"
                target="_blank"
                rel="noreferrer"
              >
                Simple Solutions
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Buenos Aires, Argentina
            </h4>
            <ul>
              <li>
                Develop, maintenance and improvements in a REACT-NATIVE app.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#300704", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(74, 11, 7)" }}
            date="Apr 2021 - Mar 2022"
            iconStyle={{ background: "rgb(74, 11, 7)", color: "#fff" }}
            icon={<SiTypescript />}
          >
            <h3 className="vertical-timeline-element-title">
              Backend Developer @{" "}
              <a
                id="tagsLinks"
                href="https://www.redbee.io/"
                target="_blank"
                rel="noreferrer"
              >
                Redbee Studios
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Buenos Aires, Argentina
            </h4>
            <ul>
              <li>Developed microservices with Node and Typescript.</li>
              <li>Developed microservices with Kotlin.</li>
              <li>Test automation with cypress.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#300704", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(74, 11, 7)" }}
            date="Apr 2022 - Present"
            iconStyle={{ background: "rgb(74, 11, 7)", color: "#fff" }}
            icon={<SiTypescript />}
          >
            <h3 className="vertical-timeline-element-title">
              Fullstack Developer @{" "}
              <a
                id="tagsLinks"
                href="https://blanclabs.com/"
                target="_blank"
                rel="noreferrer"
              >
                Blanc Labs
              </a>
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Toronto, Canada.
            </h4>
            <ul>
              <li>Developing microservices with NestJS.</li>
              <li>Using VueJS for Frontend.</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(74, 11, 7)", color: "#fff" }}
            icon={<GiSandsOfTime />}
          />
        </VerticalTimeline>
      </Row>
    </Container>
  );
}
