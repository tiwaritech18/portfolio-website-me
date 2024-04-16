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
            <p>Fresh out of college with a degree in Computer Science, I was eager to solidify my programming foundation. Through Udemy courses, I dived headfirst into the world of web development. Now, I am proficient in the core languages of the web: <span className="bold-text">HTML, CSS, and JavaScript.</span> I have also mastered powerful front-end frameworks like <span className="bold-text">Tailwind</span> for rapid UI development and  <span className="bold-text">React with Redux</span>for building dynamic and scalable user interfaces. My thirst for knowledge extends beyond the front-end. I have explored database technologies like ${<span className="bold-text">Mongodb and SQL</span>} giving me a well-rounded understanding of web application development.  When I am not coding, you might find me capturing the beauty of nature through photography during my travels, or cheering on my favorite sports teams. Currently, I am honing my skills by tackling <span className="bold-text">Next.js projects,</span>  taking my web development expertise to the next level.</p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
