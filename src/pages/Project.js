import { useParams } from "react-router-dom";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "../heplers/projectsList";
import photo02big from "./../img/projects/02-big.jpeg";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1 mb40__title">{project.title}</h1>

          <img src={photo02big} alt="" className="project-details__cover" />

          <div className="project-details__desc">
            <p>Skills: {project.skill}</p>
          </div>
          <BtnGitHub link="https://github.com/iirk1" />
        </div>
      </div>
    </main>
  );
};

export default Project;
