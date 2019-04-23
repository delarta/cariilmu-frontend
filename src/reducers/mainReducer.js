const initState = {
	mentors: [],
	classes: [],
	students: [],
	categories: [],
};

const mainReducer = (state = initState, action) => {
	switch (action.type) {
		case 'FETCH_CLASS':
			return {
				...state,
				classes: action.payload,
			};
		case 'FETCH_CATEGORY':
			return {
				...state,
				categories: action.payload,
			};
		case 'FETCH_CART':
			console.log(action.payload);
			return {
				...state,
				students: action.payload,
			};
		case 'FETCH_SCHEDULE':
			console.log(action.payload);
			return {
				...state,
				students: action.payload,
			};


		default:
			return state;
	}
};

export default mainReducer;
