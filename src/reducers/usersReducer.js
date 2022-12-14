const usersReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case "REGISTER_USER":
      return {
        ...state,
        loading: false,
        userInfo: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        loading: false,
        userInfo: {},
      };
    default:
      return state;
  }
};

export default usersReducer;
