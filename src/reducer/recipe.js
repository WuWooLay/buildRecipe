import { SET_RECIPES, ADD_FAVROITE, DEL_FAVROITE, CLEAR_FAVROITE, CLEAR_RECIPES } from '../action';

export const recipe = (state = [], action) => {
	switch (action.type) {
		case ADD_FAVROITE:
			state = state.map((data) => {
				if (data.title === action.recipe.title) {
					data.star = true;
				}
				return data;
			});

			return state;
		case DEL_FAVROITE:
			state = state.map((data) => {
				if (data.title === action.recipe.title) {
					data.star = false;
				}
				return data;
			});
			return state;
		case CLEAR_FAVROITE:
			state = state.map((data) => {
				data.star = false;
				return data;
			});
			return state;

		case SET_RECIPES:
			return action.results;
		case CLEAR_RECIPES:
			return [];
		default:
			return state;
	}
};
