import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setRecipe, clearRecipe } from '../../action';

import LinearProgress from '@material-ui/core/LinearProgress';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Item from '../Item/Item';

class SearchRecipe extends Component {
	state = {
		ingridients: '',
		name: '',
		progress: false
	};

	find = () => {
		this.setState({
			progress: true
		});

		const { ingridients, name } = this.state;

		const url = 'https://recipepuppyproxy.herokuapp.com/api/';

		fetch(`${url}?i=${ingridients}&q=${name}`, {
			method: 'GET'
		})
			.then((res) => res.json())
			.then((json) => {
				let { results } = json;
				this.props.setRecipe(results);
				results = results.map((data) => {
					data.star = false;
					return data;
				});

				this.setState({ results, progress: false });
			});
	};

	render() {
		return (
			<div>
				<Grid
					style={{ paddingTop: 20, paddingBottom: 10 }}
					container
					direction={'row'}
					justify={'center'}
					alignItems={'center'}
				>
					<Grid item xs={11} sm={4}>
						<Card>
							{this.state.progress ? <LinearProgress /> : ''}
							<CardContent>
								<Typography color="textSecondary" gutterBottom>
									Search Your Recipe
								</Typography>
								<TextField
									id="outlined-name"
									label="Ingredients"
									placeholder="garlic, onion"
									onChange={(e) => {
										this.setState({ ingridients: e.target.value });
									}}
									margin="normal"
									variant="outlined"
									style={{ width: '100%' }}
								/>
								<TextField
									id="outlined-name"
									label="Food Name"
									onChange={(e) => {
										this.setState({ name: e.target.value });
									}}
									placeholder="Pasta"
									margin="normal"
									variant="outlined"
									style={{ width: '100%' }}
								/>
							</CardContent>
							<CardActions>
								<Button variant="contained" color="primary" size="small" onClick={() => this.find()}>
									Find
								</Button>
								<Button variant="outlined" color="secondary" size="small" onClick={() => this.props.clearRecipe()}>
									Clear
								</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>

				<div style={{ padding: 16 }}>
					{this.props.result.length >> 0 ? <h2>Search List</h2> : ''}

					<Grid spacing={32} container direction={'row'} style={{ overflow: 'hidden' }}>
						{this.props.result.map((result, index) => (
							<Item key={index} result={result} isFav={false} star={result.star} />
						))}
					</Grid>
				</div>

			</div>
		);
	}
}

const mapToProps = (state) => ({
	result: state.recipe
});

export default connect(mapToProps, {
	setRecipe,
	clearRecipe
})(SearchRecipe);
