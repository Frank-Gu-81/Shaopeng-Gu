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
            // date="2020 - 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="individual-work-row">
              <h4 className="vertical-timeline-element-title">
                <a
                  className="company-link"
                  href="https://www.atlasnova.ai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  AtlasNova AI
                </a>
              </h4>
              <h4 className="vertical-timeline-element-title">
                2024.10 - 2025.01
              </h4>
            </div>
            <div className="individual-work-row">
              <h5 className="vertical-timeline-element-title job-title">
                Software Development Intern
              </h5>
              <h5 className="vertical-timeline-element-title job-title">
                Remote
              </h5>
            </div>
            {/* <h4 className="vertical-timeline-element-subtitle">Evanston, IL</h4> */}
            <p>
              • Developed and integrated a Stripe payment system into a REST API
              and front-end using React-Redux, Stripe API, and Node.js to
              streamline payment process, enabling secure, real-time payments
              and improving the company’s monetization
            </p>
            <p>
              • Improved content generation using Retrieval-Augmented Generation
              (RAG) for internal and external data, leveraging Python,
              TensorFlow, and NLP models to enhance output accuracy while
              optimizing retrieval strategies and prompt engineering
            </p>
            <p>
              • Conducted advanced prompt engineering to fine-tune AI responses,
              leveraging OpenAI APIs and other LLMs to improve response quality,
              resulted in reduced operational costs and improved user
              satisfaction by generating more accurate contents
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // date="2021 - 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <div className="individual-work-row">
              <h4 className="vertical-timeline-element-title">
                <a
                  className="company-link"
                  href="https://yhjh.chinastock.com.cn/web/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  China Galaxy Securities
                </a>
              </h4>
              <h4 className="vertical-timeline-element-title">
                2024.06 - 2024.07
              </h4>
            </div>
            <div className="individual-work-row">
              <h5 className="vertical-timeline-element-title job-title">
                Software Development Intern
              </h5>
              <h5 className="vertical-timeline-element-title job-title">
                Beijing, China
              </h5>
            </div>
            {/* <h4 className="vertical-timeline-element-subtitle">Evanston, IL</h4> */}
            <p>
              • Collaborated on improving the efficiency and reducing the false
              positive rate of Anti-Money Laundering (AML) and Counter-Terrorist
              Financing systems using Message Passing Neural Networks (MPNNs) on
              heterogeneous graphs
            </p>
            <p>
              • Integrated data from SZSE, HKEX, and internal sources, utilizing
              Neo4j for graph management; Employed node classification and link
              prediction, boosting detection accuracy by 12% and significantly
              enhancing financial security
            </p>
            <p>
              • Collaborated with legal and compliance teams to translate
              regulatory requirements into technical specifications; implemented
              solutions using Python, Django, and SQL, ensuring adherence to
              regulation and reducing regulatory fines by 15%
            </p>
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
