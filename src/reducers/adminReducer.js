const initState = {
  mentors: [],
  classes: [],
  students: [],
  categories: []
};
const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MENTOR_ADMIN":
      return {
        ...state,
        mentors: action.payload
      };
    case "CONFIRM_MENTOR_ADMIN":
      return {
        ...state,
        classes: [
          ...state.classes.map(item => {
            if (item._id === action.payload.id) {
              item.name = action.payload.nb;
            }
            return item;
          })
        ]
      };
    case "DELETE_MENTOR_ADMIN":
      return {
        ...state,
        mentors: [...state.classes.filter(item => item._id !== action.id)]
      };

    case "FETCH_STUDENT_ADMIN":
      console.log(action.payload);
      return {
        ...state,
        students: action.payload
      };

    case "FETCH_CLASS_ADMIN":
      console.log(action.payload);
      return {
        ...state,
        classes: action.payload
      };

    case "FETCH_CATEGORY_ADMIN":
      console.log(action.payload);
      return {
        ...state,
        categories: action.payload
      };
    default:
      return state;
  }
};

export default adminReducer;
