import { useState } from "react";
import "./style.css";

function Form({ addItem }) {
  const [itemList, setItemList] = useState({
    description: "",
    value: 0,
    type: "Entrada",
  });

  return (
    <div className="Form">
      <div className="formGrid">
        <div className="upInput">
          <label className="labelForm">Descrição</label>
          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            value={itemList.description}
            onChange={({ target }) =>
              setItemList({ ...itemList, description: target.value })
            }
          ></input>
          <span>Ex:Compra de roupas</span>
        </div>

        <div className="downInput">
          <div className="valueInput">
            <label className="labelForm">Valor</label>
            <input
              type="number"
              placeholder="Insira o valor"
              value={itemList.value}
              onChange={({ target }) =>
                setItemList({ ...itemList, value: target.value })
              }
            ></input>
          </div>
          <div className="typeInput">
            <label className="labelForm">Tipo de Valor</label>
            <select
              className="labelForm"
              value={itemList.type}
              onChange={({ target }) =>
                setItemList({ ...itemList, type: target.value })
              }
            >
              <option value="Entrada">Entrada</option>
              <option value="Saida">Saída</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => {
            addItem(itemList);
            setItemList({
              description: "",
              value: 0,
              type: "Entrada",
            });
          }}
        >
          Inserir valor
        </button>
      </div>
    </div>
  );
}

export default Form;
