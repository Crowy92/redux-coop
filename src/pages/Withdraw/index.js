import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { asyncWithdraw } from "../../actions";

export default function Withdraw() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.balanceReducer.loading);

  function handleWithdraw() {
    dispatch(asyncWithdraw());
  }
  return (
    <div>
      <h3>Withdraw Page: {balance}</h3>
      <button disabled={loading} onClick={handleWithdraw}>
        Withdraw
      </button>
    </div>
  );
}
