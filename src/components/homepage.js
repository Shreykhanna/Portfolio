import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import profileimage from '../profile_picture.png';
import certificate from '../aws.png'
import story_one from "../story_one.png";
import story_two from "../story_two.png";
import story_three from "../story_three.png";
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
              <br></br><br></br>
              <span className="name">Skill Set</span>
            </h1>
            <p>ReactJs | Redux | NodeJS | HTML5 | CSS | Javascript | AWS | MongoDB</p>
          </div>
          <div className="profile-image">
            <img src={profileimage} alt="profileimage"></img>
          </div>
        </div>
        <div className="container about" id="#about">
          <h1>About</h1>
          <div className="about-me-info">
            <p>
              Shrey is a final year student doing his Masters in Information
              Technology from Queensland University of Technology, Gardens
              Point. An easy approachable guy, he is very much passionate about web technologies. 
              He is a quick learner and hardworking guy and his ultimate aim is to be a frontend developer.
              Beside coding, Shrey also loves to write on Medium about all the technologies he learn.
            </p>
          </div>
        </div>
        <div className="container experience" id="#about">
          <h1>Experience</h1>
          <div className="experience-info">
            <h2>RexLabs - Frontend Developer Intern</h2>
            <h3>November 2019 - December 2019</h3>
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
          <img src={certificate} alt="certificate"></img>
          </div>
          </div>
          <div className="container medium">
            <h1>Medium</h1>
            <div className="medium-image">
            <a href="https://medium.com/@khannashrey07/redux-a-state-managing-container-for-react-ee6de21a2c3b" className="story_one">
              <img src={story_one} alt="story_one" className="story_one"></img>
              </a>
            <a href="https://medium.com/@khannashrey07/deployment-of-web-applications-at-aws-using-elastic-beanstalk-c87111a82900" className="story_two">
            <img src={story_two} alt="story_two" className="story_two"></img>
              </a>
            <a href="https://medium.com/@khannashrey07/how-i-made-the-pizza-order-bot-for-telegram-4e8a8b6b3922" className="story_three">
            <img src={story_three} alt="story_three" className="story_three"></img>
              </a>
      </div>
          </div>
          <footer>
          <div className="container resources">
           <h1>Profiles</h1>
           <a href="https://github.com/Shreykhanna" className="faGithub">
             <FontAwesomeIcon icon={faGithub} size="10x"></FontAwesomeIcon>
           </a>
           <a href="https://www.linkedin.com/in/khannashrey/" className="faLinkedin">
             <FontAwesomeIcon icon={faLinkedin} size="10x"></FontAwesomeIcon>
           </a>
         </div>
         </footer>
      </div>
    );
  }
}
