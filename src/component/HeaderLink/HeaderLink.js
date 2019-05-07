import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Tooltip from '@material-ui/core/Tooltip';
import Badge from '@material-ui/core/Badge';

import InfoIcon from '@material-ui/icons/Info';

const styles = {
	root: {
		flexGrow: 1
	},
	grow: {
		flexGrow: 1
	},
	Recipe: {
		color: '#ffffff',
		textDecoration: 'none'
	}
};

class HeaderLink extends React.Component {
	render() {
		return (
			<div style={styles.root}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" color="inherit" style={styles.grow}>
							<Link to="/" style={styles.Recipe}>
								Recipe
							</Link>
						</Typography>

						<Link to="/" style={styles.Recipe}>
							<Tooltip title="Home" aria-label="Home">
								<IconButton color="inherit">
									<DashboardIcon />
								</IconButton>
							</Tooltip>
						</Link>

						<Link to="/favorite" style={styles.Recipe}>
							<Tooltip title="Favorite" aria-label="Favorite">
								<IconButton color="inherit">
									<Badge badgeContent={this.props.favriote.length} color="secondary">
										<FavoriteIcon />
									</Badge>
								</IconButton>
							</Tooltip>
						</Link>

						<Link to="/about" style={styles.Recipe}>
							<Tooltip title="About" aria-label="About">
								<IconButton color="inherit">
									<InfoIcon />
								</IconButton>
							</Tooltip>
						</Link>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		favriote: state.favroite
	}),
	null
)(HeaderLink);
