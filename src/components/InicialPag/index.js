import NuKenzie from "../../assets/NuKenzie.svg";
import imgAside from "../../assets/pageInitial.svg";

import "./style.css";

function InicialPag({ setHomePage }) {
  return (
    <main className="Container initial">
      <div className="boxIntro">
        <img alt="imagem" src={NuKenzie}></img>
        <div className="boxInfos">
          <p>Centralize o controle das suas finanças</p>
          <p>de forma rápida e segura</p>
          <button onClick={() => setHomePage(true)}>Iniciar</button>
        </div>
      </div>

      <div className="imgPageInitial">
        <img alt="imagem" src={imgAside}></img>
      </div>
    </main>
  );
}

export default InicialPag;
