import { IconLink } from "@tabler/icons-react";
import Skill from "../components/Skill"
const ProjectBox = ({img, description, techstack,demo,title}) => {
  console.log(description);
  return (
    <div className="project-box">
      
      <div className="project-box-img">
        <img src={img} alt={title} />
      </div>
      <div className="project-box-text">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <div className="skill-set">

        {
          techstack.map((tech) => {
            return (
              <Skill key={tech} text={tech}/>
              )
            })
          }
          </div>
      </div>
      <p style={{display:"flex", alignItems:"center", gap:"2px"}}>{demo}
      <IconLink width={12}/>
      </p>
      
    </div>
  )
}

export default ProjectBox
