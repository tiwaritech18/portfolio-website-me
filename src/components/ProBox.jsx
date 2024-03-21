import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import PropTypes from 'prop-types';
import "./Project.css"
import Skill from "./Skill";
function ProBox({
  title,
  desktopImg,
  mobileImg,
  description,
  techno1,
  techno2,
  techno3,
  code,
  demo,
  cName,
  icon,
  date,
}) {
 
  return (
    <>
      <div className={`project-container ${cName}`}>
        <div className="project-images">
          <div className="pro__img">
            <a target="_blank" href={demo} rel="noreferrer">
              <img
                src={desktopImg}
                alt="website"
              />
            </a>
          </div>
                 <div className="mobile__frame">
                 <a target="_blank" href={demo} rel="noreferrer">
              <img
                src={mobileImg}
                alt="website"
              />
            </a>
                 </div>
        </div>
      
       
        <div className="pro__text">
          <h3>
            {title} <span className="date-class">{date}</span> {icon}
          </h3>
          <p>{description}</p>
          <div className="stack">
            <Skill text={techno1}/>
            <Skill text={techno2}/>
            <Skill text={techno3}/>
          </div>
          <div className="links">
            <a target="_blank" href={code} rel="noreferrer">
              Code <IconBrandGithub />
            </a>
            <a target="_blank" href={demo} rel="noreferrer">
              Live Demo
              <IconExternalLink />
            </a>
          </div>
        </div>
      </div>
    </>
  );
} 
{
  ProBox.propTypes = {
    title: PropTypes.string.isRequired,
    mobileImg: PropTypes.string.isRequired,
    desktopImg: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techno1: PropTypes.string.isRequired,
    techno2: PropTypes.string.isRequired,
    techno3: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    scrollY: PropTypes.number.isRequired,
    cName: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };
}

export default ProBox;
