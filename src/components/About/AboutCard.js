import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Mwichabe Collins </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br /> I am a final year student pursuing a Bachelor's degree in Information Technology at Kibabii University
            <br />
            Additionally, I am currently employed as a software developer at
            KontorVA.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Change starts by you!"{" "}
          </p>
          <footer className="blockquote-footer">Mwichabe</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
