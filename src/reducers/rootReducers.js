const initState = {
  todos: [],
  user: [
    {
      name: ""
    }
  ],
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
      image: "ti-blackboard"
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
    },
  ],
  classes: [
    {
      id: 1,
      name: "Logo Design",
      mentor: "Delarta Tok Adin",
      category: "design",
      fee: 30000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 2,
      name: "Face Illustration",
      mentor: "Ade Rahman",
      category: "art",
      fee: 50000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 3,
      name: "Basic Arpergio",
      mentor: "Septebrina",
      category: "music",
      fee: 35000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 4,
      name: "Basic React Native",
      mentor: "Andy Setiawan",
      category: "programming",
      fee: 70000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 5,
      name: "Swimming",
      mentor: "Harun",
      category: "sport",
      fee: 700000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 6,
      name: "Basic Persuasive",
      mentor: "Zakarias",
      category: "business",
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

const rootReducer = (state = initState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "SIGN_IN":
      return {
        ...state,
        user: [{name: action.data}]
      };
    case "FETCH_CLASS":
      return state.classes;
    default:
      break;
  }
  return state;
};

export default rootReducer;
