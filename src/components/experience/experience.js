import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container, Row } from "react-bootstrap";
import { GiSandsOfTime } from "react-icons/gi";
import { SiTypescript } from "react-icons/si";
import { GrNode } from "react-icons/gr";

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
            date="Aug 2020 - Apr 2021"
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
            date="Jun 2021 - Oct 222"
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
            date="Apr 2021 - Feb 2022"
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
            date="Feb 2022 - Present"
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
              <li>Developing a mobile app with React Natives.</li>
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
