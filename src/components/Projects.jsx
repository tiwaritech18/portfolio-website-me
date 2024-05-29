import ProBox from "./ProBox";
import rentDesktop from "../assets/rent_desktop.png";
import rentMobile from "../assets/rent_mobile.png";
import tulosDesktop from "../assets/tulos_desktop.png"
import tulosMobile from "../assets/tulos_mobile.png";
import dashboardMobile from "../assets/dashboard-mobile.png";
import dashboardDesktop from "../assets/dashboard-laptop.png"
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
                demo="https://car-rental-platform-deployed.vercel.app"
                icon="🚗"
              />

              <ProBox
                title="Tulos Ecommerce"
                date="(August 2023)"
                desktopImg={tulosDesktop}
                mobileImg={tulosMobile}
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="React"
                techno2="MySql"
                techno3="Php"
                code="https://github.com/tiwaritech18/tulos"
                demo="https://tulos.vercel.app"
                icon="🛒"
                cName="reversed-proj"
              />

              <ProBox
                title="Next Js Dashboard"
                date="(march 2024)"
                desktopImg={dashboardDesktop}
                mobileImg={dashboardMobile}
                description="This customer invoice dashboard, built with Next.js, PostgreSQL, and NextAuth.js, offers a real-time view of your customer data. Visualize key metrics, drill down into individual invoices, and filter by various criteria. The secure and scalable framework empowers informed decision-making through improved customer management and data visibility."
                techno1="Next Js"
                techno2="Tailwind"
                techno3="PostgreSQL"
                code="https://github.com/tiwaritech18/next-js-dashboard"
                demo="https://next-js-dashboard-nu-five.vercel.app/"
                icon="🎫"
                
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
