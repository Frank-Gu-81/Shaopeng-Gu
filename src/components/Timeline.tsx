import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import BriteCo from "../assets/company_logos/briteco.svg";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Professional Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            // date="2024.10 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="individual-work-row">
              <h4 className="vertical-timeline-element-title">
                <a
                  className="company-link"
                  href="https://www.brite.co/"
                  target="_blank"
                  rel="noreferrer"
                >
                  BriteCo, Inc
                </a>
              </h4>
              <h4 className="vertical-timeline-element-title">
                2024.10 - present
              </h4>
            </div>
            <div className="individual-work-row">
              <h5 className="vertical-timeline-element-title job-title">
                Software Development Intern
              </h5>
              <h5 className="vertical-timeline-element-title job-title">
                Evanston, IL
              </h5>
            </div>
            {/* <h4 className="vertical-timeline-element-subtitle">Evanston, IL</h4> */}
            <p>
              • Archetected and optimized event-driven backend systems capable
              of handling large-scale event data in real-time by integrating
              multiple external platforms, including Ontraport CRM and Google
              APIs, to automate workflows and synchornize user data
            </p>
            <p>
              • Implemented CI/CD pipelines using GitHub Actions, Docker, and
              Amazon ECR and ECS, automating the build, test, and deployment of
              back-end services for scalable and containerized production
              environments, reducing deployment time by 50%
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Frontend Development, Backend Development, User Experience, Team
              Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Staff Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>Full-stack Development, API Development, User Experience</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Analyst Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>Automation, Data Governance, Statistical Analysis</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
