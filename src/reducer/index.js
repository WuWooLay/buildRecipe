import { combineReducers } from 'redux';

import { recipe } from './recipe';
import { favroite } from './favroite';

export const RootReducer = combineReducers({
	recipe,
	favroite
});
