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
            <p>
              Analysis of requirements, Creation and Execution of test cases,
              Conducting Review Meetings, Bug Tracking, Interaction with the
              development area.
            </p>
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
            <p>
              Test Automation Using Selenium and Cypress, Documentation and
              evidence taking, Bug report and monitoring with JIRA, Api
              Automated Testing and Monitoring with Postman/Cypress.
            </p>
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
            <p>
              API Development with Node Js, Bot Development with Python,
              Development of Cloud Functions querying Cloud SQL in Google Cloud
              Platform, Web development for clients with HTML, CSS, Bootstrap,
              Javascript and Jquery.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#300704", color: "white" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(74, 11, 7)" }}
            date="Apr 2021 - Present"
            iconStyle={{ background: "rgb(74, 11, 7)", color: "#fff" }}
            icon={<SiTypescript />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Developer @{" "}
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
            <p>
              Developing Node and Typescript microservices, Developing Kotlin
              microservices, Doing Test automation with cypress.
            </p>
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
