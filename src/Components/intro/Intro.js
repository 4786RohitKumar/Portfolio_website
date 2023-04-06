import React, { useEffect, useRef } from "react";
import "./intro.scss";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <>
      <div className="Intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="Assets/profile.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There, I'm</h2>
            <h1>Rohit Gupta</h1>
            <h3>
              <span>
                {" "}
                <Typewriter
                  options={{
                    strings: ["web Developer", "Designer", "Content Creater"],
                    autoStart: true,
                    delay: 75,
                    loop: true,
                  }}
                />
              </span>{" "}
            </h3>
          </div>
          <div className="linkContainer">
            <a href="#portfolio">
              <img src="Assets/down.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
