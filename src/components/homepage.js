import React from "react";
import { Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium
} from "@fortawesome/free-brands-svg-icons";
export default class SideMenu extends React.Component {
  render() {
    return (
      <div>
        <div className="container navbar">
          <header>
            <div className="heading">
              <h1>Shrey Khanna</h1>
            </div>
            <nav>
              <ul>
                <li>
                  <a href="#aboutme">About me</a>
                </li>
                <li>
                  <a href="#skills"> Skills</a>
                </li>
                <li>
                  <a href="#work">Work</a>
                </li>
              </ul>
            </nav>
          </header>
        </div>

        <div className="container main-info-section">
          <div className="text">
            <h1>
              <span>H</span>
              <span className="m-left">i</span>
              <span className="m-left">,</span>
              <br></br>
              <span>I</span>
              <span className="m-left">a</span>
              <span className="m-left">m</span>
              <span className="name">S</span>
              <span className="m-left name">h</span>
              <span className="m-left name">r</span>
              <span className="m-left name">e</span>
              <span className="m-left name">y</span>
              <span className="m-left">,</span>
              <br></br>
            </h1>
            <p>ReactJs | Redux | HTML5 | CSS | Javascript | AWS | MongoDB</p>
            <a href="#contact">Contact me</a>
          </div>
          <div className="profile-image">
            <img src="public/profile_picture.png" alt="profileimage"></img>
          </div>
        </div>
        <div className="container" id="#about">
          <h1>About me</h1>
          <div className="about-me-info">
            <p>
              Shrey is a final year student doing his Masters in Information
              Technology from Queensland University of Technology, Gardens
              point.He is very much passionate about web technologies. Beside
              coding, Shrey also loves to write on Medium about all the
              technologies he learn.
            </p>
          </div>
        </div>
        <div className="work">
          <h1>Work</h1>
          <Button id="react-projects">React Projects</Button>
          </div>
          <footer>
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
         </footer>
      </div>

      //   <div className="profile-image">
      //     <Image src="../public/profile_picture.jpg" alt="profileimage"></Image>
      //   </div>
      //   <div className="aboutme">
      //     <h2>About Me</h2>
      //     <p>
      //       Shrey is a final year student doing his Masters in Information
      //       Technology from Queensland University of Technology, Gardens point.He is very much passionate about web technologies.
      //       Beside coding, Shrey also loves to write on Medium about all the technologies he learn.</p>
      //   </div>
      //   <div className="experience">
      //     <h2>Experience</h2>
      //     <h3>RexLabs - Frontend Developer Intern</h3>
      //     <span>November 2019 - December 2019</span>
      //   </div>
      //   <div className="projects">
      //     <h2>Side Projects</h2>
      //     <a href="https://ecommerce-web-application.herokuapp.com" className="ecommerce">
      //     <Button variant="info">Ecommerce</Button>
      //     </a>
      //     <a href="https://marvel-web-app.herokuapp.com" className="marvel">
      //     <Button variant="info">MarvelApp</Button>
      //     </a>
      //     <a href="https://github.com/Shreykhanna/socialmedia-client" className="socialmedia">
      //     <Button variant="info">SocialMedia</Button>
      //     </a>
      //   </div>
      //   <div className="certifications">
      //     <h2>Certifications</h2>
      //     <h3>AWS Developer Associate Certificate</h3>
      //     <a href="https://drive.google.com/file/d/1OBeSD2puDBVo0fCAbXP1IeW7hDzxYZ0-/view?usp=sharing" className="ecommerce">
      //     <Button variant="info">Certificate</Button>
      //     </a>
      //   </div>
      //   <div className="resources">
      //     <h2>Profiles</h2>
      //     <a href="https://github.com/Shreykhanna" id="faGithub">
      //       <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      //     </a>
      //     <a href="https://www.linkedin.com/in/khannashrey/" id="faLinkedin">
      //       <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
      //     </a>
      //     <a href="https://medium.com/@khannashrey07" id="faMedium">
      //       <FontAwesomeIcon icon={faMedium}></FontAwesomeIcon>
      //     </a>
      //   </div>
      // </div>
    );
  }
}
