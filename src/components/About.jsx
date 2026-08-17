import "./About.css"; // Import your About.css file
import aboutImg from "../assets/about-img.png"; // Import your about image

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
    Senior Technical Support Advisor <br />
    <span>Building towards Cloud & Systems Engineering</span>
  </h4>

  <p className="about-text">
    I'm a{" "}
    <span className="highlight-primary">
      Senior Technical Support Advisor
    </span>{" "}
    with <span className="highlight-number">2+ years</span> of experience in
    technical troubleshooting, problem-solving, and customer support.

    <br /><br />

    I'm currently building my expertise in{" "}
    <span className="highlight-cloud">
      Cloud, Networking, Linux & Systems
    </span>
    , with a focus on transitioning into{" "}
    <span className="highlight-primary">
      Cloud Support and Systems Engineering
    </span>
    .

    <br /><br />

    I also have a background in software development, with experience in{" "}
    <span className="highlight-tech">
      JavaScript, React, Next.js, SQL & MongoDB
    </span>
    , giving me an understanding of both applications and the infrastructure
    behind them.
  </p>
</div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
