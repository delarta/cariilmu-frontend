const initState = {
  user: {
    role: ""
  },
  role: ""
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      sessionStorage.setItem("token", action.response.data.token);
      sessionStorage.setItem("role", action.response.data.role);
      return {
        ...state,
        role: sessionStorage.getItem("role")
      };
    case "SIGN_UP":
      return state;
    case "SIGN_OUT":
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("role");
      return {
        ...state,
        role: ""
      };
    case "FETCH_ROLE":
      return {
        ...state,
        role: sessionStorage.getItem("role")
      };

    default:
      return state;
  }
};

export default authReducer;
