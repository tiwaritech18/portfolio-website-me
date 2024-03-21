import "./About.css"; // Import your About.css file
import aboutImg from "../assets/about-img.jpeg"; // Import your about image

function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img src={aboutImg} alt="About me" className="img-side__main-img" />
          </div>
          <div className="text-side">
            <h1>About me</h1>
            <h4>
              A dedicated Front-end Developer <br /> based in Uttarakhand, India{" "}
            </h4>
            <p>
              After graduating with a degree in{" "}
              <span className="bold-text">Computer Science.</span> I decided to
              build my foundation in programming. I enrolled through udemy
              courses and learned{" "}
              <span className="bold-text">Web development.</span> My core skills
              are{" "}
              <span className="bold-text">
                HTML, CSS, JavaScript, Tailwind, React
              </span>{" "}
              and <span className="bold-text">Redux.</span> I have also worked
              with <span className="bold-text">Sass, Material UI</span> and{" "}
              <span className="bold-text">Framer motion.</span> I am an avid
              traveller who likes to take nature photography and also a sports
              enthusiast. Currently learning{" "}
              <span className="bold-text">Next.js</span> to further grow my
              skillset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
