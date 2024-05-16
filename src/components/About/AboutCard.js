import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, my name <span className="purple">Collins M. </span>
            from <span className="purple"> Nairobi, Kenya.</span>
            <br /> I have completed my final year coursework in Bachelor's degree in Information Technology at Kibabii University
            <br />
            Looking for a job that has favourable working environment, and goal minded to reach their objectives, a place where I can learn from and possibly grow.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading the Bible
            </li>
            <li className="about-activity">
              <ImPointRight />Singing
            </li>
            <li className="about-activity">
              <ImPointRight /> Research - oriented mind, like in understanding what is happening in the cosmos
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Do your best GOD will reward."{" "}
          </p>
          <footer className="blockquote-footer">Collins M.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
