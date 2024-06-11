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
            Are you looking for a talent to fit in your team? Look no further, I am looking for a job that has an official hybrid or onsite setting, where I can put my skills to work.
              <br />
              <br />I am good with
              <i>
                <b className="purple"> Flutter, view my project section for samples </b>
              </i>
              <br />
              <br />
              I am looking for a job as a   &nbsp;
              <i>
                <b className="purple"> Flutter developer, React or FrontEnd Engineer  </b> I have keen eye on
                 areas related to{" "}
                <b className="purple">
                 Frontend development
                </b>
              </i>
              <br />
              <br />
              I have my own projects that help sharpen my skills constantly, aspiring to reach the market base.
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
