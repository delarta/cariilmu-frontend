const initState = {
  mentors: [],
  classes: [],
  students: [],
  categories: []
};

const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CLASS":
     return {
       ...state,
       classes : action.payload
     }
    case "FETCH_CATEGORY":
     return {
       ...state,
       categories : action.payload
     }
    case "FETCH_MENTOR_PUBLIC": 
    return {
      ...state,
      mentors: action.payload
    }
    default:
      return state;
  }
};

export default mainReducer;
