const initState = {
  mentors: [],
  classes: [],
  students: [],
  categories: [],
  payments: []
};
const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MENTOR_ADMIN":
      return {
        ...state,
        mentors: action.payload
      };
    case "VERIFY_MENTOR":
      console.log(action.payload);
      return {
        ...state,
        mentors: [
          ...state.mentors.map(item => {
            if (item._id === action.payload._id) {
              item.verified = action.payload.verified;
            }
            return item;
          })
        ]
      };
    case "DELETE_MENTOR":
      console.log(action.payload);
      return {
        ...state,
        mentors: [
          ...state.mentors.filter(item => item._id !== action.payload._id)
        ]
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
    case "DELETE_CLASS_ADMIN":
      return {
        ...state,
        classes: [
          ...state.classes.filter(item => item._id !== action.payload._id)
        ]
      };

    case "FETCH_CATEGORY_ADMIN":
      return {
        ...state,
        categories: action.payload
      };
    case "ADD_CATEGORY_ADMIN":
      return {
        ...state,
        categories: [...state.categories, action.payload]
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
    case "FETCH_PAYMENT_ADMIN":
      return {
        ...state,
        payments: action.payload
      };
    case "VERIFY_PAYMENT_ADMIN": {
      return {
        ...state,
        payments: [
          ...state.payments.map(item => {
            if (item._id === action.payload.id) {
              item.status = action.payload.status;
            }
            return item;
          })
        ]
      };
    }
    default:
      return state;
  }
};

export default adminReducer;
