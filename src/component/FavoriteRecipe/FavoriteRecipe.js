import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { clear_favroite } from '../../action';

import Item from '../Item/Item';

class FavroiteRecipe extends Component {
	render() {
		return (
			<div style={{ padding: 16 }}>
				<h2>
					Favroite List
					<Button
						variant="outlined"
						color="primary"
						size="small"
						style={{ marginLeft: 18 }}
						onClick={() => this.props.clear_favroite()}
					>
						Clear
					</Button>
				</h2>

				<Grid spacing={32} container direction={'row'} style={{ overflow: 'hidden' }}>
					{this.props.result.map((result, index) => (
						<Item key={index} result={result} isFav={true} star={false} />
					))}
				</Grid>
			</div>
		);
	}
}

const mapToProps = (state) => ({
	result: state.favroite
});

export default connect(mapToProps, { clear_favroite })(FavroiteRecipe);
