import "./style.css";
import Form from "../Form";
import TotalMoney from "../TotalMoney";
import CardList from "../CardList";
import { useState } from "react";

function Main() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState(false);

  const selectedStyle = {
    background: "#fd377e",
    color: "white",
  }; /* melhorar essa forma de mudar a cor */

  const addItem = (newItem) => {
    setListTransactions([...listTransactions, newItem]);
  };

  const removeItem = async (index) => {
    const newList = [...listTransactions];
    newList.splice(index, 1);
    console.log(newList);
    setListTransactions(newList);
  };

  return (
    <div className="Main">
      <div className="mainContainer">
        <div className="leftGrid">
          <Form addItem={addItem} />
          <TotalMoney listTransactions={listTransactions} />
        </div>

        <div className="rigthGrid">
          <div className="headerCard">
            <h4>Resumo Financeiro</h4>
            <div className="btnMain">
              <button
                style={!filter ? selectedStyle : undefined}
                onClick={() => setFilter(false)}
              >
                Todos
              </button>
              <button
                style={filter === "Entrada" ? selectedStyle : undefined}
                onClick={() => setFilter("Entrada")}
              >
                Entradas
              </button>
              <button
                style={filter === "Saida" ? selectedStyle : undefined}
                onClick={() => setFilter("Saida")}
              >
                Saídas
              </button>
            </div>
          </div>
          <CardList
            listTransactions={listTransactions}
            removeItem={removeItem}
            filter={filter}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
