import React from "react";
import "./About.css";
import hridoyPhoto from "../../images/my/hridoy.jpg";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div>
        <img width="300" src={hridoyPhoto} alt="" />
        <h2>Name: Md. Amirul Islam Hridoy.</h2>
        <p><b>My goal: </b> I want to be a web developer. This is my goal. And I want to compleat my goal. Now my goal is too hard in my situation. Because, now I am do face many problem like load-shadding, pc-slow etc. I try my best to solve the problem. I am ready for hard working.
        <br></br>
        Insha-Allah I can complete this course. You will pray for me.
        </p>
      </div>
    </div>
  );
};

export default About;
