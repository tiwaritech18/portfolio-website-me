import ProBox from "./ProBox";
import rentDesktop from "../assets/rent_desktop.png";
import rentMobile from "../assets/rent_mobile.png";
import tulosDesktop from "../assets/tulos_desktop.png"
import tulosMobile from "../assets/tulos_mobile.png";
import stileMobile from "../assets/stile_mobile.png";
import stileDesktop from "../assets/stile_desktop.png"
import "./Project.css"
import { Link } from "react-router-dom";
function Projects() {
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>/Projects 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Car Rental"
                desktopImg={rentDesktop}
                mobileImg={rentMobile}
                date="(July 2023)"
                description="A car rental
                          website is an online platform 
                          that allows users to rent cars
                          for personal or business use.
                          The website provides 
                          an interface for searching, comparing, and reserving cars."
                techno1="React"
                techno2="CSS"
                techno3="Context API"
                code="https://github.com/tiwaritech18/car-rental-platform"
                demo="car-rental-platform-deployed.vercel.app"
                icon="🚗"
              />

              <ProBox
                title="Tulos Ecommerce"
                date="(August 2023)"
                desktopImg={tulosDesktop}
                mobileImg={tulosMobile}
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="React"
                techno2="SCSS"
                techno3="Context API"
                code="https://github.com/tiwaritech18/tulos"
                demo="tulos.vercel.app"
                icon="🛒"
                cName="reversed-proj"
              />

              <ProBox
                title="Stile E-commerce"
                date="(June 2023)"
                desktopImg={stileDesktop}
                mobileImg={stileMobile}
                description="This project is a frontend application for an e-commerce website built with React and Vite .It includes components for displaying products, categories, and more. The project utilizes a responsive design and leverages Material-UI for icons. Styling is done using vanilla CSS."
                techno1="React"
                techno2="CSS"
                techno3="Material UI"
                code="https://github.com/tiwaritech18/e-commerce"
                demo="e-commerce-zeta-eosin.vercel.app"
                icon="📥"
                
              />
            </div>
          </div>
        <div className="more-projects">
          <Link to="/addprojects">

          <p className="additional-p">Additional projects</p>
          </Link>
        </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
