import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> BRIEF INTRODUCTION </span>
            </h1>
            <p className="home-about-body">
            Want your work done? Reach out foor quality work at affordable prices..
              <br />
              <br />My stack:
              <i>
                <b className="purple"> For mobile development/web/desktop: Flutter, For Desktop App JavaNetbeans Event Driven GUI. For web Development: Java Script (React.js), (Express.js) For backend: and Python(Flask/Django). </b>
              </i>
              <br />
              <br />
              I am keen in learning trending technologies and languages such as  &nbsp;
              <i>
                <b className="purple"> Go lang, Rust </b> I have keen eye on
                 areas related to{" "}
                <b className="purple">
                 Frontend development
                </b>
              </i>
              <br />
              <br />
              I am constatnly working on my own projects hoping someday I will reach a potential market base.
              with <b className="purple">Mark Zugerburg</b> as
              <i>
                <b className="purple">
                  {" "}
                  one of my mentors.
                </b>
              </i>
              &nbsp; in
              <i>
                <b className="purple"> GOD   I TRUST.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/mwichabe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/collins-mwichabe1345/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_mwichabe_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
