const bookReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD":
    default:
      return [...state, action.payload];
  }
};

export default bookReducer;
