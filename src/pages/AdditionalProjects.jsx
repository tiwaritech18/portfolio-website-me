import { useState } from "react";
import { Projects } from "../assets/Projects";
import ProjectBox from "../components/ProjectBox";
import "./AdditionalProject.css";

function AdditionalProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 10, y: 10 });

  const handleProjectHover = (projectId, event) => {
    setHoveredProject(projectId);
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleProjectClick = (link) => {
    window.location.href = link;
  };

  return (
    <div className="additional-project-container" onMouseMove={handleMouseMove}>
      <div className="container">
        <div className="project-content">
          <p>portfolio</p>
          <h3>/Projects 🧩</h3>
          {Projects.map((project) => (
            <div
              className="single-project"
              key={project.id}
              onMouseEnter={(event) => handleProjectHover(project.id, event)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project.link)}
            >
              <button>{project.name}</button>
              <hr />
            </div>
          ))}
          {hoveredProject && (
            <div
              className="addproject-container"
              style={{ top: mousePosition.y + 20, left: mousePosition.x + 20}}
            >
              <ProjectBox
                key={hoveredProject}
                techstack={Projects[hoveredProject - 1].techstack}
                img={Projects[hoveredProject - 1].img}
                demo={Projects[hoveredProject - 1].link}
                title={Projects[hoveredProject - 1].name}
                description={Projects[hoveredProject - 1].description}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdditionalProjects;
