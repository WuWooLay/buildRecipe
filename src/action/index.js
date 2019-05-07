export const SET_RECIPES = 'SET_RECIPES';

export const setRecipe = (results) => {
	return {
		type: SET_RECIPES,
		results
	};
};

export const CLEAR_RECIPES = 'CLEAR_RECIPES';

export const clearRecipe = () => {
	return {
		type: CLEAR_RECIPES
	};
};

// Favroite
export const ADD_FAVROITE = 'ADD_FAVROITE';

export const addFavroite = (recipe) => {
	return {
		type: ADD_FAVROITE,
		recipe
	};
};

export const DEL_FAVROITE = 'REMOVE_FAVROITE';

export const delFavroite = (recipe) => {
	return {
		type: DEL_FAVROITE,
		recipe
	};
};

export const CLEAR_FAVROITE = 'CLEAR_FAVROITE';

export const clear_favroite = () => {
	return {
		type: CLEAR_FAVROITE
	};
};
