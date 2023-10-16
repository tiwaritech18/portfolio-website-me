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
            <p>As a developer I love to create websites using HTML, CSS, JavaScript and React. I have a degree in computer science and some projects on my GitHub profile. I am looking for a software developer job where I can learn and grow. Please contact me via email or LinkedIn if you are interested. Thank you.
<p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
