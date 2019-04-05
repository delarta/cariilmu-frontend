const initState = {
  students: [],
  classes: [
    {
      id: 1,
      image: require("../assets/img/art.jpg"),
      name: "Logo Design",
      mentor: "Delarta Tok Adin",
      category: "design",
      status: "active",
      createdAt: new Date(),
      fee: 30000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 2,
      image: require("../assets/img/art.jpg"),
      name: "Face Illustration",
      mentor: "Ade Rahman",
      category: "design",
      status: "active",
      createdAt: new Date(),
      fee: 50000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 3,
      image: require("../assets/img/music.jpg"),
      name: "Basic Arpergio",
      mentor: "Septebrina",
      category: "music",
      status: "not active",
      createdAt: new Date(),
      fee: 35000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 4,
      image: require("../assets/img/art.jpg"),
      name: "Reog Dance",
      mentor: "Andy Setiawan",
      category: "dance",
      status: "active",
      createdAt: new Date(),
      fee: 70000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 5,
      image: require("../assets/img/sport.jpg"),
      name: "Swimming",
      mentor: "Harun",
      category: "sport",
      status: "not active",
      createdAt: new Date(),
      fee: 700000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 6,
      image: require("../assets/img/art.jpg"),
      name: "Abstract Painting",
      mentor: "Zakarias",
      category: "art",
      status: "active",
      createdAt: new Date(),
      fee: 90000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 7,
      name: "British Conversation",
      mentor: "Meggy",
      category: "language",
      fee: 100000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 8,
      name: "Algebra",
      mentor: "Liliana",
      category: "mathematic",
      fee: 90000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
  ]
};
const adminReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_CLASS":
      return {
        ...state,
        classes: [...state.classes.filter(item => item.id !== action.id)]
      };
    case "LOG_OUT":
      return {
        ...state,
        isAdmin: false
      };
    case "FETCH_CLASS":
      return state.classes;
    default:
      return state;
  }
};

export default adminReducer;

