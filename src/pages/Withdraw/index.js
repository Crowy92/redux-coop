import React, { useState } from "react";

export default function Withdraw() {
  const [balance, setBalance] = useState(0);
  function handleWithdraw() {
    setBalance((prevBalance) => prevBalance - 100);
  }
  return (
    <div>
      <h3>Withdraw Page: {balance}</h3>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}
