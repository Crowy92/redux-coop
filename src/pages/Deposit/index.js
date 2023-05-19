import React, { useState } from "react";

export default function Deposit() {
  const [balance, setBalance] = useState(0);

  function handleDeposit() {
    setBalance((prevBalance) => prevBalance + 100);
  }
  return (
    <div>
      <h3>Deposit Page: {balance}</h3>
      <button onClick={handleDeposit}>Deposit</button>
    </div>
  );
}
