import {
  IconArrowRight,
  IconDownload,
} from "@tabler/icons-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Herosection.css";

function HeroSection() {
  const emailAddress = "rt82736736@gmail.com";

  // Gmail compose URL
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    emailAddress
  )}`;

  // Current Cloud & Systems skills
  const currentSkillsIcons = [
    {
      img: "https://skillicons.dev/icons?i=aws,linux",
      id: 1,
      alt: "AWS and Linux",
    },
    {
      img: "https://skillicons.dev/icons?i=powershell,windows",
      id: 2,
      alt: "PowerShell and Windows",
    },
  ];

  // Previous development skills
  const developmentSkillsIcons = [
    {
      img: "https://skillicons.dev/icons?i=html,css,js",
      id: 1,
      alt: "HTML CSS and JavaScript",
    },
    {
      img: "https://skillicons.dev/icons?i=react,nextjs,ts",
      id: 2,
      alt: "React Next.js and TypeScript",
    },
    {
      img: "https://skillicons.dev/icons?i=tailwind,redux",
      id: 3,
      alt: "Tailwind CSS and Redux",
    },
    {
      img: "https://skillicons.dev/icons?i=mongodb,mysql",
      id: 4,
      alt: "MongoDB and MySQL",
    },
  ];

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="content">

          {/* ================= HERO MAIN ================= */}
          <div className="hero-main">

            {/* Hero Text */}
            <div className="hero-text">
              <h1 className="animate__animated animate__backInLeft">
                Technical Support
                <br />
                <span>→ Cloud</span>
              </h1>

              <p>
                ~ Hi, I am Rohit Tiwari. Senior Technical Support Advisor
                building my skills in Cloud, Systems & Infrastructure,
                based in Uttarakhand, India. 📍
              </p>

              {/* Social Links */}
              <div className="social-links">
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/Therohittiwari/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>

                <a
                  aria-label="GitHub"
                  href="https://github.com/tiwaritech18"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="hero-img"></div>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="resume">

            {/* Resume */}
            <a
              aria-label="Download Resume"
              href="https://drive.google.com/file/d/1kVG1U7pM91sygNj7Ycjxq8u_dZVEzKT-/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn resume-download-btn" type="button">
                Download Resume
                <IconDownload width={18} />
              </button>
            </a>

            {/* Contact */}
            <a
              aria-label="Contact me"
              href={gmailComposeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn contact-me-btn" type="button">
                Contact me here
                <IconArrowRight width={18} />
              </button>
            </a>
          </div>

          {/* ================= CURRENT SKILLS ================= */}
          <div className="skills">
            <p>Cloud &amp; Systems</p>

            <div className="logos">
              <ul>
                {currentSkillsIcons.map((icon) => (
                  <li key={icon.id}>
                    <img
                      src={icon.img}
                      alt={icon.alt}
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= DEVELOPMENT SKILLS ================= */}
          <div className="skills development-skills">
            <p>Development</p>

            <div className="logos">
              <ul>
                {developmentSkillsIcons.map((icon) => (
                  <li key={icon.id}>
                    <img
                      src={icon.img}
                      alt={icon.alt}
                      loading="lazy"
                    />
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