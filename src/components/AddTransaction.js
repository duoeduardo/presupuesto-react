import React, { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [Amount, setAmount] = useState(0);

  return (
    <div>
      <h3>Agregar nueva Transaccion</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Concepto</label>
          <input type="text" placeholder="Ingresa Concepto..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Cantidad <br />
            (Negativo - Gastos, Positivo - Ingreso)
          </label>
          <input type="number" placeholder="Ingresa Cantidad..." />
        </div>
        <button className="btn">Agregar Transaccion</button>
      </form>
    </div>
  );
};
