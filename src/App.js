import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import InicialPag from "./components/InicialPag";

function App() {
  const [homePage, setHomePage] = useState(false);

  return (
    <>
      {homePage ? (
        <>
          <Header setHomePage={setHomePage} />
          <Main />
        </>
      ) : (
        <InicialPag setHomePage={setHomePage} />
      )}
    </>
  );
}

export default App;
