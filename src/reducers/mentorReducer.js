const initState = {
  mentor: {},
  classes: [],
  students: [],
  payments: []
};
const mentorReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MENTOR":
      return {
        ...state,
        mentor: action.payload
      };
    case "ADD_CLASS_MENTOR":
      return {
        ...state,
        classes: [...state.classes, action.payload]
      };
    case "EDIT_CLASS_MENTOR":
      return {
        ...state,
        classes: [
          ...state.classes.map(item => {
            if (item._id === action.payload._id) {
              item = action.payload
            }
            return item;
          })
        ]
      };
    case "DELETE_CLASS_MENTOR":
      return {
        ...state,
        classes: [...state.classes.filter(item => item._id !== action.id)]
      };
    case "FINISH_CLASS_MENTOR":
      return {
        ...state,
        classes: [
          ...state.classes.map(item => {
            if (item._id === action.payload._id)
              item.status = action.payload.status;
            return item;
          })
        ]
      };
    case "FETCH_CLASS_MENTOR":
      return {
        ...state,
        classes: action.payload
      };
    case "FETCH_PAYMENT_MENTOR":
    return{
      ...state,
      payments: action.payload
    }
    case "EDIT_MENTOR_PROFILE":
      return {
        ...state,
        mentor: action.payload
      };
    default:
      return state;
  }
};

export default mentorReducer;
