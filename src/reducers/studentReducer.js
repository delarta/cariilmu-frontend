const initState = {
  todos: [],
  user: {
    name: "Joni",
    username: "",
    email: "",
    role: "student"
  },
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
      name: "Programming",
      image: "ti-desktop"
    },
    {
      id: 6,
      name: "Programming",
      image: "ti-desktop"
    },
    {
      id: 7,
      name: "Programming",
      image: "ti-desktop"
    },
    {
      id: 8,
      name: "Programming",
      image: "ti-desktop"
    }
  ],
  classes: [
    {
      id: 1,
      image: require('../assets/img/art.jpg'),
      name: "Logo Design",
      mentor: "Delarta Tok Adin",
      category: "design",
      fee: 30000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 2,
      image: require('../assets/img/art.jpg'),
      name: "Face Illustration",
      mentor: "Ade Rahman",
      category: "design",
      fee: 50000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 3,
      image: require('../assets/img/music.jpg'),
      name: "Basic Arpergio",
      mentor: "Septebrina",
      category: "music",
      fee: 35000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 4,
      image: require('../assets/img/art.jpg'),
      name: "Reog Dance",
      mentor: "Andy Setiawan",
      category: "dance",
      fee: 70000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 5,
      image: require('../assets/img/sport.jpg'),
      name: "Swimming",
      mentor: "Harun",
      category: "sport",
      fee: 700000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 6,
      image: require('../assets/img/art.jpg'),
      name: "Abstract Painting",
      mentor: "Zakarias",
      category: "art",
      fee: 90000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    }
  ]
};

const studentReducer = (state = initState, action) => {
  switch (action.type) {
    // case "SIGN_IN":
    //   console.log(action.response.username);
    //   return {
    //     ...state,
    //     user: {
    //       username: action.response.username,
    //       name: action.response.name,
    //       email: action.response.email,
    //       role: "student"
    //     }
    //   };
    // case "SIGN_UP":
    //   console.log(action.type);
    //   return {
    //     ...state,
    //     user: { name: action.name, role: "student" }
    //   };
    case "LOG_OUT":
      return {
        ...state,
        user: { name: "", email: "", role: "guest" }
      };
    case "FETCH_CLASS":
      return state.classes;
    default:
      return state;
  }
};

export default studentReducer;
