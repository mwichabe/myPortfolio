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
              imgPath={chatify}
              isBlog={false}
              title="Flutter Antonios Sports Lounge App"
              description="Personal Social Media App that allows users to chat."
              ghLink="https://github.com/mwichabe/Antonios_Sports_Lounge"
              demoLink="https://www.linkedin.com/posts/collins-mwichabe1345_flutterdeveloper-mobileappdevelopment-antoniosapp-activity-7130597862886817792-lBCR?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Flutter Water Detector App"
              description="Made use of openweather API to show the weather paterns, this was build with flutter."
              ghLink="https://github.com/mwichabe/waterDetector"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Java Minesweeper Guessing Game"
              description="Minesweeper is a classic single-player puzzle game. This project is a Java implementation of Minesweeper with a graphical user interface (GUI)."
              ghLink="https://github.com/mwichabe/Minesweeper-Game"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="C HeapAllocator"
              description="Implemented heap allocator similar to ptmalloc2, jemalloc, tcmalloc."
              ghLink="https://github.com/mwichabe/heapallocator"
              //demoLink=""
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
