import React from "react";

export const IncomePres = () => {
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Ingreso</h4>
          <p className="money plus">+$0.00</p>
        </div>
        <div>
          <h4>Gastos</h4>
          <p className="money minus">-$0.00</p>
        </div>
      </div>
    </>
  );
};
