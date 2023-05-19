export function deposit() {
  return { type: "DEPOSIT", payload: 10 };
}
export function loading() {
  return { type: "LOADING" };
}
export function asyncDeposit() {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(deposit());
    }, 2000);
  };
}
export function withdraw() {
  return { type: "WITHDRAW", payload: 10 };
}
export function asyncWithdraw() {
  return (dispatch) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(withdraw());
    }, 2000);
  };
}
