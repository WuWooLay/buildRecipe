import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchRecipe from './SearchRecipe/SearchRecipe';
import FavoriteRecipe from './FavoriteRecipe/FavoriteRecipe';
import HeaderLink from './HeaderLink/HeaderLink';
import About from './About/About';



const App = () => (
		<BrowserRouter>
			<HeaderLink />

			<Switch>
				<Route exact path="/" component={SearchRecipe} />
				<Route path="/favorite" component={FavoriteRecipe} />
				<Route path="/about" component={About} />
				<Route render={() => <h3>404 not Found!</h3>} />
			</Switch>
		</BrowserRouter>
);

export default App;
