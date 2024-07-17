import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import travelPersona from "../../Assets/Projects/travelPersona.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelPersona}
              isBlog={false}
              title="Travel Persona"
              description="Create a trip and manage your Users"
              ghLink=""
              demoLink="https://www.travelpersona.co/"
            />
          </Col>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Best Candidate Website"
              description="This Website is for the best Candidate Mobile app to be lauched soon..."
              ghLink="https://github.com/mwichabe/BestCandidateWebsite-new-"
              demoLink="https://bestcandidatewebsite-new.pages.dev/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Antonios Sports Lounge App"
              description="Personal Social Media App that allows users to chat."
              ghLink="https://github.com/mwichabe/Antonios_Sports_Lounge"
              demoLink="https://www.linkedin.com/posts/collins-mwichabe1345_flutterdeveloper-mobileappdevelopment-antoniosapp-activity-7130597862886817792-lBCR?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hustle Hub "
              description="A React based Web app for connecting job seekers to secure jobs at their particular field(s)"
              ghLink="https://github.com/mwichabe/HustleHub"
              demoLink="https://a7c80ff4.hustledeploy.pages.dev/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Astret Consultant"
              description="Web and Mobile App, made use of Quotable API"
              ghLink="https://github.com/mwichabe/astretConsultant/tree/main"
              demoLink="https://astretconsultant.pages.dev/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="python mlfq "
              description="Using 'Natural Launguage Processing' for Implementing Multi -Level-Frequency-Queue."
              ghLink="https://github.com/mwichabe/mlfq_algorithm"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="C plus FVM Algorithm"
              description="Implementing a fourth-order Finite Volume Method (FVM) algorithm using C++."
              ghLink="https://github.com/mwichabe/forth-order-FVMOL-algorithm"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
