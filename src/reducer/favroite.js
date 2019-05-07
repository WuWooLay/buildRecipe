import { ADD_FAVROITE, DEL_FAVROITE, CLEAR_FAVROITE } from '../action';

export const favroite = (state = [], action) => {
	switch (action.type) {
		case ADD_FAVROITE:
			const statement = state.filter((data) => data.title === action.recipe.title);
			if (statement.length === 1) {
				return state;
			}
			return [ ...state, action.recipe ];
		case DEL_FAVROITE:
			state = state.filter((data) => data.title !== action.recipe.title);
			return state;
		case CLEAR_FAVROITE:
			state = [];
			return state;
		default:
			return state;
	}
};
