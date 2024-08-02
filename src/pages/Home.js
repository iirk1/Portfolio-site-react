import Header from "./../components/header/Header";

import photo01 from "./../img/projects/01.jpeg";
import photo02 from "./../img/projects/02.jpeg";
import photo03 from "./../img/projects/03.jpeg";
import photo04 from "./../img/projects/04.jpeg";
import photo05 from "./../img/projects/05.jpeg";
import photo06 from "./../img/projects/06.jpeg";

import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h2 className="title-1 mb60__title">Projects</h2>
          <ul className="projects">
            <li className="project">
              <NavLink to="project">
                <img src={photo01} alt="" className="project__img" />
                <h3 className="project__title">Gaming streaming portal</h3>
              </NavLink>
            </li>
            <li className="project">
              <NavLink to="project">
                <img src={photo02} alt="" className="project__img" />
                <h3 className="project__title">Video service</h3>
              </NavLink>
            </li>
            <li className="project">
              <NavLink to="project">
                <img src={photo03} alt="" className="project__img" />
                <h3 className="project__title">Video portal</h3>
              </NavLink>{" "}
            </li>
            <li className="project">
              <NavLink to="project">
                <img src={photo04} alt="" className="project__img" />
                <h3 className="project__title">Dating app</h3>
              </NavLink>
            </li>
            <li className="project">
              <NavLink to="project">
                <img src={photo05} alt="" className="project__img" />
                <h3 className="project__title">Landing</h3>
              </NavLink>
            </li>
            <li className="project">
              <NavLink to="project">
                <img src={photo06} alt="" className="project__img" />
                <h3 className="project__title">Gaming community</h3>
              </NavLink>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
