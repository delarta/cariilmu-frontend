const initState = {
  todos: [],
  student: {},
  token: false,
  isAdmin: false,
  mentors: [],
  students: [],
  categories: [
    {
      id: 1,
      name: "Art",
      image: "ti-palette"
    },
    {
      id: 2,
      name: "Music",
      image: "ti-music-alt"
    },
    {
      id: 3,
      name: "Sport",
      image: "ti-basketball"
    },
    {
      id: 4,
      name: "Programming",
      image: "ti-desktop"
    },
    {
      id: 5,
      name: "Business",
      image: "ti-money"
    },
    {
      id: 6,
      name: "Design",
      image: "ti-pencil-alt"
    },
    {
      id: 7,
      name: "Language",
      image: "ti-comment-alt"
    },
    {
      id: 8,
      name: "Mathematic",
      image: "ti-ruler-alt-2"
    }
  ],
  classes: []
};

const studentReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CLASS_STUDENT":
      return {
        ...state,
        classes: action.payload
      };

    case "CONFIRM_PAYMENT":
      return {
        ...state,
        students: [
          ...state.students.map(item => {
            if (item.class._id === action.payload.classid) {
              item.photo = action.payload.photo;
            }
            return item;
          })
        ]
      };
    case "ENROLL_CLASS":
      return {
        ...state,
        students: [
          ...state.students.map(item => {
            if (item._id === action.payload.id) {
              item.name = action.payload.name;
            }
            return item;
          })
        ]
      };
    case "FETCH_STUDENT_DATA":
      return {
        student: action.payload
      };

    default:
      return state;
  }
};

export default studentReducer;
