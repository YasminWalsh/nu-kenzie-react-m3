import trash from "../../assets/trash.svg";
import NoCard from "../../assets/NoCard.svg";
import "./style.css";

function CardList({ listTransactions, removeItem, filter }) {
  const filtered = () => {
    return listTransactions.filter((item) => item.type === filter);
  };

  return (
    <>
      {(filter ? filtered() : listTransactions).length ? (
        <ul>
          {(filter ? filtered() : listTransactions).map((item, index) => (
            <li
              key={index}
              style={{
                borderLeftColor:
                  item.type === "Entrada" ? "rgba(3, 184, 152, 1)" : "#E9ECEF",
              }}
            >
              <div className="leftLi">
                <p>{item.description}</p>
                <span>{item.type}</span>
              </div>

              <div className="rigthLi">
                <span>
                  {parseFloat(item.value).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                  })}
                </span>
                <button onClick={() => removeItem(index)}>
                  <img alt="Excluir" src={trash}></img>
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="noCardBox">
          <p>Você ainda não possui nenhum lançamento</p>
          <img alt="Sem lista" src={NoCard}></img>
          <img alt="Sem lista" src={NoCard}></img>
          <img alt="Sem lista" src={NoCard}></img>
        </div>
      )}
    </>
  );
}

export default CardList;
