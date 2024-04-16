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
            <p>Fresh out of college with a degree in Computer Science, I was eager to solidify my programming foundation. Through Udemy courses, I dived headfirst into the world of web development. Now, I'm proficient in the core languages of the web: <span className="bold-text">HTML, CSS, and JavaScript.</span> I've also mastered powerful front-end frameworks like<span className="bold-text">Tailwind</span>  for rapid UI development and <span className="bold-text">React with Redux</span>for building dynamic and scalable user interfaces. My thirst for knowledge extends beyond the front-end. I've explored database technologies like MongoDB and SQL, giving me a well-rounded understanding of web application development.  When I'm not coding, you might find me capturing the beauty of nature through photography during my travels, or cheering on my favorite sports teams. Currently, I'm honing my skills by tackling
            <span className="bold-text">Next.js projects,</span>  taking my web development expertise to the next level.</p>
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
              with database <span className="bold-text">MongoDB</span> and{" "}
              <span className="bold-text">SQL</span> I am an avid
              traveller who likes to take nature photography and also a sports
              enthusiast. Currently working on{" "}
              <span className="bold-text">Next.js Projects</span> to further enhance my
              skillset.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
