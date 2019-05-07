import React from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const About = () => (
	<div style={{ padding: 16 }}>
		<Paper style={{ padding: 20 }} elevation={1}>
			<Typography variant="h5" component="h3" style={{marginBottom: 8}}>
				About Of Recipe Finder
			</Typography>
			<Typography component="p">This is v0.1 App</Typography>
			<Typography component="p">Middle Of Rockstar Developer (2)</Typography>
			<Typography component="p">Developed By Lwin Moe Paing</Typography>
		</Paper>
	</div>
);

export default About;
