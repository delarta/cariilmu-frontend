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
      return {
        ...state,
        students: action.payload
      };

    case "FETCH_CLASS_ADMIN":
      return {
        ...state,
        classes: action.payload
      };

    case "FETCH_CATEGORY_ADMIN":
      return {
        ...state,
        categories: action.payload
      };
    case "EDIT_CATEGORY_ADMIN":
      return {
        ...state,
        categories: [
          ...state.categories.map(item => {
            if (item._id === action.payload.id) {
              item.name = action.payload.name;
              item.photo = action.payload.photo;
            }
            return item;
          })
        ]
      };
    default:
      return state;
  }
};

export default adminReducer;

