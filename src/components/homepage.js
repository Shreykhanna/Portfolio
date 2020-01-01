import React from "react";
import {
  Button
  
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium
} from "@fortawesome/free-brands-svg-icons";
export default class SideMenu extends React.Component {
  render() {
    return (
      <div className="body">
        <div className="heading">
          <h1>Shrey Khanna</h1>
          <h2>ReactJs | Redux | HTML5 | CSS | Javascript | AWS | MongoDB</h2>
        </div>
        <div className="profile-image">
          <img src="src/profile_picture.jpg" alt="profileimage"></img>
        </div>
        <div className="aboutme">
          <h2>About Me</h2>
          <p>
            Shrey is a final year student doing his Masters in Information
            Technology from Queensland University of Technology, Gardens point.
            He is very much passionate about web technologies. Beside coding, Shrey also loves to write on Medium about all the technologies he learn.
          </p>
        </div>
        <div className="experience">
          <h2>Experience</h2>
          <h3>RexLabs - Frontend Developer Intern</h3>
          <span>November 2019 - December 2019</span>
        </div>
        <div className="projects">
          <h2>Side Projects</h2>
          <a href="https://ecommerce-web-application.herokuapp.com" className="ecommerce">
          <Button variant="info">Ecommerce</Button>
          </a>
          <a href="https://marvel-web-app.herokuapp.com" className="marvel">
          <Button variant="info">MarvelApp</Button>
          </a>
          <a href="https://github.com/Shreykhanna/socialmedia-client" className="socialmedia"> 
          <Button variant="info">SocialMedia</Button>
          </a>
        </div>
        <div className="certifications">
          <h2>Certifications</h2>
          <h3>AWS Developer Associate Certificate</h3>
          <a href="https://drive.google.com/file/d/1OBeSD2puDBVo0fCAbXP1IeW7hDzxYZ0-/view?usp=sharing" className="ecommerce">
          <Button variant="info">Certificate</Button>
          </a>
        </div>
        <div className="resources">
          <h2>Profiles</h2>
          <a href="https://github.com/Shreykhanna" id="faGithub">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/khannashrey/" id="faLinkedin">
            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
          </a>
          <a href="https://medium.com/@khannashrey07" id="faMedium">
            <FontAwesomeIcon icon={faMedium}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    );
  }
}
