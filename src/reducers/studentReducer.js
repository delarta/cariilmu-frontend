const initState = {
  todos: [],
  user: {},
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
  classes: [
    {
      id: 1,
      image: require('../assets/img/logodesign.jpg'),
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
      category: "art",
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
<<<<<<< HEAD
      image: require('../assets/img/native.jpg'),
=======
      image: require('../assets/img/art.jpg'),
>>>>>>> 900457fd680deff6e47e8dfc3b07be673d12bb6f
      name: "Basic Native",
      mentor: "Andy Setiawan",
      category: "programming",
      fee: 70000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 5,
<<<<<<< HEAD
      image: require('../assets/img/soccer.jpg'),
=======
      image: require('../assets/img/sport.jpg'),
>>>>>>> 900457fd680deff6e47e8dfc3b07be673d12bb6f
      name: "Basic Soccer",
      mentor: "Harun",
      category: "sport",
      fee: 700000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 6,
<<<<<<< HEAD
      image: require('../assets/img/persuasion.jpg'),
=======
      image: require('../assets/img/art.jpg'),
>>>>>>> 900457fd680deff6e47e8dfc3b07be673d12bb6f
      name: "Basic Persuasion",
      mentor: "Zakarias",
      category: "business",
      fee: 90000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 7,
<<<<<<< HEAD
      image: require('../assets/img/japanese.jpg'),
=======
      image: require('../assets/img/art.jpg'),
>>>>>>> 900457fd680deff6e47e8dfc3b07be673d12bb6f
      name: "Basic Japanese Language",
      mentor: "Meggy",
      category: "language",
      fee: 80000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    },
    {
      id: 8,
<<<<<<< HEAD
      image: require('../assets/img/math.jpg'),
=======
      image: require('../assets/img/art.jpg'),
>>>>>>> 900457fd680deff6e47e8dfc3b07be673d12bb6f
      name: "Basic Aljebra",
      mentor: "Tandjaja",
      category: "mathematic",
      fee: 60000,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam eveniet quae, harum veritatis voluptate reiciendis dignissimos! Voluptates, in. Sunt accusantium quaerat exercitationem tenetur minima id soluta fuga ullam officiis omnis, laboriosam reprehenderit eligendi molestiae sapiente vel optio similique voluptatibus eos, necessitatibus eveniet, quibusdam quisquam magnam amet dolores! Nulla, totam."
    }
  ]
};

const studentReducer = (state = initState, action) => {
  switch (action.type) {
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
