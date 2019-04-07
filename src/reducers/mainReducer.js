const initState = {
  mentor: {},
  classes: [],
  students: []
};

const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CLASS":
     return {
       ...state,
       classes : action.payload
     }
    default:
      return state;
  }
};

export default mainReducer;
