import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
} from "@tabler/icons-react";
import "./Herosection.css";
import { Link } from "react-router-dom";


function HeroSection() {
  const handleContact = () => {
  
  }
  const skillsIcons = [
    {
      img: "https://skillicons.dev/icons?i=html,css",
      id: 1,
    },
    {
      img: "https://skillicons.dev/icons?i=js,react",
      id: 2,
    },
    {
      img: "https://skillicons.dev/icons?i=scss,tailwind",
      id: 3,
    },
    {
      img: "https://skillicons.dev/icons?i=nextjs,mongodb",
      id: 3,
    },
  ];
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">
          <div className="hero-main">
            <div className="hero-text">
              <h1 className="animate__animated animate__backInLeft">
                Front-End Developer
              </h1>
              <p>
                'Hi, I am Rohit Tiwari. A passionate Front-end Developer based
                in Uttarakhand, India.📍'
              </p>
              <span>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/Therohittiwari/"
                >
                  <IconBrandLinkedin width={32} height={32} />
                </a>

                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/tiwaritech18"
                >
                  <IconBrandGithub width={32} height={32} />
                </a>
              </span>
            </div>
            <div className="hero-img"></div>
          </div>
          <div className="resume">
            <a
                  aria-label="cv"
                  href="../assets/resume.pdf"
                  download={true}
                >
                  <button className="btn resume-download-btn">
              Download Resume
              <IconDownload width={18} />
            </button>
                </a>
            <Link to="/contact">
              <button className="btn contact-me-btn" onClick={handleContact}>
                Contact me here
                <IconArrowRight width={18} />
              </button>
            </Link>
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
