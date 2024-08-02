import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="headeer__title ">
          <strong>
            Hi, my name is <em>Iryna</em>
          </strong>
          <br />a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <a target="_blank" href="https://github.com/iirk1" className="btn">
          View my GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
