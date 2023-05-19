import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Home() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  const onLoan = () => {
    dispatch({
      type: "APPLY",
    });
  };
  return (
    <div>
      <h3>Home Page: {balance}</h3>
      <button disabled={loan} onClick={onLoan}>
        Give me the money!
      </button>
      <h3>{loan && "loan approved"}</h3>
    </div>
  );
}
