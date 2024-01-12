import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer (Web React)",
          "Mobile Developer (Flutter)",
          "Cross Platform Developer (React Native Flutter)",
          "Rest API developer (Node Express.js",
          "Data Analyst (python)",
          "Freelancer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
