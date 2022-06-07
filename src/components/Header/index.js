import NuKenzieB from "../../assets/NuKenzieBlack.svg";
import "./style.css";

function Header({ setHomePage }) {
  return (
    <header className="Header">
      <div className="headerContainer">
        <div>
          <img alt="imagem" src={NuKenzieB}></img>
        </div>
        <div>
          <button onClick={() => setHomePage(false)}>Início</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
