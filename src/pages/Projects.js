import Project from "../components/project/Project";

import { projects } from "./../heplers/projectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1 mb60__title">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project key={index} title={project.title} img={project.img} />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
