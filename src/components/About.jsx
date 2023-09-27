import "./About.css"
import aboutImg from "../assets/about-img.png"

function AboutSection() {

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img src={aboutImg} alt="mee" className="img-side__main-img" />
          </div>
          <div className="text-side">
            <h1>About me</h1>
            <h4>A dedicated Front-end Developer <br /> based in Uttarakhand, India 📍</h4>
            <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Figma, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
