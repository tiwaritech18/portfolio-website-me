import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import waveImg from "../assets/waving.png";
import "./Herosection.css"
function HeroSection(){

  const skillsIcons = [
    {
      img: "https://skillicons.dev/icons?i=html,css",
      id:1,
    },
    {
      img: "https://skillicons.dev/icons?i=js,react",
      id:2,
    },
    {
      img: "https://skillicons.dev/icons?i=scss,figma",
      id:3,
    },
  ]
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1>Front-End React Developer</h1>
              <img src={waveImg} alt="waving_hand" />
              <p>Hi, I am Rohit Tiwari. A passionate Front-end Developer based in Uttarakhand, India. 📍</p>
              <span>
                <a 
                  aria-label="linkedin" rel="noreferrer" 
                  target="_blank" 
                  href="https://www.linkedin.com/in/Therohittiwari/"
                >
                  <IconBrandLinkedin width={32} height={32} />
                </a>

                <a 
                  aria-label="github" rel="noreferrer"
                  target="_blank" 
                  href="https://github.com/tiwaritech18"
                 >
                  <IconBrandGithub width={32} height={32} />
                </a>
              </span>
            </div>
            <div className="hero-img">
            </div>
          </div>

          <div className="skills">
            <p>Tech Stack</p>
            <div className="logos">
              <ul>
                {skillsIcons.map((icon) => (
                  <li key={icon.id}>
                    <img src={icon.img} alt="skill-icon" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
