import ProBox from "./ProBox";


function Projects() {
  const projectsImg = {
    img1:"../../images/carrental.png",
    img2:"../../images/ecommerce.png",
    img3:"../../images/clientsync.png",
  }
  return (
    <>
      <section id="projects" className="project">
        <div className="container">
          <div className="project-content">
            <p>portfolio</p>
            <h3>Each project is a unique piece of development 🧩</h3>
            <div className="projects-grid">
              <ProBox
                title="Car Rental"
                img={projectsImg.img1}
                date="(July 2023)"
                description="A car rental
                          website is an online platform 
                          that allows users to rent cars
                          for personal or business use.
                          The website provides 
                          an interface for searching, comparing, and reserving cars."
                techno1="React"
                techno2="CSS"
                code="https://github.com/tiwaritech18/Drive-Smart-Car-rental"
                demo="https://car-rental-48cau68yl-tiwaritech18.vercel.app/"
                scrollY="-83%"
                icon="🚗"
              />

              <ProBox
                title="Ecommerce"
                date="(August 2023)"
                img={projectsImg.img2}
                description="With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need."
                techno1="React"
                techno2="Vanila CSS"
                code="https://github.com/tiwaritech18/craftShop/tree/master"
                demo="https://e-commerce-f9buzrdx4-tiwaritech18.vercel.app/"
                scrollY="-71%"
                icon="🛒"
                cName="reversed-proj"
              />

              <ProBox
                title="ClientSync"
                date="(June 2023)"
                img={projectsImg.img3}
                description="ClintSync is a minimalist website dedicated solely to the art of design. It doesn't serve a functional purpose or provide information—it's a digital canvas created to showcase and celebrate design aesthetics."
                techno1="React"
                techno2="Styled Components"
                code="https://github.com/tiwaritech18/ClientSync"
                demo="https://client-sync-kd82v1dko-tiwaritech18.vercel.app/"
                scrollY="-74%"
                icon="📥"
                cName="reversed-proj"
              />
            </div>
          </div>
          {/* <h2 className="new-projects">New projects coming soon.. 🤠</h2> */}
        </div>
      </section>
    </>
  );
}

export default Projects;
