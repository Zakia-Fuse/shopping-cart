const productsReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
