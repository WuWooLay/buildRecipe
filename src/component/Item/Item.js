import React from 'react';
import { connect } from 'react-redux';
import { addFavroite, delFavroite } from '../../action';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

import FavoriteIcon from '@material-ui/icons/Favorite';

import './Item.css';

class Item extends React.Component {
	fav = (result) => {
		this.props.addFavroite(result);
	};

	delFav = (result) => {
		this.props.delFavroite(result);
	};

	render() {
		// console.log('this.props', this.props);
		let { result, isFav, star } = this.props;

		return (
			<Grid item xs={12} sm={4} style={{ marginBottom: 10 }}>
				<Card style={{ display: 'flex' }}>
					<div style={{ display: 'flex', flexDirection: 'column' }}>
						<CardActions disableActionSpacing>
							{isFav ? (
								<Tooltip title="Favorite" aria-label="Favorite" placement="right">
									<IconButton
										color="primary"
										aria-label="Add to favorites"
										onClick={() => this.delFav(result)}
									>
										<FavoriteIcon/>
									</IconButton>
								</Tooltip>
							) : !star ? (
								<Tooltip title="Favorite" aria-label="Favorite" placement="right">
									<IconButton aria-label="Add to favorites" onClick={() => this.fav(result)}>
										<FavoriteIcon />
									</IconButton>
								</Tooltip>
							) : (
								<Tooltip title="Favorite" aria-label="Favorite" placement="right">
									<IconButton
										color="primary"
										aria-label="Add to favorites"
										onClick={() => this.delFav(result)}
									>
										<FavoriteIcon/>
									</IconButton>
								</Tooltip>
							)}
						</CardActions>
						<CardContent style={{ flex: '1 0 auto', paddingTop: 0 }}>
							<Typography variant="h6">
								<a href={result.href} style={{ textDecoration: 'none' }}>
									{result.title}{' '}
								</a>
							</Typography>
							<Typography component="p" color="textSecondary">
								{result.ingredients}
							</Typography>
						</CardContent>
					</div>
					<CardMedia image={result.thumbnail} title={result.title} style={{ width: 151 }} />
				</Card>
			</Grid>

			// <div className="Item_Container ">
			// 	<div className="Item_Middle">

			// 		<a href={result.href}>{result.title}</a>
			// 		<p></p>
			// 	</div>

			// 	<div className="Item_Star"> Img </div>
			// </div>
		);
	}
}

export default connect(null, {
	addFavroite,
	delFavroite
})(Item);
