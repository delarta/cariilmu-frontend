const initState = {
  mentor: {},
  classes: [],
  students: []
};
const mentorReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MENTOR":
      return {
        ...state,
        mentor: action.payload
      };
    case "ADD_CLASS_MENTOR":
      console.log(action.payload);
      return {
        ...state,
        classes: [...state.classes, action.payload]
      };
    case "EDIT_CLASS_MENTOR":
      console.log(action.payload);
      return {
        ...state,
        classes: [
          ...state.classes.map(item => {
            if (item._id === action.payload.id) {
              item.name = action.payload.name;
              item.info = action.payload.info;
              item.schedule = action.payload.schedule;
              item.category = action.payload.category;
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
    case "EDIT_MENTOR_PROFILE":
      console.log(action.payload);
      return {
        ...state,
        mentor: action.payload
      };
    default:
      return state;
  }
};

export default mentorReducer;
