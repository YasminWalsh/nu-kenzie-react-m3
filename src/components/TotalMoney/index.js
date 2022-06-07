import "./style.css";

function TotalMoney({ listTransactions }) {
  return (
    <div className="TotalMoney">
      <div className="valorGrid">
        <label>Valor total:</label>
        <span>
          {listTransactions
            .reduce(
              (acc, current) =>
                acc +
                parseFloat(
                  `${current.type === "Entrada" ? "" : "-"}${current.value}`
                ),
              0
            )
            .toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            })}
        </span>
      </div>

      <p>O valor se refere ao saldo</p>
    </div>
  );
}

export default TotalMoney;
