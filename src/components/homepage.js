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
          </header>
        </div>

        <div className="container main-info-section">
          <div className="text">
            <h1>
              <span>Hi,</span>
              <br></br>
              <span>I am </span>&nbsp;
              <span className="name">Shrey</span>
            </h1>
            <p>ReactJs | Redux | HTML5 | CSS | Javascript | AWS | MongoDB</p>
          </div>
          <div className="profile-image">
            <img src="" alt="profileimage"></img>
          </div>
        </div>
        <div className="container about" id="#about">
          <h1>About</h1>
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
        <div className="container experience" id="#about">
          <h1>Experience</h1>
          <div className="experience-info">
            <h2>RexLabs - Frontend Developer Intern</h2>
            <span>November 2019 - December 2019</span>
          </div>
        </div>
        <div className="container work">
          <h1>Work</h1>
        <div className="container work-info">
          <a href="https://ecommerce-web-application.herokuapp.com" className="ecommerce">
            <Button>Ecommerce</Button>
           </a>
            <a href="https://marvel-web-app.herokuapp.com" className="marvelapp">
            <Button>MarvelApp</Button>
            </a>
            <a href="https://github.com/Shreykhanna/socialmedia-client" className="socialmedia">
            <Button>SocialMedia</Button>
            </a>
          </div>
          </div>
          <div className="container certificate">
          <h1>Certificate</h1>
          <span>AWS Certified Developer - Associate</span>
          <div className="certificate-image">
          <img src="public/aws.png" alt="certificate"></img>
          </div>
          </div>
          <footer>
          <div className="container resources">
           <h1>Profiles</h1>
           <a href="https://github.com/Shreykhanna" className="faGithub">
             <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
           </a>
           <a href="https://www.linkedin.com/in/khannashrey/" className="faLinkedin">
             <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
           </a>
           <a href="https://medium.com/@khannashrey07" className="faMedium">
            <FontAwesomeIcon icon={faMedium}></FontAwesomeIcon>
         </a>
         </div>
         </footer>
      </div>
    );
  }
}
