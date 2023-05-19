const initalState = {
  loan: false,
};

const loanReducer = (state = initalState, action) => {
  switch (action.type) {
    case "APPLY":
      return { ...state, loan: true };
    default:
      return state;
  }
};

export default loanReducer;
